const mongo=require('mongoose')

const favsSchema=new mongo.Schema({
  user:String,
  id:String,
  image:String,
  title:String,
  readyInMinutes:String,
  servings:String,
  veg:Boolean,
  summary:String,
  extendedIngredients:mongo.SchemaTypes.Mixed,
  nutrition:mongo.SchemaTypes.Mixed,
  analyzedInstructions:mongo.SchemaTypes.Mixed
})


const UserSchema = new mongo.Schema({
    name:String,
    email:String,
    password:String,
    cals:{type:Number,
      default:0
    },
    cusine:{type:String,
      default:""
    },
    favs:[favsSchema],
    meals:[],
    intols:[],
})
const crypt = require('bcrypt');
async function encrypt(password) {
    const hash = await crypt.hash(password, 10);
    return hash;
  }
//this part of the code in encrypting and saving the password in the database
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      const hashedPassword = await encrypt(this.password);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

const UserModel = mongo.model("user",UserSchema)
module.exports=UserModel