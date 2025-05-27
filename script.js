document.getElementById('randomBtn').addEventListener('click', async () => {
    const res = await fetch('albums.json');
    const albums = await res.json();
    const randomAlbum = albums[Math.floor(Math.random() * albums.length)];

    document.getElementById('cover').src = randomAlbum.cover;
    document.getElementById('cover').alt = randomAlbum.title;
    document.getElementById('title').textContent = randomAlbum.title;
    document.getElementById('recordingDate').textContent = 'Recorded: ' + randomAlbum.recordingDate;
    document.getElementById('releaseDate').textContent = 'Released: ' + randomAlbum.releaseDate;
    document.getElementById('albumCard').classList.remove('hidden');
});
