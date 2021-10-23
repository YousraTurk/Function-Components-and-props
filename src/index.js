import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './Components/First';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title={(<b>Flower</b>)} Body={(<b>“The earth laughs in flowers.”</b>)} imageurl="./pics/img1.jpg" />
    {/* <First isopen={false}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
