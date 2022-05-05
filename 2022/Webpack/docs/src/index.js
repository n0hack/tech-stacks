import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const renderContainer = (Component) => {
  root.render(
    <AppContainer>
      <Component />
    </AppContainer>
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    renderContainer(App);
  });
}

// import Module from './module';

// const root = document.querySelector('#root');

// root.innerHTML = Module;

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
//   const myAlert = require('./components/myAlert').default;

//   btn.innerHTML = 'Click me';
//   btn.onclick = myAlert;

//   element.append(btn);
//   return element;
// }

// let element = component();
// document.body.append(element);

// if (module.hot) {
//   module.hot.accept('./components/myAlert.js', () => {
//     document.body.remove(element);
//     element = component();
//     document.body.append(element);
//   });
// }
