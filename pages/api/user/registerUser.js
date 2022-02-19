import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcrypt";

dbConnect();

export default async (req, res) => {
  try {
    const userEmail = req.query.email;
    const password = req.query.password;
    const saltRounds = 10;
    //console.log(`REGISTERING USER WHOSE MAIL IS: ${userEmail} AND PASS IS: ${password}`);

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (hashedPassword) {
      //console.log("HASHED PASS:", hashedPassword);
      const newUserData = {
        email: { registration: userEmail },
        password: hashedPassword,
      };
      User.create(newUserData);
      return res.status(200).json({ success: true, data: { newUser: newUserData } });
    } else {
      console.log(`Error generating hashed password for user whose email is:${userEmail}`);
      return res.status(400).json({ success: false, error: err });
    }
  } catch (err) {
    console.log("registerUser error:", err);
    return res.status(400).json({ success: false, error: err });
  }
};
