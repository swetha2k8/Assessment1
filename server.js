const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let todos = [];
let nextId = 1;


// All tasks paaka
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Puthu task add panna
app.post('/todos', (req, res) => {
  const todo = { id: nextId++, title: req.body.title, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// Task done/undone maatha
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  todo.done = req.body.done;
  res.json(todo);
});

// Task delete panna
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
app.use(express.json());
app.use(express.static('public'));
