import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import admins from "../data/admins.json" with { type: "json" };
import faculties from "../data/faculties.json" with { type: "json" };
import students from "../data/students.json" with { type: "json" };

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
  new JwtStrategy(opts, (payload, done) => {
    const { id, role } = payload;
    let user;

    if (role === "admin") user = admins.find((a) => a.id === id);
    else if (role === "faculty") user = faculties.find((f) => f.id === id);
    else if (role === "student") user = students.find((s) => s.id === id);

    if (user)
      done(null, user); // attaches full user to req.user
    else done(null, false);
  }),
);

export default passport;
