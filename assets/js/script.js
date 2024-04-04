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

/* devo chiedere perché mi da errore su leght anche se funziona */
const randomName = (array) =>{
    return array[(Math.floor(Math.random() * array.length))]
} 

requestData(randomName(arrayNameArtists)).then(res =>{
    principalSong(res.data),
    creatplaylist(res.data),
    cardSong(res.data),
    footer(res.data)
})

const principalSong = (data) =>{
    const principalSong = document.querySelector('.principalSong')
    principalSong.classList.add('d-flex', 'justify-content-between')
    let song = randomName(data)
    console.log(song);

    const containerAlbum = document.createElement('div')
    containerAlbum.classList.add('containerAlbum', 'd-flex', 'justify-content-start', 'align-items-center','gap-4','w-100') 

    /* img album */
    const figure = document.createElement('figure')
    figure.classList.add('m-0','principalSongFigure')

    const img = document.createElement('img')
    img.src = song.album.cover_xl    
    img.classList.add('principalSongImg','py-3')
    figure.append(img)

    /* info centrali */
    const container = document.createElement('div')
    container.classList.add('containerAlbumInfo','h-100','d-flex','flex-column','justify-content-between')

    const album = document.createElement('p')
    album.textContent = 'ALBUM'

    const title = document.createElement('h1')
    title.classList.add('fw-bold','title')
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
    containerButtonHidden.classList.add('w-100','d-flex', 'justify-content-end', 'align-items-start', 'containerButtonHidden')
    const buttonHidden = document.createElement('button','buttonHidden')
    buttonHidden.textContent='NASCONDI ANNUNCI'
    buttonHidden.classList.add('buttonHidden','rounded-pill','border-0','px-3','py-1')
    const hiddenButton = document.querySelector('.hiddenButton')


    containerButtonHidden.appendChild(buttonHidden)
    containerAlbum.append(figure,container)
    principalSong.append(containerAlbum)
    hiddenButton.append(containerButtonHidden)
}

const creatplaylist = (data) =>{
    const numPlaylist = 6
    const rowPlaylist = document.querySelector('.rowPlaylist')
    rowPlaylist.classList.add('rowPlaylist','d-flex','justify-content-center','align-items-stretch')
    for (let index = 0; index < numPlaylist; index++) {
        const colPlayList = document.createElement('div')
        colPlayList.classList.add('colPlayList','col-4','d-flex','justify-content-center','align-items-center')

        let song = randomName(data)
        console.log(song);
        
        const containerPlaylist = document.createElement('div')
        containerPlaylist.classList.add('containerPlaylist','d-flex','justify-content-between','align-items-center','mb-4','rounded','w-100')

        const containerSectionOne = document.createElement('div')
        containerSectionOne.classList.add('containerSectionOne','d-flex','justify-content-center','align-items-center','gap-2','text-truncate')

        const figurePlaylist = document.createElement('figure')
        figurePlaylist.classList.add('m-0','figurePlaylist')
        const imgPlaylist = document.createElement('img')
        imgPlaylist.classList.add('rounded-start','w-100','h-100')
        imgPlaylist.src = song.album.cover_medium
        figurePlaylist.appendChild(imgPlaylist)

        const titlePlaylist = document.createElement('p')
        titlePlaylist.classList.add('m-0','text-truncate')
        titlePlaylist.textContent = song.album.title

        const containerSectionTwo = document.createElement('div')
        containerSectionTwo.classList.add('containerSectionTwo','d-flex','justify-content-center','align-items-center','me-3')
        
        const playButton = document.createElement('button')
        playButton.classList.add('rounded-pill', 'border-0','play2','d-flex','justify-content-center','align-items-center','p-1','playButtonPlayList')
        playButton.innerHTML=`<ion-icon name="play-sharp"></ion-icon>`

        rowPlaylist.append(colPlayList)
        colPlayList.append(containerPlaylist)
        containerPlaylist.append(containerSectionOne, containerSectionTwo)
        containerSectionOne.append(figurePlaylist, titlePlaylist)
        containerSectionTwo.append(playButton)
        
    }
}

const cardSong = (data) =>{
    const numCard = 10 
    for (let index = 0; index < numCard; index++) {
        let song = randomName(data)
        createCard(song); 
    }
    row()
}


const createCard = (song) =>{
    const containerCard = document.querySelector('.containerCard')
    const card = document.createElement('div')
    card.classList.add('card','d-flex','justify-content-start','align-items-start','gap-2','rounded','p-2','text-white')
    containerCard.appendChild(card)

    const figure = document.createElement('figure')
    figure.classList.add('m-0','figureCard','position-relative')
    const img = document.createElement('img')
    img.classList.add('rounded','w-100','h-100')
    img.src = song.album.cover_medium
    const playButton = document.createElement('button')
    playButton.classList.add('rounded-pill', 'border-0','play2','d-flex','justify-content-center','align-items-center','p-1','playButtonPlayList','position-absolute','bottom-0', 'end-0','me-1','mb-1')
    playButton.innerHTML=`<ion-icon name="play-sharp"></ion-icon>`


    figure.append(img,playButton)

    const title = document.createElement('h6')
    title.classList.add('title','fw-bold')
    title.textContent  = 'Playlist title'

    const description = document.createElement('p')
    description.classList.add('description','truncate')
    description.textContent = 'Lorem, ipsum dolor.'

    card.append(figure,title,description)
}

const hiddenCards = (hiddeCards) =>{  
    hiddeCards.forEach(card =>{
        card.classList.add('d-none')
    })
}

const row = () =>{
    const rows = document.querySelectorAll('.rowCard')
    rows.forEach(row =>{
        const hiddeCards = Array.from(row.querySelectorAll('.card')).slice(5)
        hiddenCards(hiddeCards)
        removeHidden(row, hiddeCards)
    }) 
}

const removeHidden = (row, hiddeCards) =>{
    row.querySelector('.visualizzaTutto').addEventListener('click', () => {
        hiddeCards.forEach(card =>{
            card.classList.remove('d-none')
        })
    })
}

const footer = (data) =>{
    let song = randomName(data)
    
    const songSection = document.querySelector('.songSection')

    const containreInfo = document.createElement('figure')
    const imgSong = document.createElement('img')
    
}