const mongoose = require('mongoose')
const jobSchema = mongoose.Schema({
    // PostID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Job'
    // },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type : [String],
        required : true
    },
    postedAt: {
        type: Date,
        default : Date.now
    },
    status: {
        type : String,
        default: 'Open'
    },
    openPosition: {
            type: Number,
            required: true,
            default: 1 
    },
});


const jobModel = mongoose.model('Job', jobSchema);
module.exports = jobModel;