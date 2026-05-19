const videos = [
  {
    title: 'Travel Cinematic Reel',
    description: 'Drone footage and cinematic travel storytelling.',
    youtubeId: 'l61OVu_VVak'
  },
  {
    title: 'Commercial Product Edit',
    description: 'High-end product commercial with motion graphics.',
    youtubeId: 'hy4HhWOmjuQ'
  },
  {
    title: 'Documentary Interview',
    description: 'Narrative-focused documentary editing project.',
    youtubeId: 'jHukgl8QC94'
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
