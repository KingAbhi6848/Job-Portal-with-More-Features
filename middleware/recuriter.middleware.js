export const Recuritauth = (req, res, next) => {
    // Check if the user is a recruiter
    if (req.session.isRecuriter) {
      // If true, proceed to the next middleware or route handler
      next();
    } else {
      // If false, send a message indicating login is required and suggest returning to the homepage
      res.send('Login Required, Go Back to HomePage');
      // Optionally, you could redirect the user back to the previous page
      // res.redirect('back');
    }
  }
  