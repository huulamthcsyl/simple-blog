import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function AppBar() {
    return (
        <Navbar>
            <Container className='mb-2'>
                <Navbar.Brand href='/' >Blog</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default AppBar
