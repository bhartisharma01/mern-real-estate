import express from 'express';
import {  deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const routes = express.Router();
routes.get('/test',test)
routes.post('/update/:id',verifyToken, updateUser);
 routes.delete('/delete/:id',verifyToken, deleteUser);

export default routes;