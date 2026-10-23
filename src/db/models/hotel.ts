
import { CreationOptional, InferAttributes, InferCreationAttributes, Model, } from "sequelize";
import sequelize from "./sequelize";
/*
Both InferAttributes<Hotel> and InferCreationAttributes<Hotel> include attributes that may be required or optional. The difference is what they describe.
class Hotel extends Model<
    InferAttributes<Hotel>,
    InferCreationAttributes<Hotel>
> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare location: string;
}


1. InferAttributes<Hotel>
Describes the attributes of an existing hotel instance.

For example:
{
    id: 1,
    name: "Taj Hotel",
    location: "Delhi"
}


2. InferCreationAttributes<Hotel>
Describes the attributes when creating a new hotel.
await Hotel.create({
    name: "Taj Hotel",
    location: "Delhi"
});


Here, you can omit id because it is declared as CreationOptional<number>.*/ 
class Hotel extends Model <InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
// all varibale name same as database table
    declare id:CreationOptional<number>;
    declare name:String;
    declare address:string;
    declare location :string;
    declare createdAt:CreationOptional<number>;
    declare updatedAt:CreationOptional<number>;
    declare rating:number;
    declare rating_count:number;

}

//  this is use to connect  code to real database

Hotel.init({
    id:{
        type:"INTEGER",
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        type:"STRING",
        allowNull:false,
    },

    address:{
        type:"STRING",
        allowNull:false,
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
    allowNull: true,
    defaultValue: null,
},

rating_count: {
    type: "INTEGER",
    allowNull: true,
    defaultValue: null,
},



},{
    tableName:"hotels",
    sequelize:sequelize,
    underscored:false, // convert createdAt to created_at
    timestamps:true
});

export default Hotel;
