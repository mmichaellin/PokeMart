require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// Later need to add express middleware to handle cookies (JWT) and populate current user
server.express.use(cookieParser());
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(
      `Server is now running on port http:/localhost:${details.port}`
    );
  }
);
