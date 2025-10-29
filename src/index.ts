import { prisma } from "./lib/prisma-client.js";

import Express from "express";
import type { Request, Response, NextFunction } from "express";
import type { User } from "./utils/type.ts";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { generateToken } from "./utils/tokenVerify.js";
import { checkPassword, hashPassword } from "./utils/passwordHash.js";
import { errorHandler } from "./middleware/error.js";
import { limiter } from "./middleware/rateLimit.js";
import { speedLimiter } from "./middleware/slowDown.js";

//MIddleware
import { authMiddleware } from "./middleware/user.js";
//Routes
import { TournamentRoute } from "./routes/tournament.js";
import { router as ProfileRoute } from "./routes/user-profile.js";

const app = Express();
// const prisma = new PrismaClient();
//middleware to limit the no of req
app.use(limiter);

//Middleware to delay the res send after each req
app.use(speedLimiter);

//middleware to parse the cookie
app.use(cookieParser());
//middle to the parese the req data
app.use(Express.json());

//Auth middleware
// app.use(authMiddleware);

// Routes for Profile
app.use("/profile", ProfileRoute);
//Routes for the Tournament

app.use("/tournament", TournamentRoute);

app.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  console.log("Body", body);
  res.status(200).send({ hello: body });
});

app.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, email }: User = req.body;
  if (
    username == null ||
    email == null ||
    username.length! <= 2 ||
    email.length! <= 2 ||
    password.length <= 3
  ) {
    console.log("Invalid user details fill the details correctly");
    // Send a 400 Bad Request status for invalid input
    return res
      .status(400)
      .json("Invalid user details fill the details correctly");
  }

  try {
    // 1. CHECK IF USER ALREADY EXISTS
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
    });

    // 2. IF USER IS FOUND, SEND AN ERROR
    if (existingUser) {
      // 409 Conflict is the correct status code for a duplicate
      return res.status(409).json({
        message: "User with this username or email already exists",
      });
    }

    // 3. IF NO USER IS FOUND, HASH PASSWORD AND CREATE
    const hash_password = await hashPassword(password);

    if (hash_password) {
      await prisma.user.create({
        data: {
          username,
          password: hash_password,
          email,
        },
      });
      // 201 Created is the correct status code for successful creation
      res.status(201).send({ message: "User created successfully" });
    } else {
      // Handle case where hashing might fail
      throw new Error("Password hashing failed");
    }
  } catch (error) {
    console.error("Error in signup", error);
    // Pass the error to your global error handler
    next(error);
  }
});

app.post("/signin", async (req, res, next) => {
  const { username, email, password } = req.body;

  console.log(email);
  console.log("password", password);
  if (
    // username == null ||
    // email == null ||
    // username.length! <= 2 ||
    // email.length! <= 2 ||
    password.length <= 2
  ) {
    console.log("invalid detail of the user");
    res.status(500).json("Invalid user details give the correct details");
    return;
  }

  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log("🚀 -------------------------🚀");
    console.log("🚀 ~ foundUser:", foundUser);
    console.log("🚀 -------------------------🚀");

    if (foundUser) {
      const passwordVerify = await checkPassword(foundUser.password, password);

      if (!passwordVerify)
        res.status(404).json({ message: "Password is incorrect" });

      const accessToken = generateToken({
        data: { data: username || email },
        secret: "sodjfasdfsfsfsf",
        time: 10 * 60 * 1000,
      });
      console.log("🚀 -----------------------------🚀");
      console.log("🚀 ~ accessToken:", accessToken);
      console.log("🚀 -----------------------------🚀");

      const refreshToken = generateToken({
        data: { data: foundUser?.id },
        secret: "sodjfasdfsfsfsf",
        time: 7 * 24 * 60 * 60 * 1000,
      });
      console.log("🚀 -------------------------------🚀");
      console.log("🚀 ~ refreshToken:", refreshToken);
      console.log("🚀 -------------------------------🚀");

      console.log("Accesstoken", accessToken);
      // CREATING THE ACCESSTOKEN

      res
        .cookie("accessToken", accessToken, {
          sameSite: true,
          httpOnly: true,
          maxAge: 8 * 60 * 100,
          secure: true,
        })
        .cookie("refreshToken", refreshToken, {
          sameSite: true,
          httpOnly: true,
          maxAge: 10 * 1000,
          path: "/api/refresh",
          secure: true,
        })
        .json({ message: "send the token", status: "signin complete" });
    }
  } catch (error) {
    console.error("error finding the user", error);
    // res.status(404).send("no user is present here");
    next(error);
  }
  // res.status(200).send("send the token");
});

app.get("/auth", async (req, res) => {
  const token = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (token) {
    const check = jwt.verify(token, "sodjfasdfsfsfsf");
    console.log(check);
    res.status(200).send("access");
  }
  if (refreshToken) {
    const checkRefresh = jwt.verify(refreshToken, "sodjfasdfsfsfsf");
    console.log("checkRefe resf", checkRefresh);
    res.status(200).send("refresh");
  }
  res.status(404).send("notverify");
});

app.use(errorHandler);

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
