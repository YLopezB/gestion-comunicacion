export const meController = (req, res) => {
  res.status(200).json({
    authenticated: true,
    user_id: req.userId,
  });
};
