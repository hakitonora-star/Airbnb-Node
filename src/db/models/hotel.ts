import {Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "./sequelize";
/*
Step 1: Imagine you have a hotel
Your hotel has three properties:
id = 1;
name = "Taj Hotel";
address = "Delhi";


These are the details of your hotel.
Now, remember this: A hotel has details, but creating a new hotel may require only some of those details.
Step 2: Creating a hotel
Suppose you want to add a hotel to MySQL.
await Hotel.create({
  name: "Taj Hotel",
  address: "Delhi"
});


You provide the name and address. The database generates the ID automatically.
So, the data you provide when creating a hotel is different from the complete data of the hotel afterward.
Step 3: Now understand the two names
Look at the first one:
InferAttributes<Hotel>
It means: Look at my Hotel class and figure out what details a hotel has.
For example: id, name, and address.
Now the second one:
InferCreationAttributes<Hotel>
It means: Look at my Hotel class and figure out what details are needed when creating a hotel.
For example: name and address, while id can be omitted if it is marked as optional for creation.
Step 4: Why do we write both?
class Hotel extends Model<
  InferAttributes<Hotel>,
  InferCreationAttributes<Hotel>
> {
  // hotel properties
}


We're telling Sequelize's TypeScript types two things:
1. What details a hotel has.
2. What details are needed to create a hotel.
*/
class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
    declare id:CreationOptional<number>;
    declare name:string;
    declare location:string;
    declare createdAt:CreationOptional<Date>;
    declare updatedAt:CreationOptional<Date>;
    declare rating:number;
    declare Price:number;



}
// neeche line ka mtlab ki ye jo hmne puri class bnayi hai ye kiss table se map hoga konsa database ka table aur each property of class table ke kis column se match hoga

export default Hotel;
Hotel.init({
  id:{
    type:"INTEGER",
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
  },
  name:{
    type:"STRING",
    allowNull:false
  },
    location:{
      type:"STRING",
      allowNull:false,
    },
  createdAt:{
    type:"DATE",
    defaultValue:new Date(),
  },
  updatedAt:{
    type:"DATE",
    defaultValue:new Date(),
  },
rating: {
  type: "FLOAT",
  defaultValue: null
},
  Price:{
    type:"INTEGER",
    allowNull:false
  }

  

},{
  tableName:"hotels",
  sequelize:sequelize,
  underscored:false, //createdAt-->created_AT;
  timestamps:true ,// created at and updated at

}) 