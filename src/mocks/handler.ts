import { rest } from 'msw';

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    return res(
      ctx.json({
        authToken: '.........',
        refreshToken: '...........',
        expiresAt: '',
      })
    );
  }),
  rest.post('/api/signup', (req, res, ctx) => {
    return res(
      ctx.json({
        authToken: '.........',
        refreshToken: '...........',
        expiresAt: '',
      })
    );
  }),
];
