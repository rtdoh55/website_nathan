const videos = [
  {
    title: 'Travel Cinematic Reel',
    description: 'Drone footage and cinematic travel storytelling.',
    youtubeId: 'ScMzIvxBSi4'
  },
  {
    title: 'Commercial Product Edit',
    description: 'High-end product commercial with motion graphics.',
    youtubeId: 'ysz5S6PUM-U'
  },
  {
    title: 'Documentary Interview',
    description: 'Narrative-focused documentary editing project.',
    youtubeId: 'aqz-KE-bpKQ'
  },
  {
    title: 'Music Video Production',
    description: 'Creative music video with visual effects.',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

const videoGrid = document.getElementById('videoGrid');

videos.forEach(video => {
  const card = document.createElement('div');
  card.classList.add('video-card');

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