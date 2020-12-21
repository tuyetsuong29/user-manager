import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      level: "",
    };
  }

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  changeForm = () => {
    if (this.props.status === true) {
      return (
        <div className="col mt-5">
          <form method="post">
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Add new user</div>
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => this.isChange(e)}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => this.isChange(e)}
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="level"
                    onChange={(e) => this.isChange(e)}
                    required
                  >
                    <option>Selected</option>
                    <option>Admin</option>
                    <option>Moderator</option>
                    <option>Member</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="reset"
                    value="Add New User"
                    className="btn btn-block btn-light"
                    onClick={(name, phone, level) =>
                      this.props.addUser(
                        this.state.name,
                        this.state.phone,
                        this.state.level
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  render() {
    return <div>{this.changeForm()}</div>;
  }
}

export default AddUser;
