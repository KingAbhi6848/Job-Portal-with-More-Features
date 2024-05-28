import Apply from "../models/applydata.model.js";
import RecuriterModel from "../models/recuriter.model.js";
import UserLogin from "../models/userlogin.model.js";
export default class JobSeekerController{

    homepage(req,res){
        res.render('index');
    }

    viewJobs(req,res){
      const jobs = RecuriterModel.getJobList();
    //   const recuriter = UserLogin.getJobSeeker();
    //   const jobseeker = UserLogin.

    const recuriterId = req.session.recuriterId;
    const lastVisit = req.session.lastVisit;
        res.render('viewjobs',{
            role:res.locals.role,
            jobs:jobs,
            recuriter:recuriterId,
            lastVisit
        });
    }

    signup(req,res){
        res.render('jobseekerSignup');
    }

    login(req,res){
        res.render('jobseekerlogin');
    }

    applyjob(req,res){
      const id =  req.params.id;
        res.render('jobseekerapplyform',{id});
    }

    postsignup(req,res){
           const result = UserLogin.addJobSeeker(req.body);
           const {success , newJobSeeker} = result;
        if(success){
            console.log('newJobseeker:-', newJobSeeker);
            res.redirect('/joblogin');
        }
       else{
        res.send('Something went Wrong');


       }
    }

    async postlogin(req, res) {
        try {
            // Assuming UserLogin.jobLoginAuth is an async function
            const result = await UserLogin.jobLoginAuth(req.body);
            const { success, message, jobSeekerId } = result;
    
            // Reset recruiter session information
            req.session.isRecuriter = null;
            req.session.recuriterId = null;      
    
            // Ensure uniqueId exists before using it
            const uniqueId = req.cookies.uniqueId;
            if (!uniqueId) {
                throw new Error("UniqueId cookie is missing.");
            }
    
            const lastVisit = req.cookies[`lastVisit_${uniqueId}`];
            const currentVisit = new Date().toLocaleString();
    
            // Set a new cookie with the current visit time
            res.cookie(`lastVisit_${uniqueId}`, currentVisit, { maxAge: 900000, httpOnly: true });
    
            if (lastVisit) {
                console.log(`Your last visit was on ${lastVisit}`);
            } else {
                console.log('This is your first visit!');
            }
    
            // Set the new session data
            req.session.isUser = success;
            req.session.jobSeekerId = jobSeekerId;
            req.session.lastVisit = lastVisit;
    
            console.log(message);
            res.redirect('/viewjobs');
        } catch (error) {
            console.error('Error during post-login:', error);
            res.status(500).send('An error occurred during login.');
        }
    }
    
      

    postApply(req,res){
        console.log(req.file)
      const jobListId =   req.params.id;
        const success = Apply.data(req.body,req.file.filename,jobListId,req.session.jobSeekerId,Date.now().toString()+"77");
        console.log('Form Submitted Sucessfully');
        console.log(success);
        res.redirect('/viewjobs');
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
           res.redirect('/');
        })
    }
}