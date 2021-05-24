import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query getPosts($lastId: Float) {
        getPosts(lastId: $lastId) {
            post {
                id
                title
                content
                slug
                thumbnail_img
                user {
                    email
                    nickname
                    photo_url
                }
            }
            hasMorePost
        }
    }
`;
