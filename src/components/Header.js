import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-3">Quản lý thành viên</h1>
            <p className="lead">Với dữ liệu Json</p>
          </div>
        </div>
    );
  }
}

export default Header;
