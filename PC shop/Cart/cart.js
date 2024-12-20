const checkoutButton = document.querySelector('.checkout');
const modal = document.querySelector('#checkout-modal');
const closeButton = document.querySelector('.close-button');
const checkoutForm = document.querySelector('#checkout-form');

checkoutButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const address = document.querySelector('#address').value;

  alert(`Дякуємо, ${name}! Ваше замовлення прийнято.\nДеталі замовлення:\n- Email: ${email}\n- Телефон: ${phone}\n- Адреса: ${address}`);

  modal.style.display = 'none';

  document.querySelector('.cart-items').innerHTML = '';
});
