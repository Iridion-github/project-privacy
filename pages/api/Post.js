// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function postHandler(req, res) {
  //console.log("POST | postHandler - req.body: ", req.body)
  const data = { extra: "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||" }
  res.redirect("../contatti", { data })
}