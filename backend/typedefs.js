const typeDefs = `
 type Character {
    _id: ID!
    name: String!
    gender: String!
    actor: String!
    alive: Boolean!
    image: String!
 }
 input InputCreateCharacter {
    name: String!
    gender: String!
    actor: String!
    alive: Boolean!
    image: String!
 }
 input InputUpdateCharacter {
    _id: ID!
    name: String!
    gender: String!
    actor: String!
    alive: Boolean!
    image: String!
 }
 type Query {
    allCharacters: [Character]!
    showSpecificCharacter(_id: ID!): Character!
 }
 type Mutation {
    createCharacter(input: InputCreateCharacter!): Character!
    updateSpecificCharacter(input: InputUpdateCharacter!): Character!
    removeSpecificCharacter(_id: ID!): Character!
 }
`;

module.exports = typeDefs;
