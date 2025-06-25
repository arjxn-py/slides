import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({
  hash: true,
  slideNumber: true,
  autoPlayMedia: false, // disable built-in autoplay
  plugins: [Markdown, Highlight, Notes],
});

deck.initialize().then(() => {
  console.log('Reveal.js initialized!');

  // Play videos when the slide becomes active
  deck.on('slidechanged', (event) => {
    const currentSlide = event.currentSlide;
    const videos = currentSlide.querySelectorAll('video');

    videos.forEach((video: HTMLVideoElement) => {
      // Reset time if needed
      video.currentTime = 0;

      // Attempt to play
      video.play().catch((err) => {
        console.warn('Autoplay failed:', err);
      });
    });
  });
});
