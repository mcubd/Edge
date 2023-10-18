module.exports = (req, res) => {
  res.setHeader('X-My-Header', 'Hello from the edge!');
  return res.send('Hello from the edge!');
};
