const mongoose = require("mongoose");
const validator = require('validator');
//unique :[true , ' email repeat'],
// validate(value){
//     if(validator.isEmail(value)){
//         throw new Error("invalid email")
//     }
// }
const addressSchema = new mongoose.Schema({
    street: {
      type: String, 
      required: true 
    },
    suite: { 
      type: String, 
      required: true 
    },
    city: { 
      type: String, 
      required: true 
    },
    zipcode: { 
      type: String, 
      required: true 
    },
    geo: {
      lat: { 
        type: String, 
        required: true 
      },
      lng: { 
        type: String, 
        required: true 
      },
    },
  });
  
  const companySchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    catchPhrase: { 
      type: String, 
      required: true 
    },
    bs: { 
      type: String, 
      required: true 
    },
  });
  
  const userSchema = new mongoose.Schema({
    id: { 
      type: Number, 
      required: true 
    },
    name: { 
      type: String, 
      required: true 
    },
    username: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    address: { 
      type: addressSchema, 
      required: true 
    },
    phone: { 
      type: String, 
      required: true 
    },
    website: { 
      type: String, 
      required: true 
    },
    company: { 
      type: companySchema, 
      required: true 
    },
  });
  
  const User = mongoose.model('User', userSchema);

  // userSchema.post('save',function(doc){
  //   console.log('new user added',doc);
  // })

  module.exports = User;