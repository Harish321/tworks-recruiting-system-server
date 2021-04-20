import FileService from '../services/FileService';
var fileService = new FileService();
class FileController{
    // constructor(service){
    //     this.service = service;
    // }
    async uploadFile(req,res,err){
        return await fileService.uploadFile(req,res);
    }
}
console.log(fileService);

export default new FileController();
