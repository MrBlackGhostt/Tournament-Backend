import { PrismaClient } from "./generated/prisma/client.js";
import Express from "express";
import type { Request, Response } from "express";
import type { User } from "./utils/type.ts";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { unwatchFile } from "fs";

const app = Express();
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "Test",
      password: "Test",
      email: "test@test.com",
    },
  });
}

app.use(cookieParser());
app.use(Express.json());

app.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  console.log("Body", body);
  res.status(200).send({ hello: body });
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password, email }: User = req.body;
  const check = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  console.log("CHeck ", check);
  try {
    await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    res.status(200).send({ message: "user create successfull" });
  } catch (error) {
    console.error("Error", error);
    res.status(404).send({
      message: "registration unsuccessfull",
    });
  }
});

app.get("/signin", async (req, res) => {
  const { username, email } = req.body;
  console.log(username);
  console.log(email);
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        username,
        email,
      },
    });

    console.log("check", foundUser);

    const accessToken = await jwt.sign(
      { data: username || email },
      "sodjfasdfsfsfsf"
    );

    const refreshToken = await jwt.sign(
      {
        data: foundUser?.id,
      },
      "sodjfasdfsfsfsf"
    );

    console.log("token", accessToken);
    // CREATING THE ACCESSTOKEN

    res.cookie("accessToken", accessToken, {
      sameSite: true,
      httpOnly: true,
      maxAge: 10 * 60 * 100,

      secure: true,
    });
    res.cookie("refreshToken", refreshToken, {
      sameSite: true,
      httpOnly: true,
      maxAge: 10 * 1000,
      path: "/api/refresh",
      secure: true,
    });
  } catch (error) {
    console.error("error finding the user", error);
    res.status(404).send("no user is present here");
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

app.listen("3000", () => {
  console.log("Listening on port 3000");
});

// main();
