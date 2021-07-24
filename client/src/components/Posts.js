import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { getPosts } from '../api/posts'
import Post from './Post';

function Posts({ isChanged }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            const { data } = await getPosts();
            setPosts(data);
        }
        getData();
        console.log('Get posts');
    }, [isChanged]);

    return (
        <Container>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </Container>
    )
}

export default Posts
