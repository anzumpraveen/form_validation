const knex=require('knex')({
    client: "mysql",
    connection:{
        host : "localhost",
        user : "root",
        password : "Praveen@123",
        database: "customer_detail"
        
    }
})
knex.schema.hasTable("user",(table)=>{
    table.increments("id")
    table.string('name')
    table.string('email')
    table.string('password')
    table.string('confirmpassword')
    table.string('phoneNumber')

}).then ((data)=>{
    console.log('table created')
}).catch ((err)=>{
    console.log(err.message,"oooo")
})
module.exports=knex