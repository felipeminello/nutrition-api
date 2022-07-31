import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT as string,
  mongoUrl: process.env.MONGO_URL as string,
}
