const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async(req,res)=>{
    const { email } = req.body
    
    try{
        if(await User.findOne({email}))
        return res.status(400).send({error:'Usuario ja existe'})
        
        const user = await User.create(req.body)


        return res.send({user})
    }catch(err){
        return res.status(400).send({error: 'Registration failed'})
    }
})

router.post('/register', async(req,res)=>{
    const { cpf } = req.body
    
    try{
        if(await User.findOne({cpf}))
        return res.status(400).send({error:'Usuario ja existe'})
        
        const user = await User.create(req.body)


        return res.send({user})
    }catch(err){
        return res.status(400).send({error: 'Registration failed'})
    }
})

router.post('/register', async(req,res)=>{
    const { phone } = req.body
    
    try{
        if(await User.findOne({phone}))
        return res.status(400).send({error:'Usuario ja existe'})
        
        const user = await User.create(req.body)


        return res.send({user})
    }catch(err){
        return res.status(400).send({error: 'Registration failed'})
    }
})

module.exports = app => app.use('/auth', router)