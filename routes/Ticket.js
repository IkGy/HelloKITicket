const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

router
// .get('/',async (req,res,next)=>{
//   try {
    
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// })
.post('/',async (req,res,next)=>{
  try {
    console.log(req.body);
    console.log(typeof(req.body.kind));
    console.log(req.body.imageURL);
    const newTicket = Ticket.create({//{title:"asdfasdf",kind:"1"}
      
      //create => db테이블에 값 입력하는거
      //findOne, findAll => db에서 값 조회
      name: req.body.title,
      kind: req.body.kind,
      price: req.body.price,
      content: req.body.help,
      imageURL: req.body.imageURL,
      address: req.body.address,
      regdate: req.body.date,
      maxPeople: req.body.people,
    })
    console.log(newTicket);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
})

module.exports = router;