import passport from "passport";

//authenticate jwt token
export const authenticateJwt = passport.authenticate("jwt", { session: false });

//handle role-based auth
export const authorize = (role = []) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};
