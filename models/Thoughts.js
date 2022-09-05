const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

// Use mongoose Schema function to create Reactions
const ReactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// Use mongoose Schema function to create Thoughts
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        username: {
            type: String,
            requried: true
        },
        // makes an array of nested docutment for the reactionsSchema
        reactions: [ReactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of reactions
ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema);

// Export Thoughts model
module.exports = Thoughts;