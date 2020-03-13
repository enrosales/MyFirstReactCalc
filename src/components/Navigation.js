import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends Component {

  render() {
    return (
      <div className="Navigation">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            { this.props.titulo }
        </a>        
        </nav>
      </div>
    )
  }
}
