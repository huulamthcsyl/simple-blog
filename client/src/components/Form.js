import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'  
import { createPost } from '../api/posts';

function PostForm({ isChanged, setIsChanged }) {

    const [postData, setPostData] = useState({
        username: '',
        body: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postData);
        clear();
        setIsChanged(isChanged => !isChanged);
    }

    const clear = () => {
        setPostData({
            username: '',
            body: ''
        });
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-2'>
                <Form.Label>Username</Form.Label>
                <Form.Control required type='text' placeholder='Username' value={postData.username} onChange={(e) => setPostData({...postData, username:e.target.value})} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Post</Form.Label>
                <Form.Control required as='textarea' rows={4} placeholder='Write your post ...' value={postData.body} onChange={(e) => setPostData({...postData, body:e.target.value})} />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    )
}

export default PostForm
