const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Tpes.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            require: true,
            maclength: 280
        },
        username: {
            type: String,
            requred: true
        },
        createAt: {
            type: Date,
            defaulte: Date.now,
            get: (createdAtVal) => moment(createAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            requrie: true,
            minlength: 1,
            maxlength: 280
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (createAtVal) => moment(createAtVal).format('MMM DD, YYYY [at[ hh:mm a')
        },
        username: {
            type: String,
            requried: true
        },

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

// Export Thoughts Module
module.exports = Thoughts;