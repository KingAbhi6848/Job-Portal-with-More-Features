# Job Portal Application

This is a Job Portal Application built using Node.js and Express. It provides features for job seekers and recruiters, including job postings, job applications, and user authentication.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
Install the dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add the necessary environment variables (if any):

makefile
Copy code
SESSION_SECRET=your_session_secret
Running the Server
Start the server:

sh
Copy code
npm start
The server will run on port 3200. You can access it at http://localhost:3200.

Features
Job seekers can view and apply for jobs.
Recruiters can post job openings and view applicants.
User authentication using sessions and cookies.
File upload functionality for resumes.
API Endpoints
Job Seekers
GET / - Homepage
GET /viewjobs - View available jobs (requires authentication)
GET /jobsignup - Job seeker signup page
GET /joblogin - Job seeker login page
GET /apply/:id - Apply for a job (requires authentication)
POST /jobsignup - Handle job seeker signup form submission
POST /joblogin - Handle job seeker login form submission
POST /apply/:id - Handle job application form submission (requires authentication)
Recruiters
GET /recuritersignup - Recruiter signup page
GET /recuriterlogin - Recruiter login page
GET /jobposting - Job posting page
GET /applicants/:id - View applicants for a specific job (requires authentication)
GET /edit/:id - Edit a job posting
GET /delete/:id - Delete a job posting
POST /jobposting - Handle job posting form submission
POST /recuritersignup - Handle recruiter signup form submission
POST /recuriterlogin - Handle recruiter login form submission
POST /updatejob - Handle job update form submission
Common
GET /logout - Logout
Middleware
auth - Authentication middleware for job seekers
Recuritauth - Authentication middleware for recruiters
fileUpload - Middleware for handling file uploads (resumes)
checkUser - Middleware to check user status
lastVisit - Middleware to track the last visit time for job seekers
lastVisit2 - Middleware to track the last visit time for recruiters
applicationValidationRules - Validation rules for job applications
recruiterValidationRules - Validation rules for recruiter signup and login
validate - Middleware to handle validation results
Views and Static Files
EJS is used as the templating engine.
Static files are served from the public directory.
License
This project is licensed under the MIT License.
