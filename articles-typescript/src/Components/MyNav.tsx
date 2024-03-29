import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
    const navigate = useNavigate();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" onClick={() => navigate("/")}>
                    EpiTimes
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};
export default MyNav;
