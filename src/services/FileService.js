import readXlsxFile from 'read-excel-file/node';
import convertToJson from "read-excel-file/schema";
import * as fs from 'fs';

class FileService{
    async uploadFile(req,res){
        let file = req.files.candidateList;
        var uploadPath = __dirname + '/uploads/' + file.name;
        var schema = {
            'Name' : { prop: 'name',  type: String},
            'Email': { prop: 'email', type: String},
            'Age'  : { prop: 'age', type :Number},
            'Years of experience': { prop: 'yearsOfExperience', type: Number},
            'Position applied': {prop:"positionApplied",type : String},
            'Date of application':{ prop: "dateOfApplication", type : Date,},
            'Status of the application':{ prop : "statusOfApplication", type : String}
        }
        await file.mv(uploadPath, function(err) {
            if (err)
                return res.status(500).send(err);
            else{
                readXlsxFile(uploadPath).then((rows) => {
                    const objects = convertToJson(rows, schema);
                    fs.unlink(uploadPath,(callback)=>{});
                    return res.status(200).send(objects); 
                })
            }
        })
    }
}
export default FileService;