export default class UserLogin{
  
    constructor(id, { firstName, lastName, email, phone, password }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    static addJobSeeker(userDetails) {
        const newJobSeeker = new UserLogin(Date.now().toString(), userDetails);
        jobSeeker.push(newJobSeeker);
        return { success: true, newJobSeeker };
    }

    static getJobSeeker(){
        return jobSeeker;
    }

    static jobLoginAuth(details){
       for(let i=0; i<jobSeeker.length ; i++){
        if(details.email == jobSeeker[i].email && details.password == jobSeeker[i].password){
            return {success:true , message: 'User Logged in Successfully', jobSeekerId: jobSeeker[i].id};
        }
       
       }
       return  {success:false , message: 'Invalid Details'};
    }


    static recuriterSignup(details){
        const newRecuriter = new UserLogin(Date.now().toString(), details);
        recuriter.push(newRecuriter);
        return recuriter;
    }

    static recuriterLogin(details){
        for(let i =0; i<recuriter.length;i++){
            if(details.email == recuriter[i].email && details.password == recuriter[i].password){
                return {success:true,recuriterid:recuriter[i].id, message:"Recuriter Logged In Successfully"}
            }
        }
        return {success:false,message:"Recuriter Failed to Login"};
    }

    static getRecuriter(){
        return recuriter;
    }

  }
  


const jobSeeker = [{
    id: Date.now().toString()+'101',
    firstName:'abhi',
    lastName:'sharma',
    phone:524752144,
    email:'as684844@gmail.com',
    password:'1'
}];
const jobSeekerApply=[];
const recuriter =[{
    id: Date.now().toString(),
    firstName:'keshav',
    lastName:'Maharaj',
    phone:524755744,
    email:'keshav@gmail.com',
    password:'1'
}];