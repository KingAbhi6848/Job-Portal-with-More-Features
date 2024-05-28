import { v4 as uuidv4 } from "uuid";

export const lastVisit = (req, res, next) => {
  if (!req.cookies.uniqueId) {
    const uniqueId = uuidv4();
    res.cookie('uniqueId', uniqueId, { maxAge: 900000, httpOnly: true });
    req.cookies.uniqueId = uniqueId; // Correctly setting the uniqueId in req.cookies
  }
  next();
};
export const lastVisit2 = (req, res, next) => {
  if (!req.cookies.uniqueId) {
    const uniqueId = uuidv4();
    res.cookie('uniqueId', uniqueId, { maxAge: 900000, httpOnly: true });
    req.cookies.uniqueId = uniqueId; // Correctly setting the uniqueId in req.cookies
  }
  next();
};
