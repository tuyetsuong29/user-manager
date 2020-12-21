import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table/Table";
import AddUser from "./components/AddUser";
import DataUser from "./components/Table/Data.json";

const { v4: uuidv4 } = require("uuid");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: [],
      textData: "",
      editUserStatus: false,
      userObj: {},
    };
  }

  UNSAFE_componentWillMount() {
    //Kiểm tra đã có localStorage chưa
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      let temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp,
      });
    }
  }

  editUser = (user) => {
    this.setState({
      userObj: user,
    });
  };

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  changeStatus = () => {
    this.setState({ status: !this.state.status });
  };

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.level = info.level;
      }
    });
    localStorage.getItem("userData", JSON.stringify(this.state.data));
  };

  deleteUser = (idUser) => {
    let tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData,
    });
    localStorage.getItem("userData", JSON.stringify(tempData));
  };

  getNewUserData = (name, phone, level) => {
    // Đóng gói giá trị trong 1 obj
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.level = level;
    let items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    });
    localStorage.getItem("userData", JSON.stringify(items));
  };

  getDataText = (dl) => {
    this.setState({
      textData: dl,
    });
  };

  render() {
    let result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textData) !== -1) {
        result.push(item);
      }
    });

    localStorage.setItem("userData", JSON.stringify(DataUser));
    return (
      <div>
        <Header />

        <div className="searchForm">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Searchbar
                  getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                  userObj={this.state.userObj}
                  check={(dl) => this.getDataText(dl)}
                  changeButton={() => this.changeStatus()}
                  status={this.state.status}
                  editUserStatus={this.state.editUserStatus}
                  changeStatusEdit={() => this.changeEditUserStatus()}
                />
              </div>

              <hr />

              <Table
                data={result}
                editToTable={(user) => this.editUser(user)}
                changeStatusEdit={() => this.changeEditUserStatus()}
                deleteUser={(idUser) => this.deleteUser(idUser)}
              />

              <AddUser
                status={this.state.status}
                addUser={(name, phone, level) =>
                  this.getNewUserData(name, phone, level)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
