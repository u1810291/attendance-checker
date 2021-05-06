import { Main, Head, Body, Footer, Wrap } from './style'
import routes from '../../routes/main-routes'
import Item from './Item'

export default () => {
  return (
    <Wrap>
      <Main>
        <Head></Head>
        <Body>
          {routes.map(({ title, path }, index) => (
            <Item
              key={index + 1}
              title={title}
              path={path} />
          ))}
        </Body>
      </Main>
      <Footer></Footer>
    </Wrap>
  )
}
