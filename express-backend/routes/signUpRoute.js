const router = require("express").Router();
const User = require("../model/User");
const Vehicle = require("../model/Application");

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { username, firstName, lastName, email, password } = req.body;
  },
};
