const Person = require('../models/personModel');
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');

// @desc Register a new Person (def role : user)
// @params POST /api/person/Register
// @access PUBLIC
exports.register = async(req,res)=>{

    try{
        const {name , email , password , desc,img,role} = req.body;
        const existEmail = await Person.findOne({email})
        if (existEmail) return res.status(400).json({msg:'Email alreafu exist.'})
        const hashedPw = await bcrypt.hash(password, 10)
        const newUser = await Person.create({name,email,password:hashedPw,desc,img,role})
        const token=jwt.sign({id:newUser._id}, process.env.JWT_SECRET,{expiresIn:'7d'});
        res.json({newUser ,token});
    }catch(error) {
        console.log(error)
        res.status(500).json({msg: 'something went wrong!'});
    }
       
}

// @desc person login
// @params POST /api/person/login
// @access PUBLIC
exports.login=async (req,res) => {
    try {
        const { email, password } = req.body;
        const existUser = await Person.findOne({email})
        if (!existUser) return res.status(400).json({msg:'You should registre first.'});
        const checkPw = await bcrypt.compare(password, existUser.password);
        if(!checkPw) return res.status(400).json({ msg: 'Wrong password, Try again.'});
        const token = jwt.sign({id:existUser._id}, process.env.JWT_SECRET,{expiresIn:'7d'});
        res.json({existUser ,token});
    } catch (error){
        console.log(error)
        res.status(500).json({ msg: 'something went wrong!'});
    }
}



exports.getPersonData = async(req, res)=>{
    try {
        const personInfo =await Person.findById(req.personId);
        res.json(personInfo);
    } catch (error) {
        res.status(500).json({ msg: 'something went wrong!'});
    }
}