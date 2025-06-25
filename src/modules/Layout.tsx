import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Nav from "./shared/Nav";
import Container from "react-bootstrap/Container";
export default function Layout() {
  return (
    <div>
      <Header />
      <Container className="container-fluid">
        <Nav />
        <div className="body-content">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
