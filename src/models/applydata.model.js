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

    static data(data,filename,jobId, jobSeekerId, id) {
        const newApply = new Apply(data, '/images/' + filename, id);
        newApply.jobId.push(jobId);
        newApply.jobSeekerId.push(jobSeekerId);
         const jobData = RecuriterModel.getById(jobId);
         jobData.applicants.push(id);
         console.log(jobData);
        applyData.push(newApply);


        return applyData;
    }
    static getAll(){
        return applyData;
    }

    static getApplicantsByJobList(Data){
        const applicants =[];
        Data.applicants.forEach(applicant=>{

         applicants.push( applyData.find(applicantId => applicantId.id == applicant)) ;
        })
        return applicants;
    }
}

const applyData = [];

