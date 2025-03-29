const jobModel = require('../models/job.model');
const ActivityModel = require('../models/activity.model');


const createJob = async (req, res) => {
    try {
        const { title, description, requirements, postedAt, status, openPosition } = req.body;

        if (!title || !description || !requirements || !postedAt || !status || openPosition === undefined) {
            return res.status(400).json({ message: 'All fields are required, including openPosition' });
        }

        if (typeof openPosition !== 'number' || openPosition < 0) {
            return res.status(400).json({ message: 'openPosition must be a non-negative number' });
        }

        const validStatus = ['Open', 'Closed', 'Draft'];
        if (!validStatus.includes(status)) {
            return res.status(400).json({ message: `Status must be one of: ${validStatus.join(', ')}` });
        }

        const newJob = new jobModel({
            title,
            description,
            requirements,
            postedAt,
            status,
            openPosition 
        });
        await newJob.save();

        return res.status(200).json({ message: 'Job created successfully', job: newJob });
    } catch (e) {
        return res.status(500).json({ message: 'Server error', error: `${e.message}` });
    }
};



// const createJob = async (req, res) => {
//     try {
//         const { title, description, requirements, postedAt, status, openPosition } = req.body;
//         const adminEmail = req.headers['admin-email'];

//         if (!adminEmail) {
//             return res.status(400).json({ message: 'Admin email is required' });
//         }

//         if (!title || !description || !requirements || !postedAt || !status || openPosition === undefined) {
//             return res.status(400).json({ message: 'All fields are required, including openPosition' });
//         }

//         if (typeof openPosition !== 'number' || openPosition < 0) {
//             return res.status(400).json({ message: 'openPosition must be a non-negative number' });
//         }

//         const validStatus = ['Open', 'Closed', 'Draft'];
//         if (!validStatus.includes(status)) {
//             return res.status(400).json({ message: `Status must be one of: ${validStatus.join(', ')}` });
//         }

//         const newJob = new jobModel({
//             title,
//             description,
//             requirements,
//             postedAt,
//             status,
//             openPosition
//         });

//         const adminActivity = await adminActivity.findOneAndUpdate(
//             { email: adminEmail },
//             { $push: { jobIds: newJob._id } },
//             { new: true, upsert: true }
//         );

//         await newJob.save();

//         res.status(200).json({ message: 'Job posted successfully', job: newJob });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };


const getJob = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message: 'Job id is required' });
        }
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message : 'Invalid job ID' });
        }
        const job = await jobModel.findById(id);
        if(!job) {
            return res.status(400).json({ message: 'Job not found' });
        }
        console.log(job);
        return res.status(200).json(job);
    }catch(e) {
        return res.status(500).json({ message: 'server errror', error: `${e.message}` });
    };
};

const deleteJob = async (req, res) => {
    const {id} = req.params;
    try {
        if(!id) {
            return res.status(400).json({ message: 'Job ID is required' });
        }
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message : 'Invalid job ID' });
        }
        const job = await jobModel.findById(id);
        if(!job) {
            return res.status(400).json({ message: 'Job not found' });
        }
        await jobModel.deleteOne({ _id: id })
        return res.status(200).json({ title :`${job.title}`, message: 'Job deleted sucessfully' });
    }catch(e) {
        return res.status(500).json({ message: 'server error', error: `${e.message}` });
    };
};


// const updateJob = async (req, res) => {
//     const {id} = req.params;
//     const { title, description, requirements, postedAt, status } = req.body;
//     try {
//         if(!id) {
//             return res.status(400).json({ message: 'Job ID is required' });
//         }
//         if(!id.match(/^[0-9a-fA-F]{24}$/)) {
//             return res.status(400).json({ message : 'Invalid job ID' });
//         }
//         const job = await jobModel.findById(id);
//         if(!job) {
//             return res.status(400).json({ message: 'Job not found' });
//         }
//         const updates = {};
//         if(title) {
//             if (typeof title !== 'string' || title.length > 100) {
//                 return res.status(400).json({ message: 'Title must be a string with a maximum length of 100' });
//             }
//             updates.title = title;
//         }
//         if(description) {
//             if (typeof description !== 'string' || description.length > 1000 || description.length < 20) {
//                 return res.status(400).json({ message: 'Description must be a string with a maximum length of 2000 and minimum length of 20' });
//             }
//             updates.description = description;
//         }
//         if(requirements) {
//             if (!Array.isArray(requirements) || requirements.length === 0 || !requirements.every(r => typeof r === 'string')) {
//                 return res.status(400).json({ message: 'Requirements must be a non-empty array of strings' })
//             }
//             updates.requirements = requirements
//         }
//         if(postedAt) {
//             if(isNaN(new Date(postedAt))) {
//                 return res.status(400).json({ message: 'invalid date format for postedAt' });
//             }
//             updates.postedAt = new Date(postedAt);
//         }
//         if(status) {
//             const validStatus = ['Open', 'Closed', 'Draft'];
//             if(!validStatus.includes(status)) {
//                 return res.status(400).json({ message : `Status must be one of: ${validStatus.join(', ')}`  });
//             }
//             updates.status = status;
//         }
//         const updateJob = await jobModel.findByIdAndUpdate(id, updates, {new: true});
//         console.log({ title, description, requirements, postedAt, status });
//         return res.status(200).json({ message: 'Job updated successfully', job: updateJob });
//     }catch(e) {
//         return res.status(500).json({ message: 'server error', error: `${e.message}` })
//     };
// };

const updateJob = async (req, res) => {
    const { id } = req.params;
    const { title, description, requirements, postedAt, status, openPosition } = req.body;
    try {
        if (!id) {
            return res.status(400).json({ message: 'Job ID is required' });
        }
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid job ID' });
        }
        const job = await jobModel.findById(id);
        if (!job) {
            return res.status(400).json({ message: 'Job not found' });
        }
        const updates = {};
        if (title) {
            if (typeof title !== 'string' || title.length > 100) {
                return res.status(400).json({ message: 'Title must be a string with a maximum length of 100' });
            }
            updates.title = title;
        }
        if (description) {
            if (typeof description !== 'string' || description.length > 1000 || description.length < 20) {
                return res.status(400).json({ message: 'Description must be a string with a maximum length of 1000 and minimum length of 20' });
            }
            updates.description = description;
        }
        if (requirements) {
            if (!Array.isArray(requirements) || requirements.length === 0 || !requirements.every(r => typeof r === 'string')) {
                return res.status(400).json({ message: 'Requirements must be a non-empty array of strings' });
            }
            updates.requirements = requirements;
        }
        if (postedAt) {
            const parsedDate = new Date(postedAt);
            if (isNaN(parsedDate)) {
                return res.status(400).json({ message: 'Invalid date format for postedAt' });
            }
            updates.postedAt = parsedDate;
        }
        
        if (status) {
            const validStatus = ['Open', 'Closed', 'Draft'];
            if (!validStatus.includes(status)) {
                return res.status(400).json({ message: `Status must be one of: ${validStatus.join(', ')}` });
            }
            updates.status = status;
        }
        if (openPosition) {
            if (typeof openPosition !== 'number' || openPosition < 0) {
                return res.status(400).json({ message: 'Open positions must be a positive number' });
            }
            updates.openPosition = openPosition;
        }
        const updateJob = await jobModel.findByIdAndUpdate(id, updates, { new: true });
        console.log({ title, description, requirements, postedAt, status, openPosition });
        return res.status(200).json({ message: 'Job updated successfully', job: updateJob });
    } catch (e) {
        return res.status(500).json({ message: 'Server error', error: `${e.message}` });
    };
};


const allJob = async (req, res) => {
    try {
        const jobs = await jobModel.find({});
        if (!jobs || jobs.length === 0) {
            return res.status(400).json({ message: "No jobs found" });
        }
        return res.status(200).json({ jobs });
    }
    catch (error) {
        console.log("Error fetching all jobs: ", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

const GetAllJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find({}, "_id title");
        res.status(200).json(jobs);
    }
    catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

const GetJobFromID = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: 'Job ID is required' });
        }
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid job ID' });
        }

        const job = await jobModel.findById(id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        return res.status(200).json(job);
    }
    catch {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = {
    createJob,
    getJob,
    deleteJob,
    updateJob,
    allJob,
    GetAllJobs,
    GetJobFromID
}