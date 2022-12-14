import { gql } from '@apollo/client';

export const CREATE_BOOK = gql`
mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
    addBook (
        title: $title,
        published: $published,
        author: $author,
        genres: $genres
    ) {
        title
        published
        author {
          name
          born
        }
        genres
    }
}
`

export const UPDATE_AUTHOR = gql`
mutation editAuthor($name: String!, $born: Int!) {
    editAuthor (
        name: $name,
        setBornTo: $born
    ) {
        name
        born
    }
}
`

export const LOGIN = gql`
mutation login($username: String!, $password: String!){
  login(username: $username, password: $password) {
    value
  }
}
`