const mongoose = require('mongoose');
const ActivitySchema = mongoose.Schema ({

    adminEmail: {
        type: String,
        required: true,
    },

    candidateIds: [
        {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Candi',
        default: []
        },
    ],

    // jobIds: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Job'
    //     },
    // ],
});

const ActivityModel = mongoose.model('Activity', ActivitySchema);
module.exports = ActivityModel;