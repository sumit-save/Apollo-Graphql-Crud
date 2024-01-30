import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query getCharacters {
    allCharacters {
      _id
      name
      gender
      actor
      alive
      image
    }
  }
`;

export const GET_CHARACTER = gql`
query specificCharacters($id: ID!) {
    showSpecificCharacter(_id: $id) {
      _id
      name
      gender
      actor
      alive
      image
    }
  }
`;

export const ADD_CHARACTER = gql`
mutation createCharacter($input: InputCreateCharacter!) {
  createCharacter(input: $input) {
    _id
    name
    gender
    actor
    alive
    image
  }
}
`;

export const UPDATE_CHARACTER = gql`
mutation updateCharacter($input: InputUpdateCharacter!) {
  updateSpecificCharacter(input: $input) {
    _id
    name
    gender
    actor
    alive
    image
  }
}
`;

export const DELETE_CHARACTER = gql`
mutation removeCharacter($id: ID!) {
    removeSpecificCharacter(_id: $id) {
      _id
      name
      gender
      actor
      alive
      image
    }
  }
`;
