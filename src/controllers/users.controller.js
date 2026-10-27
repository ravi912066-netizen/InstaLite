
const userService = require('../services/user.service');

// POST /users
async function createUser(req, res) {
  try {
    const { username, email, fullname, bio } = req.body;

    if (!username || !email || !fullname) {
      return res.status(400).json({
        error: 'username, email and fullname are required',
      });
    }

    const user = await userService.createUser({
      username,
      email,
      fullname,
      bio,
    });

    return res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        error: 'username or email already taken',
      });
    }

    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

// GET /users
async function getUsers(req, res) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

// GET /users/:id
async function getUserById(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

// PATCH /users/:id
async function updateUser(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const { username, email, fullname, bio } = req.body;
    const updates = {};

    if (username !== undefined) updates.username = username;
    if (email !== undefined) updates.email = email;
    if (fullname !== undefined) updates.fullname = fullname;
    if (bio !== undefined) updates.bio = bio;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        error: 'At least one valid field is required',
      });
    }

    if (
      (updates.username !== undefined &&
        (typeof updates.username !== 'string' ||
          !updates.username.trim())) ||
      (updates.email !== undefined &&
        (typeof updates.email !== 'string' ||
          !updates.email.trim())) ||
      (updates.fullname !== undefined &&
        (typeof updates.fullname !== 'string' ||
          !updates.fullname.trim()))
    ) {
      return res.status(400).json({
        error: 'username, email and fullname must be non-empty strings',
      });
    }

    const user = await userService.updateUser(id, updates);

    return res.status(200).json(user);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    if (error.code === 'P2002') {
      return res.status(409).json({
        error: 'username or email already taken',
      });
    }

    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

// DELETE /users/:id
async function deleteUser(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    await userService.deleteUser(id);

    return res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    console.error(error);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
