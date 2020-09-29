import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      domain: []
    }
  }

  componentDidMount() {
    var str = 'aaaa';

    while (str !== 'zzzz') {
      str = ((parseInt(str, 36) + 1).toString(36)).replace(/0/g, 'a'); // 0 yerine a yazılırsa alfabetik oluşur 
      this.state.domain.push(str);
    };

    this.state.domain.forEach((element, index) => {
      setTimeout(() => {
        document.getElementById("denenen").innerText = element + '.com';
        this.domainsorgu(element);
      }, 300 * (index + 1))
    });
  }

  domainsorgu(str) {
    fetch('https://rdap.verisign.com/com/v1/domain/' + str + '.com')
      .then(response => {
        if (response.ok === false) {
          //console.log(str + '.com');
          var node = document.createElement("p");
          var textnode = document.createTextNode("Bulunan Domain : " + str + ".com");
          node.appendChild(textnode);
          document.getElementById("domainlist").appendChild(node);
        }
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="denenen">
          </p>
          <p id="domainlist">
            Domain Query
          </p>
        </header>
      </div>
    )
  }
}
