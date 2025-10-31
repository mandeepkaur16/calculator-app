const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clear')) {
      display.textContent = '0';
    } else if (button.classList.contains('backspace')) {
      display.textContent = display.textContent.slice(0, -1) || '0';
    } else if (button.classList.contains('equal')) {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    } else {
      if (display.textContent === '0') display.textContent = '';
      display.textContent += button.textContent;
    }
  });
});
