import db from '../../config/database'
import application from '../model/application'
class ApplicationsService{
    async create(req,res){
        var dataJson = req.body;
        var batchId = Math.floor((Math.random() * 10000) + 1);
        dataJson.map(o => {
            // console.log(o);
            o.batchId = batchId;
            var applicaiton = new application(o);
            // console.log(applicaiton);
            db.query("Insert into applications set ? ",applicaiton,(err,result)=>{
                // console.log(err);
                // console.log("Inserted");
            })
        })
        db.query(`SELECT * from applications where batchId = ${batchId}`,(err,result)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send({
                batchId:batchId,
                rows:result
            })
        })
    }
    async getDataById(req,res){
        var reqBody = req.query;
        if(reqBody.batchId){
            db.query(`select * from applications where batchId = ${reqBody.batchId}`,function(err,result){
                if(err){
                    return res.status(500).send(err);
                }
                return res.status(200).send({bathcId:reqBody.batchId, rows:result});
            })
        }
    }
}

export default ApplicationsService