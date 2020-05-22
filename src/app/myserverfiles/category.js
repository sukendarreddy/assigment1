at=exp.Router()
at.get("/getcat",(req,res)=>{
    client.connect(err => {
         collection = client.db(se_serverset.dbname).collection("cat_db").find().toArray((err,result)=>{
            if(err)
            console.log(err)
        else
                //console.log(result)
                res.send(result)
                client.close();

              });
        // perform actions on the collection object
        
      });

})
at.post("/insertcat",(req,res)=>{
  var obj =req.body;
  client.connect(err => {
    client.db(se_serverset.dbname).collection("cat_db").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
      //  lastid=result[0]._id
      //         lastid=lastid+1
      //         obj._id=lastid
      //         obj.status=1

              lastid=result[0]._id
              lastid=lastid+1
              obj._id=lastid
              obj.status=1
console.log(obj)
   client.db(se_serverset.dbname).collection("cat_db").insertOne(obj,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
                // client.close();
              }); 
           // console.log(lastid)
            });
            })
            })
      module.exports=at;