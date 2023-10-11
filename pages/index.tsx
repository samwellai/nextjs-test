import Head from 'next/head'
import {
  Container,
  Main,
  Title,
} from '../components/sharedstyles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>
        </Title>
      </Main>
    </Container>
  )
}
