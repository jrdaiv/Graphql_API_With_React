import React from 'react';
import { GET_POSTS } from '../queries/Queries';
import { useQuery } from '@apollo/client';
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

interface PostData {
    id: string,
    title: string,
    body: string,
    user: {
      id: string,
      name: string,
    }
}
interface PostDataArr {
    posts: {
      data: PostData[]; 
  }
}


const PostListPage: React.FC = () => {
    const { data, loading, error } = useQuery<PostDataArr>(GET_POSTS);
    
    if (loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }
    
    if (error) {
        return (
            <Alert variant="danger">
                Error: {error.message}
            </Alert>
        );
    }

    if (!data || !data.posts || !data.posts.data.length) {
      return (
        <Alert variant="warning">
          No posts available.
        </Alert>
      );
    }


  return (


    <div>
      <Container>
        <h1>Posts</h1>
        <Row>
          {data.posts.data.map((post: PostData) => (
            <Col key={post.id} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Card.Text> {post.user.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>

    </div>


  )


}



export default PostListPage