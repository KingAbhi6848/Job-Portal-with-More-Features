export default class RecuriterModel {

    constructor(jobId, recuriterId, { jobTitle, companyName, location, jobDescription, skillsRequired, experience }) {
        this.jobId = jobId;
        this.recuriterId = recuriterId;
        this.jobTitle = jobTitle;
        this.companyName = companyName;
        this.location = location;
        this.jobDescription = jobDescription;
        this.skillsRequired = skillsRequired;
        this.experience = experience;
        this.applicants = [];
    }

    static addnewjob(jobdetails, recuriterId) {
        const newjobPost = new RecuriterModel(Date.now().toString(), recuriterId, jobdetails);
        jobList.push(newjobPost);
        return { success: true, newjobPost };
    }

    static getJobList() {
        return jobList;
    }

    static update(id) {
        console.log('id :-', id)
        const jobFound = jobList.find(job => job.jobId == id);
        console.log("model: ", jobFound)
        return jobFound;
    }

    static postUpdate(data, recuriterid) {
        console.log('data', data);
        const jobIndex = jobList.findIndex(job => job.jobId == data.jobId);
        if (jobIndex !== -1) {
            jobList[jobIndex] = data;
            jobList[jobIndex].recuriterId = recuriterid;
            console.log('Job updated successfully');
        } else {
            console.log('Job not found');
        }
    }

    static delete(id) {
        const jobIndex = jobList.findIndex(job => job.jobId == id);
        jobList.splice(jobIndex, 1);
    }

    static getById(id) {
        const jobData = jobList.find(job => job.jobId === id);
        return jobData || null;
    }
}

const jobList = [];
