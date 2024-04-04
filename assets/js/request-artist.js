const searchParams = new URLSearchParams(window.location.search)
const id = "246791";
const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + id

const getArtist = async () => {
    try {
        const response = await fetch(URL_ENDPOINT)
        const data = await response.json()
        if (response.ok) {
            console.log(data);
            return data            
        }        
    } catch (error) {
        console.log(error);
    }
}

const getPopularSong = async (urlPopularSong) => {
    const URL_POPULAR_SONG = urlPopularSong
    try {
        const response = await fetch(URL_POPULAR_SONG)
        const data = await response.json()
        if (response.ok) {
            console.log(data);
            return data            
        }        
    } catch (error) {
        console.log(error);
    }
}

getArtist().then(res => createArtistSection(res))

const createArtistSection = (artist) => {
    const artistBanner = document.querySelector("#artist-banner")
    artistBanner.innerHTML = /*html*/ `
    <div class="artist-image position-relative">
        <div class="overlay-artist-bg"></div>
        <img class="w-100 h-100 object-fit-cover" id="artist-image" src="${artist.picture_xl}" alt="">
    </div>
    <div class="px-3 position-absolute bottom-0">
        <div class="d-flex gap-2">
            <i class="bi bi-patch-check-fill"></i>
            <p>Artista verificato</p>
        </div>
        <h3 class="fw-bold fs-1" id="artist-name">${artist.name}</h3>
        <p>3.456.789 ascoltatori mensili</p>
    </div>`

    const tracklistLike = document.querySelector("#tracklist-like")
    tracklistLike.innerHTML = /*html*/ `
    <div class="avatar-artist rounded-circle">
        <img class="w-100 h-100 object-fit-cover" id="artist-image" src="${artist.picture_xl}" alt="">
    </div>
    <div class="d-flex flex-column px-2 ">
        <p>Hai messo Mi piace a 11 brani</p>
        <p>Di ${artist.name}</p>
    </div>`

    getPopularSong(artist.tracklist).then(res =>res.data.map(songs => {
        createPopularSong(songs)
    }))
}

const createPopularSong = (songs) => {
    const songsTab = document.querySelector("#tab-popular-songs")

    let minutes = Math.floor(songs.duration / 60);

    
    songsTab.innerHTML += /*html*/`
    <th scope="row" class="px-2">1</th>
    <td class="py-2 px-3"><img src="${songs.album.cover_small}" alt=""></td>
    <td>${songs.title}</td>
    <td>${songs.album.title}</td>
    <td>${minutes}</td>`
}

