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

requestData(randomName(arrayNameArtists)).then(res =>
    principalSong(res.data)
)

const principalSong = (data) =>{
    const principalSong = document.querySelector('.principalSong')
    principalSong.classList.add('d-flex', 'justify-content-between')
    let song = randomName(data)
    console.log(song);

    const containerAlbum = document.createElement('div')
    containerAlbum.classList.add('containerAlbum', 'd-flex', 'justify-content-start', 'align-items-center','gap-4','w-75') 

    /* img album */
    const figure = document.createElement('figure')
    figure.classList.add('m-0','principalSongFigure')

    const img = document.createElement('img')
    img.src = song.album.cover
    img.classList.add('principalSongImg')
    figure.append(img)

    /* info centrali */
    const container = document.createElement('div')
    container.classList.add('containerAlbumInfo')

    const album = document.createElement('p')
    album.textContent = 'ALBUM'

    const title = document.createElement('h1')
    title.textContent = song.album.title

    const artist = document.createElement('p')
    artist.textContent = song.artist.name

    const moreInfo = document.createElement('p')
    moreInfo.textContent = 'Ascolta il nuovo pezzo di ' + song.artist.name

    const containerButton = document.createElement('div')
    containerButton.classList.add('containerButton','d-flex', 'justify-content-start', 'align-items-center','gap-4')
    
    const play = document.createElement('button')
    play.classList.add('rounded-pill', 'border-0', 'px-4','py-2','play')
    play.textContent ='Play'

    const salva = document.createElement('button')
    salva.classList.add('btn', 'btn-outline-light', 'rounded-pill', 'px-4','py-2','salva')
    salva.textContent = 'Salva'

    const info = document.createElement('button')
    info.classList.add('info','border-0','bg-transparent', 'rounded-pill')
    info.innerHTML=`<ion-icon name="ellipsis-horizontal"></ion-icon>`

    containerButton.append(play, salva, info)
    container.append(album, title, artist, moreInfo, containerButton)

    /* bottone per nascondere */
    const containerButtonHidden = document.createElement('div')
    containerButtonHidden.classList.add('w-25','d-flex', 'justify-content-end', 'align-items-start', )
    const buttonHidden = document.createElement('button')
    buttonHidden.textContent='NASCONDI ANNUNCI'
    buttonHidden.classList.add('buttonHidden','rounded-pill','border-0','px-3','py-1')

    containerButtonHidden.appendChild(buttonHidden)
    containerAlbum.append(figure,container)
    principalSong.append(containerAlbum,containerButtonHidden)
}