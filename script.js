document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  const name = document.getElementById('expense-name').value.trim();
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const date = document.getElementById('expense-date').value;

  if (!name || isNaN(amount) || !date) return;

  const tableBody = document.getElementById('expense-table-body');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>$${amount.toFixed(2)}</td>
    <td>${date}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  row.querySelector('.delete-btn').addEventListener('click', () => {
    row.remove();
  });

  tableBody.appendChild(row);
  this.reset();
});