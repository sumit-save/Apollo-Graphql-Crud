const characterModel = require("./models/character.model");

const resolvers = {
    Query: {
        allCharacters: async (_, __, ___) => {
            const allCharacters = await characterModel.find({});
            return allCharacters;
        },
        showSpecificCharacter: async (_, args, ___) => {
            const showSpecificCharacter = await characterModel.findOne({ _id: args._id });
            return showSpecificCharacter;
        }
    },
    Mutation: {
        createCharacter: async (_, args, ___) => {
            const newCharacter = new characterModel({
                name: args.input.name,
                gender: args.input.gender,
                actor: args.input.actor,
                alive: args.input.alive,
                image: args.input.image
            });
            const savedCharacter = await newCharacter.save();
            return savedCharacter;
        },
        updateSpecificCharacter: async (_, args, ___) => {
            const upObj = {
                name: args.input.name,
                gender: args.input.gender,
                actor: args.input.actor,
                alive: args.input.alive,
                image: args.input.image
            };
            const updateSpecificCharacter = await characterModel.updateOne({ _id: args.input._id }, { $set: upObj });
            if (updateSpecificCharacter) {
                const showSpecificCharacter = await characterModel.findOne({ _id: args.input._id });
                return showSpecificCharacter;
            }
        },
        removeSpecificCharacter: async (_, args, ___) => {
            const showSpecificCharacter = await characterModel.findOne({ _id: args._id });
            const removeSpecificCharacter = await characterModel.deleteOne({ _id: args._id });
            if (removeSpecificCharacter) {
                return showSpecificCharacter
            }
        }
    }
};

module.exports = resolvers;
