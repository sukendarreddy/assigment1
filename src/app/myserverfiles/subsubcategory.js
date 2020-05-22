rt=exp.Router()
rt.get("/getsubsubcat",function(req,res){
    //console.log("hi")
    client.connect(err => {
        collection = client.db(se_serverset.dbname).collection("subsubcat_db")
        .aggregate([{
            $lookup:{
                from:"cat_db",
                localField:"cat_id", //here main file is tbl_subcat and id is catid
                foreignField:"_id",
                as:"data"     //stores in data
            }
                    },
                    {
                        "$unwind":"$data"
                    },{
                    $lookup:{
                        from:"subcat_db",
                        localField:"subcat_id", //here main file is tbl_subsubcat and id is sscatid
                        foreignField:"_id",
                        as:"datanew"    //stores in datanew
                    }
                   
                },
                    {$unwind:"$datanew"},
                    {
                        "$group":{
                            "_id":"$_id", 
                            "abc":{
                                "$push":{
                                    "_id":"$_id",
                                     "cat_id":"$data._id",
                                    "subcat_id":"$datanew._id",
                                    "subsubcatname":"$subsubcatname", 
                                    "subcatname":"$datanew.subcatname", 
                                    "catname":"$data.catname",
                                    
                                    "Active":"$Active"
                                }
                            }
                        }
                    },
                    {"$unwind":"$abc"}
                ])
                .toArray((err,result)=>{
                    if(err){
                    res.send(err)}
                    else{
                    //res.send({result:"getdata"})
                    res.send(result)}
                })
            })
})

rt.post("/insertsubsubcat",(req,res)=>{
    var obj =req.body;
    client.connect(err => {
      client.db(se_serverset.dbname).collection("subsubcat_db").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
        lastid=result[0]._id
  lastid=lastid+1
  obj._id=lastid
  obj.status=1
  console.log(obj)
     client.db(se_serverset.dbname).collection("subsubcat_db").insertOne(obj,(err,result)=>{
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

              

rt.post("/subcatidgetting",(req,res)=>{
                console.log("hello")
             ob=req.body
             console.log(ob)
             client.connect(()=>{
                client.db(se_serverset.dbname).collection("subsubcat_db").find(ob).toArray(
                     
                     (err,result)=>{
                        console.log(result)
                        res.send(result)
                     }
                 )
             })
            })

module.exports=rt