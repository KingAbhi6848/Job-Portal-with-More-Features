export const checkUser = (req,res,next)=>{
    
      // Check for recruiter role first
  if (req.session.isRecuriter) {
    res.locals.role = 'recruiter';
    res.locals.recuriterId= req.session.recuriterId;
  } else if (req.session.isUser) {
    // Set jobseeker role only if recruiter is not set
    res.locals.role = 'jobseeker';
  } else {
    // No role identified, set to null (optional)
    res.locals.role = null;
  }

        next();
}