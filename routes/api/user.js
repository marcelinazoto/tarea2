const User=require('../../database/user');
const express=require('express');
const router=express.Router();
const empty=require('is-empty');
const sha1=require('sha1');
const jwt = require('jsonwebtoken');
const auth=require('./auth');

router.get('/',auth,async(req,res)=>{
    res.json(await User.find());
});

router.post('/',auth,async(req,res)=>{
    req.body.password=sha1(req.body.password);
    let ins=new User(req.body);
    let result=await ins.save();
    if(empty(result)){
        res.json({message:'error al insertar',result});
    }else{
        res.json({message:'usuario insertado',result});
    }
});

router.patch('/:id',auth,(req,res)=>{
    req.body.password=sha1(req.body.password);
    let id=req.params.id;
    User.findByIdAndUpdate(id,req.body,()=>{
        res.json({message:'actualizado'});
    });
});

router.delete('/:id',auth,(req,res)=>{
    User.findByIdAndRemove(req.params.id,()=>{
        res.json({message:'eliminado'+req.params.id});
    });
});

router.get('/cursos/:id',auth,(req,res)=>{
    console.log(req.params.id);
    User.findOne({_id:req.params.id}).select('cursos').exec((err,doc)=>{
        console.log(doc);
        if(empty(doc)){
            res.json([]);
        }else{
            res.json(doc.cursos);
        }
    });
});

router.post('/cursos',auth,(req,res)=>{
    let id=req.body.id;
    let curso=req.body.curso;
    User.findOne({
        _id:id
    }).select('cursos').exec((err,doc)=>{
        if(empty(doc)){
            res.json({message:'error en la consulta'});
        }else{
            
            doc.cursos.push({
                nombre:curso
            });
            User.findByIdAndUpdate(id,doc,()=>{
                res.json({
                    message:'se inserto el curso'
                });
            });
        }
    });
})

router.get('/token',(req,res)=>{
    let token=jwt.sign({},process.env.JWT_KEY||'miClave',{
        expiresIn:'1h'
    });
    res.json({token});
});

const WhatsAppWeb = require('baileys');
const client = new WhatsAppWeb();

router.get('/whatts',async(req,res)=>{
    
    //await client.connect();
    //res.json({client});
    /*.then (([user, chats, contacts, unread]) => {
        console.log ("oh hello " + user.name + " (" + user.id + ")")
        console.log ("you have " + unread.length + " unread messages")
        console.log ("you have " + chats.length + " chats")
    })
    .catch (err => console.log("unexpected error: " + err) )*/
    res.json({message:'funciona '});
    
});

router.get('/message',async(req,res)=>{
    try {
        res.json({message:'funciona '});
    } catch (error) {
        res.json({error});
    }
});

module.exports=router;