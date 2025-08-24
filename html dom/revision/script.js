// script.js
const form = document.getElementById('transaction-form');
const balanceEl = document.getElementById('balance');
const listEl = document.getElementById('transaction-list');

let balance = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (isNaN(amount) || amount <= 0) return;

  const transaction = {
    description,
    amount,
    type
  };

  addTransaction(transaction);
  updateBalance(transaction);
  form.reset();
});

function addTransaction({ description, amount, type }) {
  const li = document.createElement('li');
  li.classList.add(type);
  li.textContent = `${description}: ${type === 'credit' ? '+' : '-'}$${amount.toFixed(2)}`;
  listEl.appendChild(li);
}

function updateBalance({ amount, type }) {
  balance += type === 'credit' ? amount : -amount;
  balanceEl.textContent = balance.toFixed(2);
}