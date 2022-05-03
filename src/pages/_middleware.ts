import { NextRequest, NextResponse } from 'next/server'
import { fallbackLocales, defaultLocale } from '../../next-i18next.config'

const LOCALE = /^\/[a-zA-Z-]+/

export function middleware(request: NextRequest) {
  const localeMatched = (LOCALE.exec(request.nextUrl.pathname) || [])[0]
  const locale = (localeMatched || '').replace(/\//g, '')

  const shouldHandleLocale = fallbackLocales.includes(locale)

  if (shouldHandleLocale) {
    const url = request.nextUrl.clone()
    url.pathname = request.nextUrl.pathname.replace(LOCALE, '')

    return NextResponse.redirect(url)
  }

  return undefined
}
