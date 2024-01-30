const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    name: { type: String },
    gender: { type: String },
    actor: { type: String },
    alive: { type: Boolean },
    image: { type: String }
});

module.exports = mongoose.model("characters", characterSchema);
