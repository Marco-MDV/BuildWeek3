const URL_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/deezer/album/';

const getAlbumData = async (id) => {
    try {
        const response = await fetch(URL_ENDPOINT + id);
        if (!response.ok) {
            throw new Error('Errore nella richiesta dati');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const populateAlbumDetails = async (id) => {
    const albumData = await getAlbumData(id);
    if (!albumData) return;
    
    const songNumbers = document.getElementById('songNumbers');
    const songTitles = document.getElementById('songTitles');
    const playCounts = document.getElementById('playCounts');
    const songDurations = document.getElementById('songDurations');

    albumData.tracks.data.forEach((track, index) => {
        const listItemNumber = document.createElement('li');
        listItemNumber.innerHTML = `<a href="#">${index + 1}</a>`;
        songNumbers.appendChild(listItemNumber);

        const listItemTitle = document.createElement('li');
        listItemTitle.innerHTML = `<a href="#">${track.title}</a>`;
        songTitles.appendChild(listItemTitle);

        const listItemPlayCount = document.createElement('li');
        listItemPlayCount.innerHTML = `<a href="#">${track.playcount}</a>`;
        playCounts.appendChild(listItemPlayCount);

        const listItemDuration = document.createElement('li');
        listItemDuration.innerHTML = `<a href="#">${track.duration}</a>`;
        songDurations.appendChild(listItemDuration);
    });
};

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    await populateAlbumDetails(id);
});