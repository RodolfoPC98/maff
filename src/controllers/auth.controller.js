import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const renderSignUp = (req, res) => res.render("auth/signup");

export const signUp = async (req, res, next) => {
  const { name, email, nick, last_name, mothers_last_name, federal_entity, municipality, city, address, birthdate, cell_phone, password1 } = req.body;

  const password = await encryptPassword(password1);

  // Saving in the Database
  const [result] = await pool.query("INSERT INTO users SET ? ", {
    name,
    email,
    nick, 
    last_name, 
    mothers_last_name, 
    federal_entity, 
    municipality, 
    city, 
    address, 
    birthdate, 
    cell_phone,
    password,
  });

  req.login(
    {
      id: result.insertId,
      name,
      email,
    },
    (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/games");
    }
  );
};

export const renderSignIn = (req, res) => {
  res.render("auth/signin");
};

export const signIn = passport.authenticate("local.signin", {
  successRedirect: "/games",
  failureRedirect: "/signin",
  passReqToCallback: true,
  failureFlash: true,
});

export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
};
