import theme from 'styles/theme'
import { render, screen, fireEvent } from 'utils/test-utils'

import Main from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /Boilerplate NextJS - Alquipo Neto/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': theme.colors.mainBg
    })
  })

  it('should handle the button switch page', () => {
    render(<Main page="/page2" />)

    fireEvent.click(screen.getByRole('button', { name: /Mudar de Página/i }))

    expect(push).toHaveBeenCalledWith('/page2')
  })
})
