import { render } from 'utils/test-utils';

import Page, { IPage } from '../Page'

const defaultProps: IPage = {
  children: <></>
}

const setupComponent = (props = {}) => (
  render(<Page {...defaultProps} { ...props } />)
)

describe('Page', () => {
  describe('renders as expected', () => {
    it('renders the `Page`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('page')).toBeInTheDocument()
    })

    it('renders the `Main`', () => {
      const { getByTestId } = setupComponent()
      expect(getByTestId('page-main')).toBeInTheDocument()
    })

    it('renders the `children`', () => {
      const children = <div data-testid='page-children'>children</div>
      const { getByTestId } = setupComponent({ children })
      expect(getByTestId('page-children')).toBeInTheDocument()
    })
  });
});
