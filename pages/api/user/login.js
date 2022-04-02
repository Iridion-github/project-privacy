import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcrypt";

dbConnect();

export default async (req, res) => {
  try {
    const userEmail = req.query.email;
    const inputPassword = req.query.password;
    const resultUsers = await User.find({ "email.registration": userEmail });
    const targetUser = resultUsers[0];
    if (resultUsers.length > 0) {
      const userPassword = targetUser.password;

      function compareAsync(param1, param2) {
        return new Promise(function (resolve, reject) {
          bcrypt.compare(param1, param2, function (err, res) {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      }

      const correctPassword = await compareAsync(inputPassword, userPassword);
      if (correctPassword) {
        return res.status(201).json({ success: true, data: { user: targetUser } });
      } else {
        return res.status(400).json({ success: false, data: { error: "wrongCredentials" } });
      }
    } else {
      return res.status(400).json({ success: false, data: { error: "wrongCredentials" } });
    }
  } catch (err) {
    console.log("registerUser error:", err);
    return res.status(400).json({ success: false, error: err });
  }
};
