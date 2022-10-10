const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    descriptioin: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    raised: {
        type: Number,
        required: true
    },
    donations: [{
        type: Schema.Types.ObjectId,
        ref: 'Donation'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);