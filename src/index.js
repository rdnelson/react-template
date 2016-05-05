import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import App from './app';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-y" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const routingReducer = combineReducers({
    routing: routerReducer
});

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    routingReducer,
    DevTools.instrument(),
    applyMiddleware(middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
            <DevTools />
        </div>
    </Provider>
    , document.getElementById('app')
);
