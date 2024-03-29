/* eslint-disable */
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Good from './components/Good';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Loader from './Loader';
import { 재고context } from './state/remain';
import Cart from './Cart';

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [loading, setLoading] = useState(false);
  let [clickBtnCount, setClickBtnCount] = useState(0);
  let [재고, 재고변경] = useState([10, 11, 12, 13, 14, 15, 16]); // 많은 컴포넌트들이 사용할 것 같기에 이곳에 작성

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>sunny's MALL</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/cart'>
              Cart
            </Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <div>
            <Jumbotron className='background'>
              <h1>Welcome</h1>
              <p>리액트 학습을 위해 만든 쇼핑몰입니다 :)</p>
            </Jumbotron>
            <div className='container'>
              <재고context.Provider value={재고}>
                <div className='row'>
                  {shoes.map((v, i) => (
                    <Good shoe={v} key={`${v.title}${i}`} i={i} onClick={() => {}} />
                  ))}
                </div>
              </재고context.Provider>
              {!clickBtnCount && (
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    setLoading(true);
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then((v) => {
                        setClickBtnCount(1);
                        setLoading(false);
                        console.log('성공', v);
                        shoes변경([...shoes, ...v.data]);
                      })
                      .catch(() => {
                        setLoading(false);
                        console.error('실패');
                      });
                  }}>
                  {loading && <Loader />}
                  더보기
                </button>
              )}
            </div>
          </div>
        </Route>
        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
