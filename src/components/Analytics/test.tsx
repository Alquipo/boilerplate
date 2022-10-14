import { render } from 'utils/test-utils'

import Analytics from '.'

describe('<Analytics/>', () => {
  it('should render the script correctly', () => {
    render(<Analytics />)

    expect(document.querySelector('script')).toHaveAttribute(
      'src',
      `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`
    )
  })
})
