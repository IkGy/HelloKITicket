const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/',async (req,res,next)=>{
  try {
    // console.log('test',req.body.id);
    const id = req.body.id;
    const pwd = req.body.pwd;
    const Ck_pwd = await User.findOne({//selete * from User
      where:{id: id} //wheere id=id
    })
     
    // console.log('test',Ck_pwd.pwd); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
    if (Ck_pwd === null) {
      //Ck_pwd = null 은 db에서 아이디로 조회한 값이 없다는 것
      return res.status(400).end();
    }else{
      if (pwd == Ck_pwd.pwd) {
        console.log(Ck_pwd);
        return res.status(201).json(Ck_pwd);
      }else{
        return res.status(400).json(Ck_pwd);
      }
    }
  } catch (error) {
    
  }
})

module.exports = router;