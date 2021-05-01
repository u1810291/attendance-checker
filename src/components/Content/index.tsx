import { Container, Content } from './style'
import { Route, Redirect } from 'react-router-dom'
import routes from '../../routes/main-routes'

export default () => {
  return (
    <Container>
      <Content>
        {routes.map(({ path, component }, index) => (
          <div key={index + 1}>
            <Route
              exact
              path={path}
              component={component}
            />
          </div>
        ))}
      </Content>
    </Container>
  )
}
