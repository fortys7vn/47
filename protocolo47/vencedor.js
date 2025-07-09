
document.addEventListener('DOMContentLoaded', () => {
  const winner = document.getElementById('winner');
  winner.addEventListener('mouseover', () => {
    winner.style.transform = 'scale(1.1)';
    winner.style.transition = 'transform 0.3s ease-in-out';
  });
  winner.addEventListener('mouseout', () => {
    winner.style.transform = 'scale(1)';
  });
});
