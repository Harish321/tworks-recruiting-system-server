import moment from "moment";

class application{
    constructor(data){
        this.batchId = data.batchId;
        this.name = data.name;
        this.email = data.email;
        this.age = data.age;
        this.yearsOfExperience = data.yearsOfExperience;
        this.positionApplied = data.positionApplied;
        this.dateOfApplication = moment(data.dateOfApplication).format('yyyy-MM-DD');
        this.statusOfApplication = data.statusOfApplication;
    }
}

export default application;