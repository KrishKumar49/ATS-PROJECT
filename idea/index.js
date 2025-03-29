const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const connectDB = require('./db/connect');

const appRoute = require('./routes/candi.route');
const jobRoute = require('./routes/job.route');
const reportRoutes = require('./routes/reports.route');
const adminRoute = require('./routes/admin.route');

dotenv.config();

connectDB();

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.originalname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage });

const path = './uploads';
if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("GET request on / route");
    res.status(200).json({ message: 'ALL GOOD!' });
});

app.post('/candidates', upload.fields([{ name: 'resume', maxCount: 1 }]), (req, res) => {
    // console.log("Received files:", req.files);
    // console.log("Received body:", req.body);
    if (!req.body || !req.files) {
        return res.status(400).json({ message: "Form data is missing." });
    }

    const { name, email, status, appliedAt } = req.body;
    if (!name || !email || !status || !appliedAt) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    res.status(200).json({
        message: 'Candidate and file uploaded successfully',
        file: req.files.resume[0],
        data: req.body
    });
});

app.use('/candidates', appRoute);
app.use('/jobs', jobRoute);
app.use('/reports', reportRoutes);
app.use('/admin', adminRoute);

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
