function generateLotto() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  document.getElementById('result').innerText = '로또 번호: ' + sorted.join(', ');
}