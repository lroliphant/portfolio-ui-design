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



const videos = document.querySelectorAll("video"); // Select ALL the Videos

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.pause(); // Pause the TARGET video
    } else {
      entry.target.play(); // Play the TARGET video
    }
  });
}, {});
for (const video of videos) observer.observe(video); // Observe EACH video
const onVisibilityChange = () => {
  if (document.hidden) {
    for (const video of videos) video.pause(); // Pause EACH video
  } else {
    for (const video of videos) video.play(); // Play EACH video
  }
};

document.addEventListener("visibilitychange", onVisibilityChange);
