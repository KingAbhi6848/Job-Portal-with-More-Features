export const checkUser = (req, res, next) => {
  // Check for recruiter role first
  if (req.session.isRecuriter) {
    res.locals.role = 'recruiter'; // Set the role to 'recruiter'
    res.locals.recuriterId = req.session.recuriterId; // Store the recruiter ID in locals
  } else if (req.session.isUser) {
    // Set jobseeker role only if recruiter is not set
    res.locals.role = 'jobseeker'; // Set the role to 'jobseeker'
  } else {
    // No role identified, set to null
    res.locals.role = null; // Set the role to null
  }

  next(); // Proceed to the next middleware or route handler
}
