/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://GymAdmin:Sandy4888@gym.8i0oneq.mongodb.net/MembersDatabase?retryWrites=true&w=majority",
    BASE_URL: "http://localhost:3000",
  }
}
