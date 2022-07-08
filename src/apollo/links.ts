import qs from 'qs'
import camelCase from 'camelcase'
import pThrottle from 'p-throttle'
import fetch from 'isomorphic-fetch'
import { RestLink } from 'apollo-link-rest'
import { onError } from '@apollo/client/link/error'
import { locales, defaultLocale } from 'next-i18next.config'

const throttledFetch = pThrottle({ limit: 2, interval: 500 })

export const getParams = (searchRaw = ''): qs.ParsedQs => {
  const search = qs.parse(searchRaw, { ignoreQueryPrefix: true, strictNullHandling: true })

  for (const key in search) {
    if (search[key] === undefined || search[key] === 'undefined') delete search[key]
  }

  return search
}

const getLocale = (): string => {
  const { pathname }: any = typeof window !== 'undefined' ? window.location : {}
  const firstPath = (pathname || '').substring(1).split('/')[0]
  const locale = locales.includes(firstPath) ? firstPath : defaultLocale

  return locale
}

const resolveSearchParams = (uri: RequestInfo): string => {
  const { search } = new URL(uri.toString())
  const params = getParams(search)
  const locale = getLocale()

  const defaultParams = {
    language: locale
  }

  return qs.stringify(Object.assign({}, defaultParams, params))
}

const customFetch = throttledFetch(async (uri: RequestInfo, options: RequestInit) => {
  const params = resolveSearchParams(uri)
  const url = `${uri.toString().split('?')[0]}?${params}`

  const res = await fetch(url, options)
  
  if (res.status >= 300) {
    const body = await res.clone().json().then(b => b)

    return Promise.reject({
      status: res.status,
      error: res.statusText, 
      message: res.statusText,
      body
    })
  }

  return res
})

export const error = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions: { code }}) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Code: ${code}`)
    })
  }

  if (networkError) {
    console.log(`[Network error]: ${JSON.stringify(networkError)}`)
  }
})

export const rest = new RestLink({
  customFetch,
  uri: process.env.NEXT_PUBLIC_APP_BFF,
  fieldNameNormalizer: (key) => camelCase(key),
})
