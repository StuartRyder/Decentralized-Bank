import React, { Component } from 'react'
import farmer from '../Anurag.jpg'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div
          className="navbar-brand col-sm-3 col-md-2 mr-0"
        >
          <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp; Anurag Token Staking
        </div>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
