import { PrismaClient } from "./generated/prisma/client.js";
import Express from "express";
import type { Request, Response } from "express";
import type { User } from "./utils/type.ts";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { generateToken } from "./utils/tokenVerify.js";
import { checkPassword, hashPassword } from "./utils/passwordHash.js";
import { errorHandler } from "./middleware/error.js";
const app = Express();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use(Express.json());

app.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  console.log("Body", body);
  res.status(200).send({ hello: body });
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password, email }: User = req.body;
  if (
    username == null ||
    email == null ||
    username.length! <= 2 ||
    email.length! <= 2 ||
    password.length <= 3
  ) {
    console.log("Invalid user details fill the details correctly");
    res.status(500).json("Invalid user details fill the details correctly");
    return;
  }
  //Earlier use the findUnique but problem is that we can not put the two field as the user and email both are unique so need to check both the value for the user to be unique it check for  want OR. you would need to add OR inside
  const userFound = await prisma.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });
  if (userFound)
    res.status(500).json({
      message: "user with the username or email already created",
    });
  try {
    const hash_password = await hashPassword(password);

    if (hash_password) {
      await prisma.user.create({
        data: {
          username,
          password: hash_password,
          email,
        },
      });
      res.status(200).send({ message: "user create successfull" });
    }
  } catch (error) {
    console.error("Error", error);
    res.status(404).send({
      message: "registration unsuccessfull",
      error: "Email or username used already",
    });
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
    const foundUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (foundUser) {
      const passwordVerify = await checkPassword(foundUser.password, password);

      if (!passwordVerify)
        res.status(404).json({ message: "Password is incorrect" });

      const accessToken = generateToken({
        data: { data: username || email },
        secret: "sodjfasdfsfsfsf",
        time: 10 * 60 * 1000,
      });

      const refreshToken = generateToken({
        data: { data: foundUser?.id },
        secret: "sodjfasdfsfsfsf",
        time: 7 * 24 * 60 * 60 * 1000,
      });

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
  res.status(200).send("send the token");
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
