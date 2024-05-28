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
import { lastVisit,lastVisit2 } from './middleware/lastvisit.middleware.js';
// import { v4, validate } from 'uuid';
import { applicationValidationRules,recruiterValidationRules,validate } from './middleware/validation.middleware.js';

const jobSeekerController = new JobSeekerController();
const recuriterController = new RecruiterController();
const app = express();
const port = 3200;

app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views','./src/views');

app.use(express.static('public'));

app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

app.use(session({
    secret:'secret key',
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false}
}));
app.use(cookieParser());
app.use(checkUser);

app.get('/',jobSeekerController.homepage);
app.get('/viewjobs', auth,jobSeekerController.viewJobs);
app.get("/jobsignup", jobSeekerController.signup);
app.get('/joblogin',jobSeekerController.login);
app.get('/recuritersignup', recuriterController.signUp);
app.get('/recuriterlogin', recuriterController.login);
app.get('/jobposting', recuriterController.jobposting );
app.get('/apply/:id',auth, jobSeekerController.applyjob);
app.get('/applicants/:id', Recuritauth,recuriterController.applicants);
app.get('/edit/:id',recuriterController.updateJobPosting);
app.get('/delete/:id',recuriterController.deletePost);


app.post('/jobposting', recuriterController.postJobPosting );
app.post('/jobsignup',recruiterValidationRules(),validate, jobSeekerController.postsignup);
app.post('/joblogin',lastVisit,jobSeekerController.postlogin);
app.post('/apply/:id', auth, fileUpload.single('resume'), applicationValidationRules(), validate, jobSeekerController.postApply);

app.post('/updatejob', recuriterController.postupdate);


app.post('/recuritersignup',recruiterValidationRules(),validate,recuriterController.postSignup);
app.post('/recuriterlogin',lastVisit2,recuriterController.postLogin);

app.get('/logout', jobSeekerController.logout);

app.listen(port,(err)=>{
    if(err){
        console.log('error in listning to the server');
    }

    console.log(`Server Sucessfully Started At Port: ${port}` );
});
