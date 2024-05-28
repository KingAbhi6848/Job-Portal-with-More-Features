import { v4 as uuidv4 } from "uuid";

export const lastVisit = (req, res, next) => {
  if (!req.cookies.uniqueId) {
    // Generate a new UUID if uniqueId is not found in cookies
    const uniqueId = uuidv4();
    // Set the new UUID as a cookie with a 15-minute expiry and httpOnly flag
    res.cookie('uniqueId', uniqueId, { maxAge: 900000, httpOnly: true });
    // Ensure the uniqueId is available in req.cookies
    req.cookies.uniqueId = uniqueId;
  }
  // Proceed to the next middleware or route handler
  next();
};

export const lastVisit2 = (req, res, next) => {
  if (!req.cookies.uniqueId) {
    // Generate a new UUID if uniqueId is not found in cookies
    const uniqueId = uuidv4();
    // Set the new UUID as a cookie with a 15-minute expiry and httpOnly flag
    res.cookie('uniqueId', uniqueId, { maxAge: 900000, httpOnly: true });
    // Ensure the uniqueId is available in req.cookies
    req.cookies.uniqueId = uniqueId;
  }
  // Proceed to the next middleware or route handler
  next();
};
