const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
let items = [];
let idCounter = 1;
app.post('/items', (req, res) => {
  const { name } = req.body;
  const newItem = { id: idCounter++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});
app.get('/items', (req, res) => {
  res.json(items);
});
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  item.name = req.body.name || item.name;
  res.json(item);
});
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
