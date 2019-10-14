module.exports = {
    development: {
        port : process.env.PORT || 3000,
        dbPath: process.env.MONGODB_URI || 'mongodb://localhost:27017/car-renting-data'
        
    },
    production :{         
        port : process.env.PORT || 3000,
        dbPath: process.env.MONGODB_URI || 'mongodb://localhost:27017/car-renting-data'
}
};