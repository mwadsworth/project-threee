import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    users: [],
    fullName: "",
    email: "",
    userId: 0
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ users: res.data, fullName: "", email: "" }))
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Calling save1");
    if (this.state.fullName && this.state.email) {
      console.log("Calling save2");
      API.saveUser({
        fullName: this.state.fullName,
        password: "XXXXXX",
        email: this.state.email
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  setUser = id => {
    console.log("Inside set user");
    // Clear localStorage
    // localStorage.clear();

    console.log(id);
    // console.log(fullName);
    // console.log(email);
    // Store all content into localStorage
    localStorage.setItem("userId", id);
    this.setState({userId: id});
    // localStorage.setItem("fullName", fullName);
    // localStorage.setItem("email", email);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create User</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.fullName}
                onChange={this.handleInputChange}
                name="fullName"
                placeholder="Full Name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.fullName)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
            <h1>Users</h1>
            <h6>Current User ID = <span>{this.state.userId}</span></h6>
            </Jumbotron>
            {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user.id} >
                    <strong onClick={() => this.setUser(user.id)}>
                      {user.fullName} at {user.email}
                    </strong>
                    <DeleteBtn onClick={() => this.deleteUser(user.id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;
