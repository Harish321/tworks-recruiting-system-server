import ApplicationsService from "../services/ApplicationsService"

var applicationService = new ApplicationsService();
class ApplicationController{
    // constructor(service){
    //     this.service = service;
    // }
    async create(req,res,err){
        return await applicationService.create(req,res);
    }
    async getDataById(req,res){
        return await applicationService.getDataById(req,res);
    }

}

export default new ApplicationController(new ApplicationsService());
