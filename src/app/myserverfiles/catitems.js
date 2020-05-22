at=exp.Router()
var request= require('request');
//catdata afterlogin
at.post("/storecartdata",(req,res)=>{
    client.connect(()=>{
      se=req.session
      if(req.body.length>=1){
        for(var i=0;i<req.body.length;i++){
          req.body[i].emailsession=se.em
        }
      }
      else{
        req.body.emailsession=se.em
      }
      //console.log(req.body)
      client.db(se_serverset.dbname).collection("cartitems_db").insert(req.body,function(err,result){
        res.send({res:result})
      })
    })
  })     
  
  at.post("/getcartdata",(req,res)=>{
    client.connect(()=>{
      //console.log("haiii")
      se=req.session
      client.db(se_serverset.dbname).collection("cartitems_db").find({emailsession:se.em}).toArray((err,result)=>{
        console.log(req.body)
        res.send(result)
      })        
    })  
  
  })              
  



//Recoverypass
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



  //setstayconnected

  at.post("/setstayconnected",(req,res)=>{
    console.log("hai")
    console.log(req.body)
    contactemail=req.body.email,
    textmsg=req.body.text,
    transport=nm.createTransport({
      service:"gmail",
      auth:{
        "user":"sukendarreddy.98@gmail.com",
        "pass":"kandimalla6798"
      }
    })
    
    str=contactemail+"<br>"+textmsg
              transport.sendMail({
                from:"sukendarreddy.98@gmail.com",
                subject:"Recover mail for Password Reset",
                to:"sukendarreddy.98@gmail.com",
                html:str
              })
              }
              
    
  )



 
  module.exports=at


