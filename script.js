const mario = document.getElementById('mario');
const block = document.getElementById('block');
let isJumping = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
    let position = 0;
    const intervalId = setInterval(function() {
      if (position === 150) {
        clearInterval(intervalId);
        let downIntervalId = setInterval(function() {
          if (position === 0) {
            clearInterval(downIntervalId);
            isJumping = false;
          }
          position -= 5;
          mario.style.bottom = position + 'px';
        }, 20);
      }
      position += 5;
      mario.style.bottom = position + 'px';
    }, 20);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    jump();
  }
});

setInterval(function() {
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft < 0) {
    block.style.display = 'none';
  } else {
    block.style.display = '';
    block.style.left = blockLeft - 3 + 'px';
  }
}, 20);
