/* eslint-disable */
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Jumbotron } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Good from "./components/Good";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">sunny's MALL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div>
            <Jumbotron className="background">
              <h1>Welcome</h1>
              <p>리액트 학습을 위해 만든 쇼핑몰입니다 :)</p>
            </Jumbotron>
            <div className="container">
              <div className="row">
                {shoes.map((v, i) => (
                  <Good
                    title={v.title}
                    content={v.content}
                    price={v.price}
                    img={`https://codingapple1.github.io/shop/shoes${
                      i + 1
                    }.jpg`}
                    key={`${v.title}${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/:id">
          <div>아무거나</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
