import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AppBar from './components/AppBar'
import PostForm from './components/Form'
import Posts from './components/Posts'

function App() {

    const [isChanged, setIsChanged] = useState(false);

    return (
        <Container lg='true'>
            <AppBar/>
            <Row>
                <Col xs={9}>
                    <Posts isChanged={isChanged} />
                </Col>
                <Col>
                    <PostForm isChanged={isChanged} setIsChanged={setIsChanged} />
                </Col>
            </Row>
        </Container>
    )
}

export default App
