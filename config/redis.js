const redis = require("redis");
const dotenv = require("dotenv")

dotenv.config();

 
// const host = process.env.REDIS_HOST || "localhost"
// const port = process.env.REDIS_PORT || "localhost"

const host = process.env.REDIS_HOST  
const port = process.env.REDIS_PORT  
const root = process.env.REDIS_PASSWORD
const url = process.env.REDIS_URL
const user = process.env.REDIS_USER


// const redisClient = redis.createClient({port: 6379, 
//     host,
// });
const redisClient = redis.createClient({
    port, 
    host,
    root,
    url,
    user

});

redisClient.on("error", (err) => {
    console.log(err)
    process.exit(1);
})

redisClient.on("connect", () => {
    console.log("Connected to Redis...")
})

module.exports = redisClient;