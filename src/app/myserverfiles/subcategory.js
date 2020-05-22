rt=exp.Router()
rt.get("/getsubcat",function(req,res){
    client.connect(err => {
        collection = client.db(se_serverset.dbname).collection("subcat_db").aggregate([{
$lookup:{
    from:"cat_db",
    localField:"cat_id",
    foreignField:"_id",
     as:"data"
}
    }
    ,{
        "$unwind":"$data"
    }])
    
.toArray((err,result)=>{
        res.send(result)
    })
})
})

rt.post("/inssubcat",(req,res)=>{
    client.connect(err => {
    client.db(se_serverset.dbname).collection("subcat_db").find({},{_id:true,subcatname:0}).sort({_id:-1}).limit(1).toArray((err,result)=>{
        lastid=result[0]._id
        lastid=lastid+1
        //console.log(lastid)
        data=req.body
        data._id=lastid
        console.log(data)

       

        client.db(se_serverset.dbname).collection("subcat_db").insertOne(data,()=>{
           // res.send({result:"Subcategory Added"})
        })
    })
})
})


//To get subcat based on cat id
rt.post("/catidgetting",(req,res)=>{
    console.log("hello")
 ob=req.body
 console.log(ob)
 client.connect(()=>{
    client.db(se_serverset.dbname).collection("subcat_db").find(ob).toArray(
         
         (err,result)=>{
            console.log(result)
            res.send(result)
         }
     )
 })
})

module.exports=rt

