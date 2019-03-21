import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color : "Merah",
      image : "Apelmerah",
    };
  }
  clicked(rizky){
    //untuk memperbarui state sesuai dengan rizky yang dipilih
    this.setState({
      color : rizky.color,
      image : rizky.img,
      nama : rizky.nama,
    });
  }
  // rizkygambar(){
  //   var gambar = "Home";
  //   if(this.state.active === "Home"){
  //     gambar = "Home";
  //   }
  //   else if(this.state.active.toLowerCase() === "merah"){
  //     gambar = "Apelmerah";
  //   }
  //   else if(this.state.active.toLowerCase() === "kuning"){
  //     gambar = "Apelkuning";
  //   }
  //   else if(this.state.active.toLowerCase() === "hijau"){
  //     gambar = "Apelhijau";
  //   }
  //   else if(this.state.active.toLowerCase() === "biru"){
  //     gambar = "Apelbiru";
  //   }
  //   return <img src ={gambar+".jpg"} width = "200"/>
  // }

  render() {
    return (
      <div id="app">q
        { /* map akan loop sebanyak rizky yang didefinisikan*/ }
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((rizky,index) => {
            var style = 'rizky';
            // console.log(rizky.img );
//          rizky titik color maksudnya adalah karena rizky = item di index JS tidak lagi sebuah string, namun adalah Array Object
//          Maka menggunakan titik, agar dapat menentukkan object array mana yang akan di panggil
            if(this.state.color === rizky.color){
              style = '${style} is-active';
            }

            return <a
              className = {style+" "+ rizky.color}
              //bind untuk membuat // menjadikan (menjadikan "(this,rizky)" sebagai parameter)// 'rizky' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,rizky)}
              key = {index}
            >
              {rizky.nama}
            </a>;
          }
        )}
        </nav>

        <div className =  "info">
          ini adalah <span className = {"selected "+ this.state.color}>{this.state.color}</span>
          <p>Ini adalah gambar dari {this.state.nama}</p>
          <br/>
          <br/>
          <img src={this.state.image} width = "200"/>
          {/*this.rizkygambar()*/}
        </div>
      </div>
    );
  }
}

export default App;
