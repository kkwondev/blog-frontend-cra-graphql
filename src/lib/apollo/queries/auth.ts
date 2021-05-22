import { gql } from '@apollo/client';

export const GOOGLE_LOGIN = gql`
    mutation google($access_token: String!) {
        google(access_token: $access_token) {
            access_token
            user {
                id
                email
                photo_url
                nickname
            }
        }
    }
`;

export const CURRENT_USER = gql`
    query currentUser {
        currentUser {
            id
            email
            photo_url
            nickname
        }
    }
`;
