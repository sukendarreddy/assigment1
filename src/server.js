exp=require("express")
tok=require("../node_modules/jsonwebtoken")
secref=require("../src/app/myserverfiles/toke")
body=require("body-parser")
catfile=require("../src/app/myserverfiles/category")
subcatfile=require("../src/app/myserverfiles/subcategory")
subsubcatfile=require("../src/app/myserverfiles/subsubcategory")
se_serverset=require("../src/app/serversettings")
productfile=require("../src/app/myserverfiles/product")
registrationfile=require("../src/app/myserverfiles/registration")
catitemfile=require("../src/app/myserverfiles/catitems")
file=require("express-fileupload")  
sess=require("express-session")

app=exp()
app.use(sess({
    secret:"%$#%^&",
    saveUninitialized:true,
    resave:true
}))
app.use(file())
app.use(body.json())
app.listen(1000)
console.log(se_serverset.dbname)
app.use("/catref",catfile)
app.use("/subcatref",subcatfile)
app.use("/subsubcatref",subsubcatfile)
app.use("/prodref",productfile)
app.use("/regisration",registrationfile)
app.use("/catitem",catitemfile)
const MongoClient = require('mongodb').MongoClient;
client = new MongoClient("mongodb://localhost:27017/project", { useNewUrlParser: true });

app.post("/insImages",function(req,res){  {
    stt=""
    console.log(req.files)
    str=new Array()
    if(req.files.f1.name){
        fname=req.files.f1.name
        dt=new Date()
        fname=dt.getTime()+fname;
        file=req.files.f1
        if(req.files.f1.mimetype=="image/jpeg" ||req.files.f1.mimetype=="image/bmp" ||req.files.f1.mimetype=="image/gif"||req.files.f1[i].mimetype=="image/webp")
   file.mv("assets/productimages/"+fname)
   str.push(fname)
   
    }
    else{
        for(i=0;i<req.files.f1.length;i++)
        { 
            fname=req.files.f1[i].name
            dt=new Date()
            fname=dt.getTime()+fname;
            file=req.files.f1[i]
            if(req.files.f1[i].mimetype=="image/jpeg" ||req.files.f1[i].mimetype=="image/bmp" ||req.files.f1[i].mimetype=="image/gif"||req.files.f1[i].mimetype=="image/webp")
            file.mv("assets/productimages/"+fname)
            str.push(fname)
        }
    }
    proid=0
    client.connect=()=> {
        collection = client.db(se_serverset.dbname).collection("product_db").find().sort({_id:-1}).limit(1).toArray((err,result)=>{
            if(err)
            console.log(err)
        else{
            proid=result[0]._id
            client.db(se_serverset.dbname).collection("product_db").updateMany({_id:proid},{$set:{images:str}})
            stt=1
        }
        }
        )
}



} } )











// app.post("/insImages",function(req,res){  {
//     stt=""
//     console.log(req.files)
//     str=new Array()
//     if(req.files.f1.name)
//     {
//     fname=req.files.f1.name
//     dt=new Date()
//     fname=dt.getTime()+fname;
//     file=req.files.f1
//     if(req.files.f1.mimetype=="image/jpeg" || req.files.f1.mimetype=="image/bmp" || req.files.f1.mimetype=="image/gif")
//     file.mv("src/assets/prodimg/"+fname)
//     str.push(fname)
// }
// else{
//     for(i=0;i<req.files.f1.length;i++)
//     {
//     fname=req.files.f1[i].name
//     dt=new Date()
//     fname=dt.getTime()+fname;
//     file=req.files.f1[i]
//     if(req.files.f1[i].mimetype=="image/jpeg" || req.files.f1[i].mimetype=="image/bmp" || req.files.f1[i].mimetype=="image/gif")
//     file.mv("src/assets/prodimg/"+fname)
//     str.push(fname)
// }
// }
// proid=0
// client.connect=()=>{
//     client.db(se_serverset.dbname).collection("product_db").find().sort({_id:-1}).limit(1).toArray(
//         (err,result)=>{
//             if(err)
//             stt=err
//             else
//             {
//             proid=result[0]._id
//             client.db(se_serverset.dbname).collection("product_db").updateMany({_id:proid},{$set:{images:str}})
//             stt=1
//             }
//             //res.redirect("http://localhost:4200/admin/cat/products;status="+stt)
//         }
//     )
// }
// }})