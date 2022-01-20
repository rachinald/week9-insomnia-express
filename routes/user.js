const router = require("express").Router();
const User = require("../models/user");

// get all users
router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json({ msg: "Got all users", data: allUsers });
});

// create a user
router.post("/", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    password: req.body.password,
  });
  res.status(200).json({ msg: "User Created.", data: user });
});

// delete all users
router.delete("/", async (req, res) => {
  const destroyUser = await User.destroy({
    truncate: true,
  });
  console.log(destroyUser);
  res.status(200).json({ msg: "Deleted all users" });
});

// get a single user
router.get("/:id", async (req, res) => {
  console.log(req);
  const oneUser = await User.findOne({ where: { id: req.params.id } });
  res.status(200).json({ msg: "Found a single user by id.", data: oneUser });
});

// update a single user
router.put("/:id", async (req, res) => {
  const updatedUser = await User.update(
    { name: req.body.name },
    {
      where: { id: req.params.id },
    }
  );
  res.status(200).json({ msg: "Updated name", data: updatedUser });
});

// delete a single user
router.delete("/:id", async (req, res) => {
  await User.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({ msg: "worked" });
});

module.exports = router;
