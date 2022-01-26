const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', (request, response) => {
  response.send(`
  <h1>
    Oh hi!
  </h1>
  <p>I'm glad you could make it today</p>
  `);

  // Later:
  // response.render('index');
  // response.json();
});

`/users/mango`
app.get('/users/:id', (request, response) => {
  console.log(request.params.id);
});

app.post('/users/:id', (request, response) => {
  console.log(request.params.id);
});



const stores = {
  'thebay': {
    id: 'thebay',
    name: 'The Bay',
    address: '1234 Water St.',
  },
  'ikea': {
    id: 'ikea',
    name: 'IKEA',
    address: '5678 Sweden St.',
  },
  'gamestop': {
    id: 'gamestop',
    name: 'GameStop',
    address: '2345 32nd Ave.',
  },
};

// Stores
//   Browse  GET /stores
app.get('/stores', (request, response) => {
  response.send(`
  <h1>Stores</h1>
  <ul>
  ${
    Object.values(stores)
    .map(store => {
      return `
      <li>
        <a href='/stores/${store.id}'>
          <strong>${store.name}</strong>: ${store.address}
        </a>
      </li>`
    }).join('\n')
  }
  </ul>
  <a href='/stores/new'><button>✚ Add store</button></a>
  `);
});

app.get('/stores/new', (request, response) => {
  response.send(`
    <h1>Create new store</h1>
    <form method='POST' action='/stores'>
      <input name='name' placeholder='Name'>
      <input name='address' placeholder='Address'>
      <button>Submit</button>
    </form>
  `);
});

//   Read    GET /stores/:id
app.get('/stores/:id', (request, response) => {
  const storeId = request.params.id;
  const store = stores[storeId];
  response.send(`Hi I am ${store.name}`);
});

//   Edit    POST /stores/:id
app.post('/stores/:id', () => {});

//   Add     POST /stores
app.post('/stores', (request, response) => {
  const { name, address } = request.body;
  stores[name.toLowerCase()] = {
    id: name.toLowerCase(),
    name,
    address
  };
  response.redirect('/stores');
});

//   Delete  POST /stores/:id/delete
app.post('/stores/:id/delete', () => {});

// app.use('*', (request, response) => { response.send('This is not implemented actually!') })

app.listen(PORT, () => console.log(`Looks like I'm listening on port ${PORT} 👍`));
