import { render } from 'src/util/test-utils'

import Header from '../Header'

const setupComponent = () => render(<Header />)

describe('Header', () => {
  describe('renders as expected', () => {
    it('renders the `Header`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('header')).toBeInTheDocument()
    })

    it('renders the `Container`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('header-container')).toBeInTheDocument()
    })

    it('renders the `Logo`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('header-logo')).toBeInTheDocument()
    })
  })
})
