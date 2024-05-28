import RecuriterModel from "./recuriter.model.js";

export default class Apply {
    constructor({ name, email},resume,id) {
        this.name = name;
        this.email = email;
        this.resume = resume;
        this.jobId =[];
        this.jobSeekerId = [];
        this.id = id;
    }

    // Method to add application data
    static data(data,filename,jobId, jobSeekerId, id) {
        const newApply = new Apply(data, '/images/' + filename, id);
        newApply.jobId.push(jobId);
        newApply.jobSeekerId.push(jobSeekerId);
        
        // Update the job data with the applicant's ID
        const jobData = RecuriterModel.getById(jobId);
        jobData.applicants.push(id);
        console.log(jobData);

        // Add the new application to the applyData array
        applyData.push(newApply);

        return applyData;
    }

    // Method to get all applications
    static getAll(){
        return applyData;
    }

    // Method to get applicants by job listing
    static getApplicantsByJobList(Data){
        const applicants =[];
        Data.applicants.forEach(applicant=>{
            // Find applicants by ID and push them into the array
            applicants.push(applyData.find(applicantId => applicantId.id == applicant));
        });
        return applicants;
    }
}

// Array to store application data
const applyData = [];
