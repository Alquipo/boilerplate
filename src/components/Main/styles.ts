import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  color: ${({ theme }) => theme.colors.white};
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.div`
  margin-top: 3rem;
  width: min(30rem, 100%);
  height: min(30rem, 100%);
  position: relative;
`
export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 10rem;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-top: 1rem;
`
export const ButtonIcon = styled.button`
  background: transparent;
  color: inherit;
  width: 5rem;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`
