// Redis Database Connection
const redis = require("redis");
const dotenv = require("dotenv")

dotenv.config();

 
 
const host = process.env.REDIS_HOST  
const port = process.env.REDIS_PORT  
const root = process.env.REDIS_PASSWORD
const url = process.env.REDIS_URL
const user = process.env.REDIS_USER


 
const redisClient = redis.createClient({
    port, 
    host,
    root,
    url,
    user

});

redisClient.on("error", (err) => {
    
    process.exit(1);
})

redisClient.on("connect", () => {
   
})

module.exports = redisClient;