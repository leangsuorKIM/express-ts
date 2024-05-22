import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controller/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/user/delete/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/user/update/:id', isAuthenticated, isOwner, updateUser);
}