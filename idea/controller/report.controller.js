const Job = require('../models/job.model');
const Candidate = require('../models/candi.model');
const { report } = require('../routes/candi.route');

// const getTimeToHireReport = async (req, res) => {
//     try {

//         const jobs = await Job.find();

//         const reportData = await Promise.all(
//             jobs.map(async (job) => {
//                 const hiredCandidates = await Candidate.find({
//                     appliedFor: job.id,
//                     status: 'Hired',
//                 });

//                 if (hiredCandidates.length > 0) {
//                     const timeToHire = hiredCandidates
//                         .map((candidate) => {
//                             const appliedAt = candidate.appliedAt ? new Date(candidate.appliedAt) : null;
//                             const hiredAt = candidate.updatedAt ? new Date(candidate.updatedAt) : new Date();

//                             if (appliedAt && hiredAt) {
 
//                                 return (hiredAt - appliedAt) / (1000 * 60 * 60 * 24);
//                             }
//                             return null;
//                         })
//                         .filter((duration) => duration !== null);

//                     if (timeToHire.length > 0) {
//                         const averageTimeToHire = timeToHire.reduce((a, b) => a + b, 0) / timeToHire.length;

//                         return {
//                             jobTitle: job.title,
//                             averageTimeToHire: parseFloat(averageTimeToHire.toFixed(2)),
//                         };
//                     }
//                 }

//                 return null; 
//             })
//         );

//         const filteredReportData = reportData.filter((data) => data !== null);

//         res.status(200).json({ report: filteredReportData });
//     } catch (e) {

//         console.error('Error generating Time to Hire report:', e.message);
//         res.status(500).json({ message: 'Server error', error: e.message });
//     }
// };


const getTimeToHireReport = async (req, res) => {
    try {
        const jobs = await Job.find();

        const reportData = await Promise.all(
            jobs.map(async (job) => {
                const hiredCandidates = await Candidate.find({
                    appliedFor: job.id,
                    status: 'Hired',
                });

                if (hiredCandidates.length > 0) {
                    const timeToHire = hiredCandidates
                        .map((candidate) => {
                            const appliedAt = candidate.appliedAt ? new Date(candidate.appliedAt) : null;
                            const hiredAt = candidate.updatedAt ? new Date(candidate.updatedAt) : new Date();

                            if (appliedAt && hiredAt) {
                                return (hiredAt - appliedAt) / (1000 * 60 * 60 * 24); // Convert to days
                            }
                            return null;
                        })
                        .filter((duration) => duration !== null);

                    if (timeToHire.length > 0) {
                        const averageTimeToHire = timeToHire.reduce((a, b) => a + b, 0) / timeToHire.length;
                        return {
                            jobTitle: job.title,
                            averageTimeToHire: parseFloat(averageTimeToHire.toFixed(2)),
                        };
                    }
                }

                return null;
            })
        );

        const filteredReportData = reportData.filter((data) => data !== null);

        res.status(200).json({ report: filteredReportData });
    } catch (e) {
        console.error('Error generating Time to Hire report:', e.message);
        res.status(500).json({ message: 'Server error', error: e.message });
    }
};



const getOpenPositionReport = async (req, res) => {
    try {
        const openJob = await Job.find({ status: 'Open' });
        const reportData = openJob.map(job => ({
            jobTitle: job.title,
            postedAt: job.postedAt,
            daysOpen: (Date.now() - job.postedAt) / (1000 * 60 * 60 *24),
            openPositions: job.openPosition || 1
            // numApplicants: job.applicants.length
        }));
        res.status(200).send({ report: reportData });
    }catch(e) {
        res.status(500).json({ message: 'server error', error: `${e.message}` });
    };
};


const getApplicantProgressReport = async (req, res) => {
    try {
        const jobs = await Job.find();

        const reportData = await Promise.all(jobs.map(async (job) => {
            const totalCandidates = await Candidate.find({ appliedFor: job.id });
            const appliedCandidates = totalCandidates.filter(Candidate => Candidate.status === 'Applied').length;
            const interviewedCandidates = totalCandidates.filter(Candidate => Candidate.status === 'Interviewed').length;
            const hiredCandidates = totalCandidates.filter(Candidate => Candidate.status === 'Hired').length;
            return {
                jobTitle: job.jobTitle,
                total: totalCandidates,
                applied: appliedCandidates,
                intervied: interviewedCandidates,
                hired: hiredCandidates
            };
        }));
        res.status(200).json({ report : reportData});
    }catch(e) {
        res.status(500).json({message: 'server error', error: `${e.message}`});
    };
};

const getHiringEfficiencyReport = async (req, res) => {
    try {
        const jobs = await Job.find();
        // let reportData = [];
        const reportData = await Promise.all(jobs.map(async (job) => {
            const totalApplications = await Candidate.find({ appliedFor: job.id });
            const hiredCandidates = totalApplications.filter(Candidate => Candidate.status === 'Hired').length;
            const efficiency = totalApplications.length > 0 ? (hiredCandidates / totalApplications.length) * 100 : 0;
            return {
                jobTitle: job.jobTitle,
                totalApplications: totalApplications,
                hired: hiredCandidates,
                efficency: efficiency.toFixed(2) + '%'
            };
        }));
        res.status(200).json({ report: reportData });
    }catch (err) {
        res.status(500).json({message: 'server error', error: `${e.message}`});
    };
};

module.exports = {
    getTimeToHireReport,
    getOpenPositionReport,
    getApplicantProgressReport,
    getHiringEfficiencyReport
}