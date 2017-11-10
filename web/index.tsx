import { App } from './components/app'
import { reducers, RootState } from './reducers'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { createBrowserHistory as createHistory } from 'history'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'

// create the browser history
const history = createHistory()

// grab the server's preloaded state and clear it from memory
const preloadedState: RootState = (window as any).__PRELOADED_STATE__
delete (window as any).__PRELOADED_STATE__

// define the redux store
const store: Store<RootState> = createStore(
  combineReducers(reducers),
  preloadedState,
  applyMiddleware(thunk)
)

// generate the app container
const container = (root: React.ComponentType): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={root} />
    </ConnectedRouter>
  </Provider>
)

render(container(App), document.getElementById('app'))
