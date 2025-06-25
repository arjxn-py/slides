import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({
  hash: true,
  slideNumber: true,
  autoPlayMedia: false,
  plugins: [Markdown, Highlight, Notes],
});

deck.initialize().then(() => {
  console.log('Reveal.js initialized!');

  const astronaut = document.getElementById('astronaut') as HTMLImageElement;

  function moveAstronaut() {
    if (!astronaut) return;

    astronaut.style.display = 'none';

    astronaut.style.top = '';
    astronaut.style.bottom = '';
    astronaut.style.left = '';
    astronaut.style.right = '';
    astronaut.style.transform = '';

    const cornerOptions: {
      position: Partial<CSSStyleDeclaration>;
      angleRange: [number, number];
    }[] = [
      {
        position: { top: '-20px', left: '-20px' },
        angleRange: [120, 135],
      },
      {
        position: { top: '-20px', right: '-20px' },
        angleRange: [-135, -120],
      },
      {
        position: { bottom: '-20px', left: '-20px' },
        angleRange: [30, 45],
      },
    ];

    const choice = cornerOptions[Math.floor(Math.random() * cornerOptions.length)];
    const angle = getRandomAngle(choice.angleRange);

    Object.assign(astronaut.style, choice.position, {
      display: 'block',
      transform: `rotate(${angle}deg)`,
    });
  }

  function getRandomAngle([min, max]: [number, number]): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  moveAstronaut();

  deck.on('slidechanged', (event) => {
    moveAstronaut();

    // Restart and play all <video> tags in the active slide
    const currentSlide = event.currentSlide;
    const videos = currentSlide.querySelectorAll('video');

    videos.forEach((video: HTMLVideoElement) => {
      video.currentTime = 0;
      video.play().catch((err) => console.warn('Autoplay failed:', err));
    });
  });
});
