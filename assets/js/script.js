arrayNameArtists =[
    "Beyoncé",
    "Taylor Swift",
    "The Weeknd",
    "BTS",
    "Drake",
    "Justin Bieber",
    "Ed Sheeran",
    "Dua Lipa",
    "The 1975",
    "Billie Eilish",
    "Olivia Rodrigo",
    "Lil Nas X",
    "Bad Bunny",
    "J Balvin",
    "K-pop Blackpink",
    "Lady Gaga",
    "Rihanna",
    "Adele",
    "Bruno Mars",
    "Ariana Grande",
]

const randomName = (array) =>{
    return array[(Math.floor(Math.random() * array.length))]
} 

requestData().then(res =>
    principalSong(res.data)
)

const principalSong = (data) =>{
    const principalSong = document.querySelector('.principalSong')
/* console.log(data); */
/* data.forEach(element => {
    console.log(element.artist);    
}); */
let song = randomName(data)
    console.log(song);
    const figure = document.createElement('figure')
    figure.classList.add('m-0','principalSongFigure')

    const img = document.createElement('img')
    img.src = song.album.cover
    img.classList.add('principalSongImg')
    figure.append(img)

    const container = document.createElement('div')
    container.classList.add('Contaner')

    const album = document.createElement('p')
    album.textContent = 'ALBUM'

    const title = document.createElement('h1')
    title.textContent = song.album.title

    const artist = document.createElement('p')
    artist.textContent = song.artist.name

    const moreInfo = document.createElement('p')
    moreInfo.textContent = 'Ascolta il nuovo pezzo di' + song.artist.name

    const containerButton = document.createElement('div')
    containerButton.classList.add('containerButton')
    
    const play = document.createElement('button')
    play.textContent ='Play'

    const salva = document.createElement('button')
    salva.textContent = 'Salva'

    const info = document.createElement('button')
    info.innerHTML=`<ion-icon name="ellipsis-horizontal"></ion-icon>`

    const buttonHidden = document.createElement('button')
    buttonHidden.textContent='NASCONDI ANNUNCI'
    principalSong.append(figure,container,buttonHidden)
}