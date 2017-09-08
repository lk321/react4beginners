import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, HashRouter, Route } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

// Styles
// Reducers
import reducers from './reducers';

// Components
import Hello from './components/hello';


const store = createStore(reducers, applyMiddleware(thunk, logger));

render(
    <LocaleProvider locale={esES}>
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Hello} />
                </Switch>
            </HashRouter>
        </Provider>
    </LocaleProvider>
    , document.getElementById('root'));