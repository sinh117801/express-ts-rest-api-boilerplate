import PostService from '@services/PostService';
import { RequestHandler } from 'express';

const index: RequestHandler = async (req, res) => {
  const posts = await PostService.list();

  res.json({ success: true, posts });
};

const create: RequestHandler = async (req, res) => {
  const post = await PostService.create(req.body);
  res.json({ success: true, post });
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing Post' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting Post', params: req.params });
};

export default { index, create, edit, destroy };
