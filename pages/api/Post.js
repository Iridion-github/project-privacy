// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function postHandler(req, res) {
  const data = { extra: "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||" }
  res.redirect("../contatti", { data })
}