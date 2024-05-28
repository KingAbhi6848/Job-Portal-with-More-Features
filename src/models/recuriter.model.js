export default class RecuriterModel{

    constructor(jobId,recuriterId,{jobTitle, companyName,location,jobDescription,skillsRequired,experience}){
        this.jobId = jobId,
        this.recuriterId = recuriterId,
        this.jobTitle = jobTitle,
        this.companyName = companyName,
        this.location = location,
        this.jobDescription = jobDescription,
        this.skillsRequired = skillsRequired,
        this.experience = experience;
        this.applicants=[];
    }

    static addnewjob(jobdetails,recuriterId){
      const newjobPost = new RecuriterModel(Date.now().toString(),recuriterId,jobdetails);
       jobList.push(newjobPost);
   return {success:true, newjobPost};
    }

    static getJobList(){
        return jobList;
    }
    static update(id){
        console.log('id :-', id)
      const jobFound =  jobList.find(job=> job.jobId == id);
      console.log("model: ", jobFound)
      return jobFound;
    
    }

static postUpdate(data,recuriterid) {
    console.log('data', data);
    const jobIndex = jobList.findIndex(job => job.jobId == data.jobId); // Assuming job has an `id` property
    if (jobIndex !== -1) { // Check if job exists
        jobList[jobIndex] = data;
        jobList[jobIndex].recuriterId = recuriterid; 
        // Replace the job at found index with the updated data
        console.log('Job updated successfully');
    } else {
        console.log('Job not found');
    }
}

static delete(id){
    const jobIndex = jobList.findIndex(job => job.jobId == id );
    jobList.splice(jobIndex,1);
}

static getById(id){
    const jobData = jobList.find(job => job.jobId === id);
    return jobData || null;
}
}
const jobList = [{
    jobId: Date.now().toString() + '23',
    recuriterId: 1234,
    jobTitle: 'Software Engineer',
    companyName: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    jobDescription: 'Develop and maintain web applications.',
    skillsRequired: 'JavaScript, HTML, CSS, React, Node.js',
    experience: 3,
    applicants: []
}];