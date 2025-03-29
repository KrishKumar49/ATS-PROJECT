const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema ({
    // adminID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Admin'
    // },
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
    
},
{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
}
);

const adminModel = mongoose.model('Admin', AdminSchema);
module.exports = adminModel;