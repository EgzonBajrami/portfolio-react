import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import egzonlogo from '../../assets/egzonlogo.png'

import './Header.css'

function Header() {
  return (
    <Navbar className="header-main" bg="light" expand="lg">
      <Container className="header-main">
        <Navbar.Brand className="header-mai" href="/">
          <div className="change-logo">

          <img  src={egzonlogo} alt="e-logo" />
          </div>
          </Navbar.Brand>

      </Container>
    </Navbar>
  );
}

export default Header;