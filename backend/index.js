const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

// Create MongoDB Database Connection
(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/graphql");
        console.log("MongoDB Database Connected Successfully");
    } catch (error) {
        console.log("Unable To Connect MongoDB Database");
        console.log(error);
    }
})();

// Create Graphql Server
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

(async () => {
    try {
        const { url } = await startStandaloneServer(server, { listen: { port: 8000 } });
        console.log("Graphql Server Running On: " + url);
    } catch (error) {
        console.log("Unable To Create Graphql Server On: http://localhost:8000");
        console.log(error);
    }
})();
