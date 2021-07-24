import React from 'react'
import { Button, Card } from 'react-bootstrap'
import moment from 'moment'
import { deletePost } from '../api/posts'

function Post({ post }) {
    return (
       <Card className='mb-4'>
           <Card.Body>
               <Card.Title>{post.username}</Card.Title>
               <Card.Subtitle className='text-muted mb-2'>{moment.unix(post.dateCreated._seconds).fromNow()}</Card.Subtitle>
               <Card.Text>{post.body}</Card.Text>
           </Card.Body>
           <Card.Footer>
               <Button variant='danger' onClick={() => deletePost(post.id)}>Delete</Button>
           </Card.Footer>
       </Card>
    )
}

export default Post
