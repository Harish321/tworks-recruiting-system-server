import readXlsxFile from 'read-excel-file/node';
import convertToJson from "read-excel-file/schema"
import * as fs from 'fs';
export default (server) => {

    // POST ROUTES
    server.post(`/api/file/upload`, function(req,res,err){
        console.log(req.files);
        let file = req.files.candidateList;
        var uploadPath = __dirname + '/uploads/' + file.name;
        var schema = {
            'Name' : { prop: 'name',  type: String},
            'Email': { prop: 'email', type: String},
            'Age'  : { prop: 'age', type :Number},
            'Years of experience': { prop: 'yearsOfExperience', type: Number},
            'Position applied': {prop:"positionApplied",type : String},
            'Date of application':{ prop: "dateofApplication", type : Date},
            'Status of the application':{ prop : "statusOfTheApplication", type : String}
        }

  // Use the mv() method to place the file somewhere on your server
        file.mv(uploadPath, function(err) {
            if (err)
                return res.status(500).send(err);
            else{
                readXlsxFile(uploadPath).then((rows) => {
                    console.log(rows);
                    const objects = convertToJson(rows, schema);
                    console.log(objects);
                    fs.unlink(uploadPath,(callback)=>{});
                    res.send(objects);
                })
            }
        })
    })
    server.post('/api/create',function(req,res,err){
        console.log(req.body);
        return res.send(req.body);
    })
  }