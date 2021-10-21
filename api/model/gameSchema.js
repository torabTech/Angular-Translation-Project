const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const gameSchema = mongoose.Schema({
    title: {
        type:String,
        minlength: 3,
        maxlength: 100,
        required: [true, 'title is required']
    },
    year:{
        type:String,
        required: [true,'year is required']
    },
    rate:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        default:10
    },
    minPlayers:{
        type:Number,
        default:1
    },
    maxPlayers:{
        type:Number,
        default:4
    },
    designers:{
        type:String,
        default: 'MIU Devs'
    }
    
    
});


const registerationSchema = mongoose.Schema({
    name : {
        type:String,
        minlength:3,
        maxlength:50,
        required: [true,'name required']
    },
    username : {
        type: String,
        required: [true,'username required']
    },
    password: {
        type: String,
        required: [true,'password is required']
    }
});

registerationSchema.post('save',function(doc,next){
    console.log('post registeration: ',doc);
    next();
});

registerationSchema.pre('save',async function(next){
    console.log('user pre registeration: ',this);

   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password,salt); 
   
   next();
});



mongoose.model('Game',gameSchema,'games');
mongoose.model('User',registerationSchema,'users');
