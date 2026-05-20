// =========================
// STARFIELD CANVAS
// =========================
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, stars = [];
  const DPR = window.devicePixelRatio || 1;

  const STAR_COUNT = 180;
  const PIXEL_SIZE_MIN = 1;
  const PIXEL_SIZE_MAX = 3;
  const SPEED_MIN = 0.3;
  const SPEED_MAX = 1.8;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function randomStar(fromBottom) {
    const size = PIXEL_SIZE_MIN + Math.random() * (PIXEL_SIZE_MAX - PIXEL_SIZE_MIN);
    return {
      x: Math.random() * W,
      y: fromBottom ? H + Math.random() * H : Math.random() * H,
      size: size,
      baseSize: size,
      speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
      // growth wobble phase
      phase: Math.random() * Math.PI * 2,
      // slight horizontal drift
      drift: (Math.random() - 0.5) * 0.15,
      // brightness flicker
      alpha: 0.5 + Math.random() * 0.5
    };
  }

  function init() {
    resize();
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(randomStar(false));
    }
  }

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Move upward + drift
      s.y -= s.speed;
      s.x += s.drift;
      s.phase += 0.02;

      // Pulse size slightly
      s.size = s.baseSize + Math.sin(s.phase) * 0.5;

      // Recycle when off-screen
      if (s.y + s.size < 0) {
        stars[i] = randomStar(true);
        continue;
      }

      // Draw pixel square
      const alpha = s.alpha * (0.7 + 0.3 * Math.sin(s.phase));
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fillRect(
        Math.round(s.x),
        Math.round(s.y),
        Math.ceil(s.size),
        Math.ceil(s.size)
      );
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    // Redistribute stars on resize
    stars.forEach(s => {
      s.x = Math.random() * W;
    });
  });

  init();
  requestAnimationFrame(draw);
}); // end DOMContentLoaded

// =========================
// VIDEO GRID
// =========================
const videos = [
  {
    title: 'Kwame Adu',
    description: "Ain't 2 Proud [Official Music Video]",
    youtubeId: 'KPS4xAIlFEI'
  },
  {
    title: 'Elias The Infinite',
    description: 'Take That Back',
    youtubeId: 'yIwdAmCzRz4'
  },
  {
    title: 'Bas',
    description: 'Pangea Sound with Cozz [Directed by Nate Doh]',
    youtubeId: 'ZSIKDkj8lWE'
  },
  {
    title: 'Music Video Production',
    description: 'Creative music video with visual effects.',
    youtubeId: 'D2p3FGeNtzc'
  }
];

const videoGrid = document.getElementById("videoGrid");

videos.forEach(video => {

  const card = document.createElement("div");

  card.classList.add("video-card");

  card.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${video.youtubeId}"
      title="${video.title}"
      frameborder="0"
      allowfullscreen>
    </iframe>

    <div class="video-content">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;

  videoGrid.appendChild(card);
});