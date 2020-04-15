const dotenv=require('dotenv')
dotenv.config()
const mongodb=require('mongodb')




mongodb.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true},function(err,clint){
    module.exports = clint
    const app= require('./app')
    app.listen(process.env.PORT)
})