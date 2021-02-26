const mongoose=require('./connect');

const user={
    name:String,
    password:String,
    email:String,
    cursos:[{
        nombre:String
    }]
};

const modeluser=mongoose.model('user',user);

module.exports=modeluser;