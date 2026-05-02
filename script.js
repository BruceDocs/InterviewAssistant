const app = document.getElementById('app');

app.innerHTML = `
  <div class="card" id="card">Click me!</div>
`;

document.getElementById('card').addEventListener('click', () => {
  alert('Hello from script.js!');
});
