import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
    return (
        <>
            <Container className='container-fluid mb-3 mt-2'>
                <Navbar className="bg-body-tertiary fluid">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="img/ballon.jpeg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React Props Checkpoint
                        </Navbar.Brand>
                    </Container>
                </Navbar>

            </Container>

        </>
    );
}

export default Header;