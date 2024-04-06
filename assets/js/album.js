const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + id;

const getAlbum = async () => {
    try {
        const response = await fetch(URL_ENDPOINT);
        if (!response.ok) {
            throw new Error('Errore nel recupero dell\'album: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Errore durante il recupero dell\'album:', error.message);
    }
};

const getPopularSong = async (urlPopularSong) => {
    try {
        const response = await fetch(urlPopularSong);
        if (!response.ok) {
            throw new Error('Errore nel recupero delle canzoni popolari: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Errore durante il recupero delle canzoni popolari:', error.message);
    }
};

getAlbum().then(res => createAlbumSection(res));

const createAlbumSection = (album) => {
    const albumBanner = document.querySelector("#album-banner");
    if (!album) {
        console.log('Errore: album non disponibile');
        return;
    }
    albumBanner.innerHTML = `
<div class="album-image position-relative">
<div class="overlay-album-bg"></div>
<img class="w-100 h-100 object-fit-cover" id="album-image" src="${album.cover_xl}" alt="">
</div>
<div class="px-3 position-absolute bottom-0">
<h3 class="fw-bold fs-1" id="album-title">${album.title}</h3>
<p class="fw-bold">Artista: ${album.artist ? album.artist.name : 'Artista non disponibile'}</p>
<p class="fw-bold">Anno di rilascio: ${album.release_date}</p>
</div>`;

getPopularSong(album.tracklist).then(res => {
    if (res && res.data) {
        if (res.data.length === 0) {
            noPopularSong();
        } else {
            res.data.slice(0, 5).map(song => createPopularSong(song));
            const loadMoreBtn = document.querySelector("#loadMoreBtn");
            loadMoreBtn.addEventListener("click", () => {
                let minItem = 5;
                let maxItem = 10;
                res.data.slice(minItem, maxItem).map(song => {
                    createPopularSong(song);
                    minItem += 5;
                    maxItem += 5;
                });
            });
        }
    } else {
        console.log("Errore: dati non disponibili");
    }
});

};

const createPopularSong = (song) => {
    const songTab = document.querySelector("#list-popular-song");
    songTab.innerHTML += `
<li class="px-2 py-2">
    <td class="py-2 px-3"><img src="${song.album.cover_small}" alt=""></td>
    <td class="px-2">${song.title}</td>
    <td class="px-2">${song.album.title}</td>            
</li>`;
};

const noPopularSong = () => {
    const noSongContainer = document.querySelector("#popular-song-container");
    noSongContainer.innerHTML = `<p>Non ci sono risultati per questo album</p>`;
};