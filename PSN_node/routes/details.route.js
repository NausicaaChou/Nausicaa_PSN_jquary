const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var output={
    product:{/*title,subtitle,..*/},
    pics:[/*{sm,md,lg},{sm,md,lg},...*/],
    specs:[/*{lid,spec},{lid,spec},...*/]
  }
  res.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
  });
  var lid=req.query.lid;
  console.log(lid);
  if(lid!==undefined){
    //查询一个商品的详细信息
    var sql="select * from psn_details where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err) console.log(err);
      if(result.length!=0){
        //result:[{product}]
        output.product=result[0];
        console.log(output.product);
        //查询图片列表
        var sql="select * from psn_details_pic where laptop_id=?";
        pool.query(sql,[lid],(err,result)=>{
          if(err) console.log(err);
          //result:[{sm,md,lg},{sm,md,lg},...]
          output.pics=result;
          //查询规格列表
          var family_id=output.product["family_id"];
          var sql="select lid,spec from psn_details where family_id=?";
          pool.query(
            sql,[family_id],(err,result)=>{
              if(err) console.log(err);
              output.specs=result;
              //将完整结果回发客户端
              res.write(JSON.stringify(output));
              res.end();
            }
          )
        })
      }else{
        res.write(JSON.stringify(output));
        res.end();
      }
    });
    
  }else{
    res.write(JSON.stringify(output));
    res.end();
  }
})

module.exports=router;