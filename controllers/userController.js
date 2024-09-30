const { User, Address } = require('../models');

const registerUser = async (req, res) => {
  const { name, address } = req.body;

  try {
    const user = await User.create({ name });
    await Address.create({ address, userId: user.id });
    res.status(201).send('User and Address registered successfully');
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
};

module.exports = { registerUser };
