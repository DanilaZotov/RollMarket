import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import Home from "./pages/Home.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import { useAppSelector } from "./hooks/hooks.ts";
import { IncreaseButton, DecreaseButton } from "./components/CounterButton.tsx";

import "./styles/Home.css";
import "./App.css";
import "./styles/OrderPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Dropdown, Row, Col } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <>
      <div className="page-container">
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Корзина</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="cart-offcanvas">
              {cart.map((item) => (
                <>
                  <div>
                    
                  </div>
                  <div>{item.name}</div>

                  <div>{item.price * item.quantity} р.</div>

                  <IncreaseButton item={item}></IncreaseButton>

                  <div className="quantity">{item.quantity}</div>

                  <DecreaseButton item={item}></DecreaseButton>

                  <hr></hr>
                </>
              ))}
              <div></div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <div className="content-wrap">
          <Navbar sticky="top" className="">
            <Container fluid>
              <Dropdown className="ms-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Brand>
                <img src="img/logo.png" className="nav-logo"></img>
              </Navbar.Brand>
              <div className="d-inline-flex me-3 ">
                <img className="nav-img" src="img/search.png"></img>
                <img
                  className="nav-img"
                  src="img/shopping-bag.png"
                  onClick={handleShow}
                ></img>
              </div>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Order" element={<OrderPage />} />
          </Routes>
        </div>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
