import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.get('/', (req, res) => {
  res.send('Proxy server is running');
});


app.use('/api', createProxyMiddleware({
  target: 'http://api.codespade.com:4517',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/codespade/api/bahasa-daerah',
  },
  secure: false,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
