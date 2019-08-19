import React ,{ Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header'
import { GlobalStyle }  from './style.js';
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      // 将store 提供给所有的组件
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );

  }
}

export default App;
