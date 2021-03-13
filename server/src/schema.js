const { gql } = require('apollo-server')

const typeDefs = gql`
    # Schema definitions go here
    type Track {
        "each track has an id"
        id: ID!
        "the title"
        title: String!
        "the author of this track"
        author: Author!
        "images are nice"
        thumbnail: String
        "How long is the track"
        length: Int
        "How many modules"
        modulesCount: Int
    }
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`
module.exports = typeDefs