const mongoose = require('mongoose');

const diabitiesSchema = new mongoose.Schema({
    diabities: Number,
    date: Date,
    remark: String,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
})

const Diabities = mongoose.model('diabities', diabitiesSchema);
module.exports = Diabities;