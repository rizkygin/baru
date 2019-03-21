import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css'; //import cssnya
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
  {
    nama:"Apel Biasa",
    color :'Merah',
    img :'Apelmerah.jpg',
  },
  {
    nama:"Apel Aple",
    color : 'Biru',
    img :'Apelbiru.jpg',
  },
  {
    nama:"Apel Malang",
    color : 'Hijau',
    img :'Apelhijau.jpg',
  },
  {
    nama:"Apel Setengah Masak",
    color : 'Kuning',
    img :'Apelkuning.jpg',
  }
];


ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);

serviceWorker.register();
