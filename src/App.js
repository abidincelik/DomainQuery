import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  componentDidMount(){
    var str= 'aaa';

    while(str!=='zzz') {
    str= ((parseInt(str, 36)+1).toString(36)).replace(/0/g,'0'); // 0 yerine a yazılırsa alfabetik oluşur 

    var node = document.createElement("p");                
    var textnode = document.createTextNode("Bulunan Domain : " + str);        
    node.appendChild(textnode);                             
    document.getElementById("domainlist").appendChild(node); 

    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p id="domainlist">
          Domain Query
        </p>
      </header>
    </div>
    )
  }
}
