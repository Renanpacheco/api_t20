const mongoose = require('mongoose');

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/t20sheets");
    console.log("Connect!");
}
main().catch((err) => console.log(err))

module.exports = mongoose