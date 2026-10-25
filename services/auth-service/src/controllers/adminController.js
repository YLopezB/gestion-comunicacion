export const isAdmincontroller = (req, res) => {
  res.status(200).json({
    isAdmin: req.isAdmin,
  });
};
