const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Siege=mongoose.model('siége')
const Benevole=mongoose.model('benevole')
const Membre=mongoose.model('membre')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const nodemailer= require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
//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
const transporter = nodemailer.createTransport(sendgridTransport({
   auth:{
       api_key:'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'
   }
}))

// router.post('/addsiege',(req,res)=>{
//   const{nom,password,mail}=req.body
//   if (!nom || !password|| !mail) {
//     return res.status(422).json('saisir vos cordonnées')
//  }
//  const siege = new Siege({nom:nom,password:password,mail:mail})
//  siege.save().then(s=>{res.json('saved')})

// })

router.post('/connect',(req,res)=>{
    const {password}=req.body
    if(!password){
        return res.status(422).json('saisir le code')
    }
   res.json('connected')
    
})
router.post('/sendMessage',(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.body.postedBy
    }
    
    Siege.updateOne({},{
        $push:{comments:comment}
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })

})

router.get('/myMessages',(req,res)=>{
   Siege.find().then(siege=>{
    const messages=new Array();
    messages.push(siege[0].comments)
    res.json(messages)
   })
})

router.get('/listeBenevole',(req,res)=>{
    Benevole.find().then(candidat=>{
     res.json(candidat)
    })
})

router.get('/listeMembre',(req,res)=>{
    Membre.find().then(membres=>{
        res.json(membres)
    })

})

router.post('/resetcode',(req,res)=>{
   crypto.randomBytes(32,(err,Buffer)=>{
    if(err){
        console.log(err)
    }
    const token = Buffer.toString("hex")
    Siege.findOne().then(user=>{
       user.resetToken= token
       user.expireToken = Date.now() + 3600000
       user.save().then(result=>{        
        transporter.sendMail({
            to:user.mail,
            from:"ishsliti@gmail.com",
            subject:'Changer le code',
            html:`
                     <p>You requested for password reset</p>
                     <h5>click in this <a href="http:localhost:3000/reset/${token}">link</a> to reset password</h5>
                     `
        })
        res.json({message:"check your email"})})

        
       
    })
   })
})

router.post('/newpassword',(req,res)=>{
    const newpass =req.body.password
    const sentToken =req.body.token
    Siege.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}}).then(user=>{
        if(!user){
            return res.status(422).json({error:'try again'})
        }
        bcrypt.hash(newpass,12).then(hashedpassword=>{
            user.password=newpass
            user.resetToken=undefined
            user.expireToken=undefined
            user.save().then(saved=>{
                res.json({message:"password updated"})
            })
        })
    })
})

module.exports = router