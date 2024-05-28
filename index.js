import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import JobSeekerController from './src/controllers/jobseeker.controller.js';
import RecruiterController from './src/controllers/recuriter.controller.js';
import session from 'express-session';
import { auth } from './middleware/userauth.middleware.js';
import multer from 'multer';
import { fileUpload } from './middleware/ileupload.middleware.js';
import cookieParser from 'cookie-parser';
import { checkUser } from './middleware/checkuser.middleware.js';
import { Recuritauth } from './middleware/recuriter.middleware.js';
import { lastVisit, lastVisit2 } from './middleware/lastvisit.middleware.js';
import { applicationValidationRules, recruiterValidationRules, validate } from './middleware/validation.middleware.js';

const jobSeekerController = new JobSeekerController();
const recuriterController = new RecruiterController();
const app = express();
const port = 3200;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Use express-ejs-layouts for layout support
app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Set up session management
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Middleware to parse cookies
app.use(cookieParser());

// Custom middleware to check user
app.use(checkUser);

// Routes for job seekers and recruiters
app.get('/', jobSeekerController.homepage);
app.get('/viewjobs', auth, jobSeekerController.viewJobs);
app.get("/jobsignup", jobSeekerController.signup);
app.get('/joblogin', jobSeekerController.login);
app.get('/recuritersignup', recuriterController.signUp);
app.get('/recuriterlogin', recuriterController.login);
app.get('/jobposting', recuriterController.jobposting);
app.get('/apply/:id', auth, jobSeekerController.applyjob);
app.get('/applicants/:id', Recuritauth, recuriterController.applicants);
app.get('/edit/:id', recuriterController.updateJobPosting);
app.get('/delete/:id', recuriterController.deletePost);

// POST routes for form submissions
app.post('/jobposting', recuriterController.postJobPosting);
app.post('/jobsignup', recruiterValidationRules(), validate, jobSeekerController.postsignup);
app.post('/joblogin', lastVisit, jobSeekerController.postlogin);
app.post('/apply/:id', auth, fileUpload.single('resume'), applicationValidationRules(), validate, jobSeekerController.postApply);

app.post('/updatejob', recuriterController.postupdate);
app.post('/recuritersignup', recruiterValidationRules(), validate, recuriterController.postSignup);
app.post('/recuriterlogin', lastVisit2, recuriterController.postLogin);

// Route for logging out
app.get('/logout', jobSeekerController.logout);

// Start the server
app.listen(port, (err) => {
   
    if (err) {
        console.log('error in listening to the server');
    }

    console.log(`Server Successfully Started At Port: ${port}`);
});
