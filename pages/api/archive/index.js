export default async (req, res) => {
  return res.status(400).json({ success: false, error: "API [Index] doesn't expect requests for now!" })
}