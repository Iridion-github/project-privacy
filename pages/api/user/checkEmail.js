import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        const orderedUsers = users.sort((a, b) => {
          return a.email.registration - b.email.registration;
        });

        return res.status(200).json({ success: true, data: orderedUsers });
      } catch (err) {
        return res.status(400).json({ success: false, error: err });
      }

    case "POST":
      try {
        const inputEmail = req.query.email;
        console.log("BACKEND - checkEmail is checking this email:", inputEmail);
        const resultUsers = await User.find({ "email.registration": inputEmail });
        if (resultUsers.length > 0) {
          console.log("Trovato qualcosa:", resultUsers);
          return res.status(201).json({ success: true, data: { canRegister: false } });
        } else {
          console.log("Email non usata da nessun user del db");
          return res.status(201).json({ success: true, data: { canRegister: true } });
        }
        //const newUserData = { prova: "prova" };
        //const newUser = await User.create(newUserData);
      } catch (err) {
        return res.status(400).json({ success: false, error: err });
      }

    default:
      return res.status(400).json({ success: false, error: "Unexpected case!" });
  }
};
