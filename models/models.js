const sequelize = require('../db')
const {Sequelize, DataTypes} = require('sequelize')
const User = sequelize.define('users',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tn:{type:DataTypes.STRING,unique:true},
    name:{type:DataTypes.TEXT},
    login:{type:DataTypes.STRING,unique:true},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    avatar:{type:DataTypes.TEXT},
    admin:{type:DataTypes.BOOLEAN,defaultValue: false},
    checked:{type:DataTypes.BOOLEAN,defaultValue: false},
    phone:{type:DataTypes.STRING},
    unit:{type:DataTypes.INTEGER},
    developer_id:{type:DataTypes.INTEGER,allowNull:true}
})
const Token = sequelize.define('token',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    device_token:{type:DataTypes.TEXT},
    refresh_token:{type:DataTypes.TEXT,require:true}
})

const News = sequelize.define('news',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.TEXT},
    desc:{type:DataTypes.TEXT},
    image:{type:DataTypes.TEXT}
})


module.exports = {
    User,Token,News
}