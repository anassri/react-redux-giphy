import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import {fetchGifs} from './actions/gifActions';
import * as APIUtil from './util/apiUtil';
import configureStore from './store';

const store = configureStore({ gifs: { gifs: [] }});

window.apiFetchGifs = APIUtil.fetchGifs;
window.fetchGifs = fetchGifs;
window.store = store;

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
