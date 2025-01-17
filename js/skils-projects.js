document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.skills__item');
  console.log(items);
  
  items.forEach(item => {
    const fillPercentage = item.getAttribute('data-fill');
    item.style.setProperty('--fill-percentage', `${fillPercentage}%`);
  });
});