import { RequestHandler } from 'express';
import UserService from '@services/UserService';
import { BadRequestException } from '@libs/errors';

const index: RequestHandler = async (req, res) => {
  const users = await UserService.list();

  res.json({ success: true, users });
};

const create: RequestHandler = async (req, res) => {
  try {
    const user = await UserService.create(req.body);

    res.json({ success: true, user });
  } catch (error) {
    throw new BadRequestException(error.meta.target);
  }
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing User' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting User', params: req.params });
};

export default { index, create, edit, destroy };
