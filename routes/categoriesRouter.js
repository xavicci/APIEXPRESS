app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json([{ categoryId, productId, name: 'Product ACS', price: 1000 }]);
});
