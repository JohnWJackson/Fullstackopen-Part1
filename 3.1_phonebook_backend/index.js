const express = require('express')
const app = express()

app.use(express.json());

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Phonebook!</h1>');
})

app.get('/info', (request, response) => {
  response.send(`Phonebook has info for ${notes.length} people`
  + '<br/>' + `${Date()}`);
})

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(p => p.id !== id)

  response.status(202).end();
})

const generateID = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0;
  return maxId + 1;
}

app.post('/api/persons', (request, response) => {
  const person = request.body;

  if (!person.name) {
    return response.status(400).json({
      error: 'content missing'
    });
  }
  const personObject = {
    id: generateID(),
    name: person.name,
    number: person.number,
  }

  persons = persons.concat(personObject);

  response.json(personObject);
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})