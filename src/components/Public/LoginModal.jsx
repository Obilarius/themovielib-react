import React, { Component } from "react";
import {
  Checkbox,
  Button,
  Modal,
  Popover,
  Tooltip,
  Row,
  Col,
  FormGroup
} from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import cookie from "react-cookie";
import axios from "axios";

export default class LoginModal extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  responseGoogle = res => {
    console.log(res);

    // console.log(response.accessToken);
    // axios
    //   .post("https://api.tech/sessions/google", {
    //     google_token: response.accessToken
    //   })
    //   .then(response => {
    //     var userInfo = {
    //       id: response.data.data.id,
    //       token: response.data.data.attributes["auth-token"]
    //     };
    //     cookie.save("user", userInfo);
    //     console.log(response);
    //     LoginModal.setState({ showModal: false });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  responseFacebook = response => {
    console.log(response.accessToken);
    // axios
    //   .post("https://api.tech/sessions/facebook", {
    //     facebook_token: response.accessToken
    //   })
    //   .then(response => {
    //     console.log(response);
    //     var userInfo = {
    //       id: response.data.data.id,
    //       token: response.data.data.attributes["auth-token"]
    //     };
    //     cookie.save("user", userInfo);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  open = () => {
    this.setState({ showModal: true });
  };

  login = () => {
    // axios
    //   .post("https://api.tech/sessions", {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(response => {
    //     console.log(response);
    //     var userInfo = {
    //       id: response.data.data.id,
    //       token: response.data.data.attributes["auth-token"]
    //     };
    //     cookie.save("user", userInfo);
    //     // console.log(response);
    //     // var user = cookie.load('user');
    //     // console.log("hello");
    //     // console.log(user);

    //     //this.setState({ showModal: false });
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    console.log(this.state);
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );

    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <div className="nav-link" onClick={this.open.bind(this)}>
          Log In
        </div>

        <Modal
          show={this.state.showModal}
          onHide={this.close}
          className="modal-wrapper login-modal-wrapper"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <form>
              <FormGroup>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className="form-control"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="form-control"
                  placeholder="Password"
                />
              </FormGroup>
              <Row className="top-space">
                <Col sm={6}>
                  <Checkbox className="checkbox-login"> Remember Me </Checkbox>
                </Col>
                <Col sm={6} className="forgot-password">
                  <a href="/">Forgot Password</a>
                </Col>
              </Row>
              <Row className="top-space">
                <Col md={12}>
                  <Button
                    onClick={this.login}
                    className="btn btn-black btn-block"
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </form>
            {/* <div className="social-signup">
              <span className="divider-or">OR</span>
              <p>Sign in with social account</p>
              <Row>
                <Col xs={6}>
                  <GoogleLogin
                    className="btn btn-block btn-google"
                    clientId="512171036040-tg32c1ouuobdtjh6bngsb139ahumsi47.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  />
                </Col>
                <Col xs={6}>
                  <FacebookLogin
                    className="btn btn-block btn-facebook"
                    appId="434252343413392"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    onSuccess={this.close}
                    cssClass="btn btn-block btn-facebook"
                  />
                </Col>
              </Row>
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-black" onClick={this.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
