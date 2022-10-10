const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    role: {
        type: String,
        enum: [
            'USER', 'ADMIN'
        ],
        default: 'USER',
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    donations: [{
        type: Schema.Types.ObjectId,
        ref: 'Donation'
    }]
});

module.exports = mongoose.model('User', userSchema);