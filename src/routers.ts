import AuthController from '@controllers/AuthController';
import PingController from '@controllers/PingController';
import PostsController from '@controllers/PostsController';
import UsersController from '@controllers/UsersController';
import { NotFoundException } from '@libs/errors';
import { AsyncRouter } from 'express-async-router';
import { isAuth } from '@libs/is-auth';
import { Request, Response } from 'express';

export const router = AsyncRouter();

// Server Health Check
router.get('/ping', PingController.ping);

// AuthController Routers
router.post('/auth/login', AuthController.login);

// UsersController Routers
router.get('/users', isAuth, UsersController.index);
router.post('/users', isAuth, UsersController.create);
router.put('/users/:userId', isAuth, UsersController.edit);
router.delete('/users/:userId', isAuth, UsersController.destroy);

// PostsController Routers
router.get('/posts', isAuth, PostsController.index);
router.post('/posts', isAuth, PostsController.create);
router.put('/posts/:postId', isAuth, PostsController.edit);
router.delete('/posts/:postId', isAuth, PostsController.destroy);

// 404 Route Not Found
router.all('*', (req: Request, res: Response) => {
  throw new NotFoundException(
    `${req.method} ${req.url} endpoint does not exist`,
  );
});
