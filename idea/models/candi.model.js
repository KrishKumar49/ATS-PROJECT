// const mongoose = require('mongoose');
// const CandiSchema = mongoose.Schema ({
//     // userID: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     required: true,
//     //     ref: 'Candidate'//or user
//     // },
//     name: {
//         type : String,
//         required : true
//     },
//     email : {
//         type : String,
//         required : true
//     },
//     resume: {
//         type : String,
//         required : true
//     },
//     status: {
//         type : String,
//         default : 'Applied'
//     },
//     appliedAt: {
//         type: Date,
//         default : Date.now
//     },
//     appliedFor: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Job',
//         required: true
//     }
// });

// const CandiModel = mongoose.model('Candi', CandiSchema);
// module.exports = CandiModel;











const mongoose = require('mongoose');
const CandiSchema = mongoose.Schema ({
    // userID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Candidate'//or user
    // },
    name: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    resume: {
        type : String,
        required : true
    },
    status: {
        type : String,
        default : 'Applied'
    },
    appliedAt: {
        type: Date,
        default : Date.now
    },
    appliedFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },

    createdBy: {type: String, ref: 'Admin', required: true}
});

const CandiModel = mongoose.model('Candi', CandiSchema);
module.exports = CandiModel;