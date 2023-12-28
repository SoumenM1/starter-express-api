const User = require('../models/user');

class UserController {
  async searchByName(req, res) {
    const { name } = req.query;
    try {
      const users = await User.find({ name });
      if(users.length === 0) return res.status(404).json({msg:"data not found"})
      res.json(users).status(200);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async sortByAge(req, res) {
    const { order } = req.query;
    try {
      const users = await User.find().sort({ age: order === 'asc' ? 1 : -1 });
      if(users.length === 0) return res.status(404).json({msg:"data not found"})
      res.json(users).status(200);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async paginateUsers(req, res) {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    try {
      const users = await User.find().skip(skip).limit(parseInt(limit));
      if(users.length === 0) return res.status(404).json({msg:"data not found"})
      res.json(users).status(200);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
