import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import User from './models/profileModels/userModel/user';

export const generateToken = (userId) => {
  return jwt.sign({ userId }, 'secret_key');
};

export const verifyToken = (token) => {
  return jwt.verify(token, 'secret_key');
};

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
