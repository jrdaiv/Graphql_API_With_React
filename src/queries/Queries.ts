import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        title
        body
        user {
          id
          name
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        id
        name
      }
    }
  }
`;

export const GET_POSTS_BY_USER_ID = gql`
  query GetPostsByUserId($userId: Int!) {
    posts(filter: { userId: $userId }) {
      data {
        id
        title
        body
        user {
          id
          name
        }
      }
    }
  }
`;

