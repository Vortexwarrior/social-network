const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            toJSON: { getters: true },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
)

thoughSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
});

const Thought = model('thought', thoughSchema)

module.exports=Thought;