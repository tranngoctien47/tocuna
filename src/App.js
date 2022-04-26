import React, { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import store from './redux';
import Routes from './core/RouterConfig';
import TranslateProvider from './translate';



function App() {

  useEffect(() => {
    Aos.init({ duration: 500, startEvent: "load" });
    Aos.refresh();
  }, []);
  return (
    <TranslateProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Suspense fallback={<Loadding />}> */}

            <Routes />
          </Suspense>
        </BrowserRouter >
      </Provider >
    </TranslateProvider>


  );
}

export default App;
