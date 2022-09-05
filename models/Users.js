//requiring mongoose
const { Schema, model } = require('mongoose');

// Use mongoose Schema function to create Users
const usersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // regex validates email input
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

// gets total friend count
usersSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// creates user model using the Users Schema
const Users = model('Users', usersSchema);

module.exports = Users;