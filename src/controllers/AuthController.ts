import { RequestHandler } from 'express';

import AuthService from '@services/AuthService';

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const posts = await AuthService.login({ email, password });

  res.json({ success: true, posts });
};

export default { login };
