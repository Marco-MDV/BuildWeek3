const searchParams = new URLSearchParams(window.location.search)
const id = "75621062";
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

getArtist().then(res => createArtistSection(res))

const createArtistSection = (artist) => {
    const artistName = document.querySelector("#artist-name")
    artistName.textContent = artist.name
}