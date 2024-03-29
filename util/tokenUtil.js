import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });
  console.log(token);
  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  return decoded;
};
