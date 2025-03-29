const mongoose = require('mongoose')
const jobModel = require('../models/job.model');
const CandiModel = require('../models/candi.model');
const { compareSync } = require('bcryptjs');
const adminModel = require('../models/admin.model');

const ActivityModel = require('../models/activity.model');
const {checkEmail} = require('../utils/validators')


const candidates = (req, res) => {
    res.status(200).json({
        message: "OK"
    });
}









const addCandidate = async (req, res) => {
    try {
        const { name, email, status, appliedAt, appliedFor, resume } = req.body;
        // console.log("Request Headers:", req.headers);

        if (!name || !email || !resume || !appliedFor) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const adminEmail = req.headers["adminemail"]; // Note: Headers are lowercase in Express
        console.log("Admin Email from Header:", adminEmail);
        if (!adminEmail) {
            return res.status(400).json({ message: "Admin email is required in headers." });
        }

        console.log("Admin Email from Header:", adminEmail);

        if (name.length > 50) {
            return res.status(400).json({ message: 'Name should not exceed 50 characters' });
        }

        if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        if (!mongoose.isValidObjectId(appliedFor)) {
            return res.status(400).json({ message: 'Invalid job ID' });
        }

        const job = await jobModel.findById(appliedFor);
        if (!job) {
            return res.status(400).json({ message: 'The applied job does not exist' });
        }

        const googleDriveRegex = /^https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
        if (!googleDriveRegex.test(resume)) {
            return res.status(400).json({ message: 'Invalid resume link. Please provide a valid Google Drive URL.' });
        }

        const newCandidate = new CandiModel({
            name,
            email,
            resume,
            status: status || 'Applied',
            appliedAt: appliedAt || Date.now(),
            appliedFor,
            createdBy: adminEmail, // Using email from headers
        });

        const savedCandidate = await newCandidate.save();

        return res.status(200).json({
            message: 'Candidate added successfully',
            candidate: savedCandidate,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};












// const addCandidate = async (req, res) => {
//     try {
//         const { name, email, status, appliedAt, appliedFor, resume } = req.body;

//         // Check for required fields
//         if (!name || !email || !resume || !appliedFor) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Validate email format
//         if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
//             return res.status(400).json({ message: 'Invalid email address' });
//         }

//         // Validate job ID format
//         if (!mongoose.isValidObjectId(appliedFor)) {
//             return res.status(400).json({ message: 'Invalid job ID' });
//         }

//         // Check if the job exists
//         const job = await jobModel.findById(appliedFor);
//         if (!job) {
//             return res.status(400).json({ message: 'The applied job does not exist' });
//         }

//         // Validate that resume is a Google Drive link
//         const googleDriveRegex = /^https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
//         if (!googleDriveRegex.test(resume)) {
//             return res.status(400).json({ message: 'Invalid resume link. Please provide a valid Google Drive URL.' });
//         }

//         // Create a new candidate
//         const newCandidate = new CandiModel({
//             name,
//             email,
//             resume,
//             status: status || 'Applied',
//             appliedAt: appliedAt || Date.now(),
//             appliedFor,
//         });

//         // Save the candidate to the database
//         await newCandidate.save();

//         return res.status(200).json({
//             message: 'Candidate added successfully',
//             candidate: newCandidate,
//         });
//     } catch (error) {
//         return res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

// module.exports = { addCandidate };




const findCandidate = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message: 'Candidate ID is required' });
        }
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message : 'Invalid candidate ID' });
        }
        const candidate = await CandiModel.findById({ _id: id}).select('-__v');
        if(!candidate) {
            return res.status(400).json({ message: 'candidate not found' });
        } 
        return res.status(200).json({candidate});
    }catch(e) {
        return res.status(500).json({ message : 'server error', error :`${e.message}` });
    };
};

const deleteCandidate = async (req, res) => {
    const {id} = req.params
    try{
        if(!id) {
            return res.status(400).json({ message : 'Candidate ID is required' });
        }
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message : 'Invalid candidate ID format' });
        }
        const candidate = await CandiModel.findById(id);
        if(!candidate) {
            return res.status(400).json({ message : 'Candidate not found' });
        }
        await CandiModel.deleteOne({ _id: id });
        return res.status(200).json({ message : `Candidate ${candidate.name} deleted succesfully` });
    }catch(e) {
        return res.status(500).json({ message : 'server error', error: `${e.message}` });
    };
};

const getCandidate = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Candidate ID is required' });
        }

        const mongoose = require('mongoose');
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ObjectId format' });
        }

        const candidate = await CandiModel.findById(id);

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        return res.status(200).json({ candidate });
    } catch (e) {
        console.error('Error:', e.message);
        return res.status(500).json({ message: 'Server error', error: e.message });
    }
};

const searchCandidates = async (req, res) =>{
    const { name, email, status } = req.query;
    try {
        let query = {};
        if (name) query.name = { $regex: name, $options: 'i' };
        if (email) query.email = { $regex: email, $options: 'i' };
        if (status) query.status = status;
        const candidates = await CandiModel.find(query);
        if (candidates.length === 0) {
            return res.status(400).json({ message: 'No candidate found' });
        };
        return res.status(200).json({ candidates });
    }catch(e) {
        return res.status(500).json({message: 'server error', error: `${e.message}`})
    }
}

const UpdateCandidates = async (req, res) => {
    const { id } = req.params;
    const { name, email, resume, status, appliedAt, appliedFor } = req.body;

    try {
        if (!id) {
            return res.status(400).json({ message: 'Candidate ID is required' });
        }

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid candidate ID format' });
        }

        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (email) updatedFields.email = email;
        if (resume) updatedFields.resume = resume;
        if (status) updatedFields.status = status;
        if (appliedAt) updatedFields.appliedAt = appliedAt;
        if (appliedFor) updatedFields.appliedFor = appliedFor;

        const candidate = await CandiModel.findByIdAndUpdate(
            id,              
            { $set: updatedFields },
            { new: true, runValidators: true }
        );

        if (!candidate) {
            return res.status(400).json({ message: 'Candidate not found' });
        }

        return res.status(200).json({ message: 'Candidate updated successfully', candidate });
    } catch (e) {
        if (e.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: e.message });
          }
        return res.status(500).json({ message: 'Server error', error: e.message });
    }
};




const allCandidates = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const candidates = await CandiModel.find().skip(skip).limit(limit);
        const totalCandidates = await CandiModel.countDocuments();

        res.json({ 
            candidates,
            totalCandidates,
            totalPages: Math.ceil(totalCandidates / limit),
            currentPage: page
         });
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching Candidates" });
    }
}


// const allCandidates = async (req, res) => {
//     try {
//         // const page = parseInt(req.query.page) || 1;
//         // const limit = parseInt(req.query.limit) || 10;
//         // const skip = (page - 1) * limit;

//         const email = req.body;

//         const candidates = await CandiModel.find(email);
//         // const totalCandidates = await CandiModel.countDocuments();

//         res.json({ 
//             candidates,
//             // totalCandidates,
//             // totalPages: Math.ceil(totalCandidates / limit),
//             // currentPage: page
//          });
//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Error fetching Candidates" });
//     }
// }






const candidateForActivity = async (req, res) => {
    try {
        const adminEmail = req.headers['admin-email'];
        console.log("Admin Email Received:", req.headers['admin-email']);

        if (!adminEmail) {
            return res.status(400).json({ error: 'Admin email is required' });
        }

        const activity = await ActivityModel.findOne({ adminEmail });
        console.log("Activity Found:", activity);
        if (!activity) {
            return res.status(400).json({ error: 'No activity found' });
        }
        console.log("Candidate IDs:", activity.candidateIds);

        const candidates = await CandiModel.find({ _id: { $in: activity.candidateIds } });

        console.log("Candidates Found:", candidates);
        res.status(200).json({ candidates })
    }
    catch (error) {
        console.log('Error fetching candidates', error);
        res.status(500).json({ error: 'Failed to fetch candidates' });
    }
}











const getAdminCandidate = async (req, res) => {
    try {
        const adminEmail = req.headers["adminemail"];
        console.log("Admin Email Received:", adminEmail);

        if (!adminEmail) {
            return res.status(400).json({ message: "Admin email is required" });
        }

        const candidates = await CandiModel.find({ createdBy: adminEmail }, { name: 1, email: 1, resume: 1, status: 1, appliedAt: 1, appliedFor: 1 })
            .populate("appliedFor", "jobTitle");
        console.log("Candidates Found:", candidates);

        const formattedCandidates = candidates.map(candidate => ({
            _id: candidate._id,
            name: candidate.name,
            email: candidate.email,
            resume: candidate.resume,
            status: candidate.status,
            appliedAt: candidate.appliedAt,
            appliedFor: candidate.appliedFor.jobTitle,
            __v: candidate.__v,
        }));

        res.status(200).json({ candidates: formattedCandidates });
    } catch (error) {
        console.log("Error in getAdminCandidates:", error);
        res.status(500).json({ message: "server error", error: error.message });
    }
};














// const getAdminCandidate = async (req, res) => {
//     try {
//         const adminEmail = req.headers["adminemail"];
//         if (!adminEmail) {
//             return res.status(400).json({ message: "Admin email is required" });
//         }

//         const admin = await adminModel.findOne({ email: adminEmail });
//         if (!admin) {
//             return res.status(400).json({ message: "Admin not found" });
//         }

//         const adminId = admin._id;

//         const candidates = await CandiModel.find(
//             {createdBy : adminId},
//             {name: 1, status: 1, appliedFor: 1}
//         ).populate("appliedFor", "jobTitle");

//         res.status(200).json({ candidates });
//     }
//     catch (error) {
//         console.log("error in getAdminCandidates:", error);
//         res.status(500).json({ message: "server error", error: error.message })
//     }
// }


module.exports = {
    addCandidate,
    findCandidate,
    deleteCandidate,
    getCandidate,
    searchCandidates,
    UpdateCandidates,
    candidates,
    allCandidates,
    candidateForActivity,
    getAdminCandidate
}
