const express = require('express');
const userRouter = express.Router();
const {UserModel} = require('../model/user.route');

userRouter.post('/post', async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user).send({"msg":"Post data successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

userRouter.get('/get', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.delete('/delete/:id', async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRouter.get('/filter', async (req, res) => {
    const { destination } = req.query;
    try {
      const filteredUsers = await UserModel.find({ destination });
      res.json(filteredUsers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  userRouter.get('/sort', async (req, res) => {
    const { sortBy } = req.query;
    const sortOptions = {
      budget: sortBy === 'asc' ? 1 : -1
    };
    try {
      const sortedUsers = await UserModel.find().sort(sortOptions);
      res.json(sortedUsers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = {userRouter};
