
const prisma = require('../db');

// Create user
async function createUser(data) {
  return await prisma.user.create({
    data,
  });
}

// Get all users
async function getUsers() {
  return await prisma.user.findMany();
}

// Get user by ID
async function getUserById(id) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

// Update user
async function updateUser(id, data) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

// Delete user
async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id },
  });
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
