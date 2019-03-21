import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: 'Home',
    };
  }
  clicked(menu){
    this.setState({
      active: menu,
    });
  }

  render() {
    return (
      <div id="App">
      {/*Map akan menloop sebanyak menu yang didefenisikan*/}
      {/*kemudian mengembalikan <a>*/}
        <nav className = "nav">{this.props.items.map(( menu, index) =>{
          var style = 'menu';
          if(this.state.active === menu){
            style = '${style} is-active';
          }
          return <a
            className = {style}
              //bind untuk 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
              >
                {menu}
              </a>;
            }
        )}
        </nav>
        <div className = "info">
          ini adalah <span className = "selected">{this.state.active}</span>
        </div>
      </div>
      );
    }
  }
export default App;
