import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

import * as S from './styles'

export type MainProps = {
  title?: string
  description?: string
  page?: string
}
const Main = ({
  title = 'Boilerplate NextJS - Alquipo Neto',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
  page
}: MainProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.Logo src="/img/nextjs-logo.svg" alt="Imagem escrito NEXT.JS" />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration>
        <Image
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
          layout="fill"
          objectFit="contain"
        />
      </S.Illustration>
      <S.Button onClick={() => router.push(page)}>Mudar de Página</S.Button>
    </S.Wrapper>
  )
}

export default Main
