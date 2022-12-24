import axios from "axios";
import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    email: "",
    password: "",
  };
  onChangeHandleInput = (e) => {
    let obj = this.state;
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSumitHandle = () => {
    let obj = this.state;
    console.log(obj);
    if (!obj.name) {
      alert("Pleae enter the name");
    }
    if (!obj.email) {
      alert("Pleae enter the email");
    }
    if (!obj.password || !obj.confirm_password) {
      alert("Pleae enter the correct password");
    }

    if (obj.password !== obj.confirm_password) {
      alert("password doesnot match");
    }

    axios.post('https://prismcloudhosting.com/LANSINOH_APIs/public/api/auth/register', obj)
         .then( (response) => {
             if(response.data.status === 201){
                 alert(response.data.message);
             }else{
                 alert('sorry for inconvience you did not get register');
             }
         });


  };
  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.onChangeHandleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.onChangeHandleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiconfirm_passwordd">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.onChangeHandleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              onChange={this.onChangeHandleInput}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={this.onSumitHandle}>
            Regsiter
          </Button>
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;
