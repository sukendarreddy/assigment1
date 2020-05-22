at=exp.Router()
at.get("/getproduct",(req,res)=>{
    client.connect(err => {
         collection = client.db(se_serverset.dbname).collection("product_db").find().toArray((err,result)=>{
            if(err)
            console.log(err)
        else
                console.log(result)
                res.send(result)
                

              })
            })
          })
at.post("/getproductforsearch",(req,res)=>{
  console.log("hai")
  client.connect(err=>{
    console.log(req.body)
    collection=client.db(se_serverset.dbname).collection("product_db").find(req.body).toArray((err,result)=>{
      if(err)
      console.log(err)
      else
      console.log("haii")
      res.send(result)
      //console.log("haiiiiiiii")
    })
  })      
})



              at.post("/insertproduct",(req,res)=>{
                var obj =req.body;
                client.connect(err => {
                  client.db(se_serverset.dbname).collection("product_db").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
                    lastid=result[0]._id
              lastid=lastid+1
              obj._id=lastid
              obj.status=1
              console.log(obj)
                 client.db(se_serverset.dbname).collection("product_db").insertOne(obj,(err,result)=>{
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
        


                           //productdaa subsubcatid
                           at.post("/productbasedsubsubcatid",(req,res)=>{
                            //console.log("hello")
                         ob=req.body
                         console.log(ob)
                         client.connect(()=>{
                            client.db(se_serverset.dbname).collection("product_db").find(req.body).toArray(
                                 
                                 (err,result)=>{
                                    console.log(result)
                                    res.send(result)
                                 }
                             )
                         })
                        })
//productid
at.post("/productid",(req,res)=>{
  //console.log("hello")

client.connect(()=>{
  client.db(se_serverset.dbname).collection("product_db").find(req.body).toArray(
       
       (err,result)=>{
          console.log(result)
          res.send(result)
       }
   )
})
})


at.get("/producttype",(req,res)=>{
  //console.log("haii")
  client.connect(err => {
       collection = client.db(se_serverset.dbname).collection("product_db").find().sort().limit(8).toArray((err,result)=>{
          if(err)
          console.log(err)
      else
              console.log(result)
              res.send(result)
              //client.close();

            });
      // perform actions on the collection object
      
    });
    
})
at.get("/productlatest",(req,res)=>{
  //console.log("haii")
  client.connect(err => {
       collection = client.db(se_serverset.dbname).collection("product_db").find().limit(8).toArray((err,result)=>{
          if(err)
          console.log(err)
      else
              console.log(result)
              res.send(result)
              //client.close();

            });
      // perform actions on the collection object
      
    });

})

at.get("/productupcomming",(req,res)=>{
  //console.log("haii")
  client.connect(err => {
       collection = client.db(se_serverset.dbname).collection("product_db").find({"producttype" : "Upcoming Product"}).limit(4).toArray((err,result)=>{
          if(err)
          console.log(err)
      else
              console.log(result)
              res.send(result)
              //client.close();

            });
      // perform actions on the collection object
      
    });

})


//emailreview instret
//emailinstret

at.post("/emailinstret",(req,res)=>{
  console.log("hai")
  var obj =req.body;
  
  client.connect(err => {

   client.db(se_serverset.dbname).collection("wishlist_db").insertOne(obj,(err,result)=>{
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
            
module.exports=at