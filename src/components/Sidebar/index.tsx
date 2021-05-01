import { Main, Head, Body, Footer } from './style'
import routes from '../../routes/main-routes'
import Item from './Item'

export default () => {
  return (
    <Main>
      <Head>Head</Head>
      <Body>
        {routes.map(({ title, path }, index) => (
          <Item
            key={index + 1}
            title={title}
            path={path} />
        ))}
      </Body>
      <Footer>Footer</Footer>
    </Main>
  )
}
