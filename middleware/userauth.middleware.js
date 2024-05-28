export const auth = (req, res, next) => {
    // Check if the user is either a jobseeker or a recruiter
    if (req.session.isUser || req.session.isRecuriter) {
      // If true, proceed to the next middleware or route handler
      next();
    } else {
      // If false, render a 'loginrequired' view to prompt the user to log in
      res.render('loginrequired');
      // Optionally, you could redirect the user back to the previous page
      // res.redirect('back');
    }
  }
  