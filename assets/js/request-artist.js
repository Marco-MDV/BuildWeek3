const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id");

// console.log(window.location.href.split("/").reverse()[0]);
const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + id

// test per artista senza canzoni '75621062'
let minItem = 5;
let maxItem = 10;

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
    <div class="avatar-artist position-relative">
        <img class=" rounded-circle w-100 h-100 object-fit-cover" id="artist-image" src="${artist.picture_xl}" alt="">
        <div class="position-absolute bottom-0 end-0 iconHeartOneArtist rounded-circle"><ion-icon name="heart"></ion-icon></div>
    </div>
    <div class="d-flex flex-column px-2 gap-2">
        <p class="m-0">Hai messo Mi piace a 11 brani</p>
        <p class="m-0">Di <b>${artist.name}</b></p>
    </div>`

    getPopularSong(artist.tracklist).then(res =>{
        if (res.data.length === 0) {
            noPopularSong()
        } else {
            res.data.slice(0,5).map(songs => {
                createPopularSong(songs)                
            })
            const loadMoreBtn = document.querySelector("#loadMoreBtn");
            loadMoreBtn.addEventListener("click", ()=>{
                minItem = minItem + 5
                maxItem = maxItem + 5
                res.data.slice(minItem,maxItem).map(songs => {
                createPopularSong(songs)
                
               }) 
            })
        }
    })
}

const createPopularSong = (songs) => {
    const songsTab = document.querySelector("#list-popular-song")

    // let minutes = Math.floor(songs.duration / 60);

    songsTab.innerHTML += /*html*/`
        <li class="px-2 py-2">
            <td class="py-2 px-3"><img src="${songs.album.cover_small}" alt=""></td>
            <td class="px-2">${songs.title}</td>
            <td class="px-2">${songs.album.title}</td>            
        </li>`
}

const noPopularSong = () => {
    const noSongContainer = document.querySelector("#popular-song-container") 

    noSongContainer.innerHTML = /*html*/`
    <p>Non ci sono risultati per questo artista</p>`
}

