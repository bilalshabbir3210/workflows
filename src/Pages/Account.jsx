import { Button, Container } from "react-bootstrap";
import React from "react";
import NavbarMenu from "./NavbarMenu";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";
import { bindActionCreators } from "redux";

const Account = () => {
  const dispatch = useDispatch();
  const {depositMoney , withdrawMoney} = bindActionCreators(actionCreators , dispatch);
  return (
    <>
      <NavbarMenu />
      <Container>
        <h1>Account Page.</h1>
        <br />
        <div className="flex">
          <Button variant="warning" onClick={() => depositMoney(50)}>
            +
          </Button>
          &nbsp; Spend 50 $ &nbsp;{" "}
          <Button variant="danger" onClick={() => withdrawMoney(50)}>
            -
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Account;
