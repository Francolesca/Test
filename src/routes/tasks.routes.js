const { Router } = require('express');
const router = Router();
const {getAllTasks, createTask, patchTask, deleteTask} = require('../controllers/tasks.controller');
const {authLogin} = require('../controllers/auth.controller');
const {authenticateJWT} = require('../middlewares/auth.middleware');

router.get('/api/tasks', authenticateJWT, getAllTasks);

router.post('/api/tasks', authenticateJWT, createTask);

router.patch('/api/tasks/:id', authenticateJWT, patchTask);

router.delete('/api/tasks/:id', authenticateJWT, deleteTask);

router.post('/api/auth/login', authLogin);

module.exports = router;