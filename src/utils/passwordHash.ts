import argon2 from "argon2";

export const hashPassword = async (password: string) => {
  try {
    const hash = await argon2.hash(password);
    console.log("Hashed Password:", hash);
    return hash;
  } catch (err) {
    console.error("Error hashing password:", err);
  }
};

export async function checkPassword(
  hashFromDatabase: string,
  submittedPassword: string
) {
  try {
    const match = await argon2.verify(hashFromDatabase, submittedPassword);
    return match;
  } catch (error) {
    // A common mistake is to not handle errors. A malformed hash
    // can throw an exception, leading to unexpected behavior if unhandled.
    console.error("Error during password verification:", error);
    return false; // Treat verification failure as incorrect
  }
}
