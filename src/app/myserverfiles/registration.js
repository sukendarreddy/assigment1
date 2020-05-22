at=exp.Router()
secref=require("./toke")
nm=require("../../../node_modules/nodemailer")
at.post("/registrationinsert",(req,res)=>{
    var obj =req.body;
    client.connect(err => {
      client.db(se_serverset.dbname).collection("registration").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
        
                lastid=result[0]._id
                lastid=lastid+1
                obj._id=lastid
                obj.status=1
                varemail=obj.email
                
 
     client.db(se_serverset.dbname).collection("registration").insertOne(obj,()=>{

       var v_token=tok.sign({uname:"su"},secref.token)
      
       client.db(se_serverset.dbname).collection("registration").updateOne({email:varemail},{$set:{token:v_token}})

transport=nm.createTransport({
  service:"gmail",
  auth:{
    "user":"sukendarreddy.98@gmail.com",
    "pass":"kandimalla6798"
  }
})
str1="http://localhost:4200/user/activate;tk="+v_token
str="To Active your account Click on <a href="+str1+">Link</a>"
transport.sendMail({
  from:"sukendarreddy.98@gmail.com",
  subject:"Activation Requied",
  to:varemail,
  html:str
},function(err,rep){

          if(err){
              res.send(err);
          }else{
              console.log(obj)
              res.send({result:"Registration Successfully Congratulation"});
          }
                  
                }); 
            
              });
              })
              })})


              // at.post("/logininsert",(req,res)=>{
               
              //   client.connect(err => {
              //     client.db(se_serverset.dbname).collection("registration").find(req.body,{_id:1,email:1,fname:1}).sort({_id:-1}).limit(1).toArray((err,result)=>{
 
              //         if(err){
              //             res.send(err);
              //         }else{
              //             console.log(result)
              //             res.send({res:result});
              //         } 
              //               }); 
                        
              //             });
              //             })


              //logindetails
              at.post("/logininsert",(req,res)=>{
                se=req.session
                //console.log(se)
                client.connect(err=>{ client.db(se_serverset.dbname).collection("registration").find(req.body).toArray((err,result)=>{
                logintoken = tok.sign( {email:req.body.email},secref.token) 
                se.tokensession=logintoken
                console.log(logintoken)
                se.em=req.body.email
                console.log(se)
                if(result.length>=1){
                obj={tok:logintoken,fname:result[0].fname,active:result[0].active,length:1}
              }
                //console.log(logintoken)
                else{
                  obj={}
                }
                res.send({res:obj})
                console.log(result)
                })
                })
                })
                
//loginprofiledata
      at.post("/profiledata",(req,res)=>{
        se=req.session
        if(se.tokensession==req.body.token){

       
                          client.connect(function(){
                            console.log("valid")

                          client.db(se_serverset.dbname).collection("registration").find({email:se.em}).toArray(
                            (err,result)=>{
                              console.log(result)
                              res.send({res:result})
                            }
                          )
                        })
                      }
                      else{
                        res.send({res:"invalid"})
                      }
                      })

//Edit my Account details
//editmyaccountt
at.post("/editmyaccountt",(req,res)=>{
  //console.log("hai6")
  client.connect(()=>{
    console.log(req.body)
    client.db(se_serverset.dbname).collection("registration").updateOne(req.body[0],req.body[1],(err,result)=>{
      console.log("hai1111")
      if(err){
      console.log(err)
    }
      else
      {
      res.send(result)
    }
    })
  })
})





//Userdetails
at.post("/getuserlogindetails",(req,res)=>{
  se=req.session
  client.connect(function(){
  client.db(se_serverset.dbname).collection("registration").find({email:se.em},{email:1,mobileno:1,Adrees1:1}).toArray(
    (err,result)=>{
      console.log(result)
      res.send({res:result})
    }
  )
})
})


//Acount Activate
at.post("/activation",(req,res)=>{
  client.connect(()=>{
    console.log(req.body)
    client.db(se_serverset.dbname).collection("registration").updateOne(req.body,{$set:{active:1}},function(err,result){
      if(err)
      res.send({msg:err})
      else
      res.send({msg:1})
    })
  })
})

at.post("/storecartdata",(req,res)=>{
  client.connect(()=>{
    client.db(se_serverset.dbname).collection("cartitems_db").save(req.body,function(err,result){
      res.send({resp:result})
    })
  })
})

at.post("/getcartdata",(req,res)=>{
  client.connect(()=>{
    client.db(se_serverset.dbname).collection("cartitems_db").find(req.body,function(err,result){
      res.send(result)
    })
  })

})

//recovery password


  at.post("/recoverypass",(req,res)=>{
    console.log(req.body)
    varemail=req.body.email
    client.connect(err => {
    client.db(se_serverset.dbname).collection("registration").find(req.body).toArray((err,result)=>{
    var v_token=tok.sign({},secref.token)
    console.log("haiii")
    console.log(result.length)
    if(result.length>=1){
      console.log("hello")
    transport=nm.createTransport({
      service:"gmail",
      auth:{
        "user":"sukendarreddy.98@gmail.com",
        "pass":"kandimalla6798"
      }
    })
    str1="http://localhost:4200/user/forgotpass;tk="+v_token
    str="Reset your password <a href="+str1+">Link</a>"
              transport.sendMail({
                from:"sukendarreddy.98@gmail.com",
                subject:"Recover mail for Password Reset",
                to:varemail,
                html:str
              })
              }else{
                res.send({result:"Email id Not Existed"});
  }
              })
            })
  })

at.get("/email",function(req,res){
  res.send({p:"sent"})
  se=req.session
  varemail=se.em
  var transporter=nm.createTransport({
    service:"gmail",
      auth:{
      user:"sukendarreddy.98@gmail.com",
        pass:"kandimalla6798"
    }, tls:{
      rejectUnauthorized:false
    }


  })
  str="<script>$('document').ready(function(){$('#t1').click(function(){alert('hi')})})</script><form if='frm1' action='http://localhost:4200/user/email' method='get'>Rate our service<br><input type='hidden' name='t1' value='12' ><input type='number' min=0 max=5 name='t2' onclick='this.value=1' id='t2' ><br><div onclick='t2.value=1' style='float:left;margin-right:4px;background-color:red;width:30px;height:30px;border-radius:15px;color:white;text-align:center;font-size:25px'>1</div><div onclick='t2.value=2' style='float:left;margin-right:4px;background-color:red;width:30px;height:30px;border-radius:15px;color:white;text-align:center;font-size:25px'>2</div><div onclick='frm1.t2.value=3' style='float:left;margin-right:4px;background-color:red;width:30px;height:30px;border-radius:15px;color:white;text-align:center;font-size:25px'>3</div><br><textarea name='cm'></textarea><input type='submit' value='send'></input></form>"
  var info={
        to:varemail,
      subject:"test mail",
      from:"sukendarreddy.98@gmail.com",
      html:str
}
    transporter.sendMail(info,function(err,result){
      if(err)
        console.log(err)
        else
        consolelog(result)
    })
})


                          
              module.exports=at