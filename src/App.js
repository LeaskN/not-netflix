import './App.css';
import Category from './Components/Category/Category';
import Login from './Login/Login';
import Register from './Register.js/Register';
import categories from './categories.json';
import { Container, Col, Row } from "react-bootstrap";

function App() {
  const userLogin = false;
  return (
    userLogin ?
      <div className="App">
        {
          categories.map(category => <Category category={category} key={Math.random(1) * 10000000} />)
        }
      </div> :
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Register />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Login />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
