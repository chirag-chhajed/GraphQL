const {connect,set} = require('mongoose')

const connectDb = async() => {
    const conn = await connect(process.env.MONGO_URI)
    

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDb