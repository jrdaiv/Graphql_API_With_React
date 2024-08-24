import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POST } from "../queries/Queries";
import { Alert, Card, Spinner } from "react-bootstrap";



interface PostsData {
    id: string,
    title: string,
    body: string,
    user: {
      id: string,
      name: string,
    }
    

}

export const PostsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const { data, loading, error } = useQuery<{ post: PostsData }>(GET_POST, {
        variables: { id },
    });

    if (loading) {
        return <Spinner animation='border'/>
    }
    if (error) {
        return (
            <Alert variant="danger">
                Error: {error.message}
            </Alert>
        );
    }
    if (!data || !data.post) {
        return (
          <Alert variant="warning">
            No data found.
          </Alert>
        );
      }

    const { title, body } = data.post;

    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
                <Card.Text>
                    User ID: {}
                </Card.Text>
            </Card.Body>
        </Card>
       
                
    );
    





}

