
import React from 'react';
import Navigation from "./app/common/navigation";
import store from './app/redux/store/store';
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  );
};

export default App;
