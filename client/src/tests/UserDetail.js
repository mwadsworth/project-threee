import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  // e.g. localhost:3000/users/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.user.fullName} by {this.state.user.email}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Phone</h1>
              <p>
                {this.state.user.phone}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Main</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
