const imageChanger = () => {
  const arr = Array.from(document.querySelectorAll('[data-image-changer]'));
  
  const arrLength = arr.length;
  if (!arrLength) {
    return;
  }

  const activeIndex = arr.findIndex((el) => {
    return el.classList.contains('is-active');
  });

  const nextIndex = activeIndex + 1 === arrLength ? 0 : activeIndex + 1

  document.querySelector('.is-active[data-image-changer]').classList.remove('is-active');

  document.querySelector(`[data-image-changer]:nth-child(${nextIndex + 1})`).classList.add('is-active')
}

const imageChangerButton = document.querySelector('[data-image-changer-button]')

if (imageChangerButton) {
  imageChangerButton.addEventListener('click', imageChanger)
}
