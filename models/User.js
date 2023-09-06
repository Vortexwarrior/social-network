const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.objectId,
            ref: 'User',
        }],
    },
);

userSchema.virtual('friendCount').get(function (){
    return this.freinds.length;
});

const User = model('User', userSchema)

module.exports= User;