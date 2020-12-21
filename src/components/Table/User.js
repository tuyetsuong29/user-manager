import React, { Component } from "react";

class User extends Component {

  showLevel = () => {
    if (this.props.level === 1) return "Admin";
    else if (this.props.level === 2) return "Moderator";
    else return "Member";
  };

  editClick = () => {
    this.props.editToUser();
    this.props.editForm();
  };

  deleteUserButton = (idUser) => {
    this.props.deleteUserButton(idUser);
  }

  render() {
    return (
      <tr>
        <td>{this.props.userId + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.showLevel()}</td>
        <td>
          <div className="btn-group">
            <button
              className="btn btn-warning fixed"
              onClick={() => this.editClick()}
            >
              EDIT
            </button>
            <button
              className="btn btn-danger remove"
              onClick = {(idUser) => this.deleteUserButton(this.props.userId)}
            >
              DELETE
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default User;
