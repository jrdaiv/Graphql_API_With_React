import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!, $userId: ID!) {
    createPost(input: { title: $title, body: $body, user: { id: $userId } }) {
      id
      title
      body
      user {
        id
      }
    }
  }
`;
export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(input: { id: $id, title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(input: { id: $id }) {
      id
    }
  }
`;
