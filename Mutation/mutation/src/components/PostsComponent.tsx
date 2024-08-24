import { useMutation } from '@apollo/client';
import React, { FormEvent, useState } from 'react';
import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../mutations/Mutation';
import { Button, Form } from 'react-bootstrap';

const CreatePostForm = () => {
    const [createPost, { data: createPostData , error: createPostError , loading: createPostLoading }] = useMutation(CREATE_POST);
    const [updatePost, { data: updatePostData , error: updatePostError , loading: updatePostLoading }] = useMutation(UPDATE_POST);
    const [deletePost, { data: deletePostData , error: deletePostError , loading: deletePostLoading }] = useMutation(DELETE_POST);

    const [createTitle, setCreateTitle] = useState<string>('');
    const [createBody, setCreateBody] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const [updateTitle, setUpdateTitle] = useState<string>('');
    const [updateBody, setUpdateBody] = useState<string>('');
    const [updatePostId, setUpdatePostId] = useState<string>('');

    const [deletePostId, setDeletePostId] = useState<string>('');

    



    const handleCreatePost = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await createPost({
                variables: {
                    // id: user.id,
                    title: createTitle,
                    body: createBody,
                    user: { id: userId }
                },
            });
            console.log('Post created successfully:', createPostData);
            setCreateTitle('');
            setCreateBody('');
            setUserId('');
            console.log(createPost);
        } catch (error) {
            console.error("Error creating post:", error);

        }
    };
    


    const handleUpdatePost = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await updatePost({
                variables: {
                    id: updatePostId,
                    title: updateTitle,
                    body: updateBody,
                },
            });
            console.log(updatePost);
            setUpdatePostId('');
            setUpdateTitle('');
            setUpdateBody('');
            console.log('Post updated successfully:', updatePostData);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };


    const handleDeletePost = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await deletePost({
                variables: {
                    id: deletePostId,
                },
            });
            console.log(deletePost);
            setDeletePostId('');
            console.log('Post deleted successfully:', deletePostData);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };        


    return (


        <div>
            <h1>Posts</h1>
            <h2>Create Post</h2>
            <Form onSubmit={handleCreatePost}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        value={createTitle} 
                        onChange={(event) => setCreateTitle(event.target.value)} 
                        placeholder="Title" 
                        required 
                    />
                    <Form.Control 
                        type="text" 
                        value={createBody} 
                        onChange={(event) => setCreateBody(event.target.value)} 
                        placeholder="Body" 
                        required 
                    />
                    <Form.Control 
                        type="text" 
                        value={userId} 
                        onChange={(event) => setUserId(event.target.value)} 
                        placeholder="User ID" 
                        required 
                    />
                    <Button type="submit">Create Post</Button>
                </Form.Group>
                {createPostLoading && <p>Loading Post</p>}
                {createPostError && <p>Error: {createPostError.message}</p>}
                { createPostData && (
                    <div>
                        <h3>Created Post:</h3>
                        <p>Title: {createPostData.createPost.title}</p>
                        <p>Body: {createPostData.createPost.body}</p>
                        <p>User ID: {createPostData.createPost.userId}</p>
                    </div>
                )}
            </Form>


            <h2>Update Post</h2>
            <Form onSubmit={handleUpdatePost}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        value={updatePostId} 
                        onChange={(event) => setUpdatePostId(event.target.value)} 
                        placeholder="Post ID" 
                        required 
                    />
                    <Form.Control 
                        type="text" 
                        value={updateTitle} 
                        onChange={(event) => setUpdateTitle(event.target.value)} 
                        placeholder="Title" 
                        required 
                    />
                    <Form.Control 
                        type="text" 
                        value={updateBody} 
                        onChange={(event) => setUpdateBody(event.target.value)} 
                        placeholder="Body" 
                        required 
                    />
                    <Button type="submit">Update Post</Button>
                </Form.Group>
                { updatePostLoading && <p>Loading Post</p>}
                { updatePostError && <p>Error: {updatePostError.message}</p>}
                { updatePostData && (
                    <div>
                        <h3>Updated Post:</h3>
                        <p>Title: {updatePostData.updatePost.title}</p>
                        <p>Body: {updatePostData.updatePost.body}</p>
                    </div>
                )}
            </Form>


            <h2>Delete Post</h2>
            <Form onSubmit={handleDeletePost}>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        value={deletePostId} 
                        onChange={(event) => setDeletePostId(event.target.value)} 
                        placeholder="Post ID" 
                        required 
                    />
                    <Button type="submit">Delete Post</Button>
                </Form.Group>
                { deletePostLoading && <p>Loading Post</p>}
                { deletePostError && <p>Error: {deletePostError.message}</p>}
                { deletePostData && (
                    <div>
                        <h3>Deleted Post:</h3>
                        <p>ID: {deletePostData.deletePost.id}</p>
                    </div>
                )}
            </Form>
        </div>
    );
};

export default CreatePostForm;
