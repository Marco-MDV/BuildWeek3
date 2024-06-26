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
    footer(res.data),
    play(),
    set(),
    hideAside(),
    hiddeAd()
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
    const linkTitle = document.createElement('a')
    linkTitle.classList.add('link-unstyled','text-decoration-none','text-white')
    title.append(linkTitle)
    title.classList.add('fw-bold','title')
    linkTitle.textContent = song.album.title
    linkTitle.href= './album.html'

    const artist = document.createElement('p')
    const artistLink = document.createElement('a')
    artistLink.classList.add('link-unstyled','text-decoration-none','text-white')
    artistLink.href='./artist.html?id=' + song.artist.id
    artistLink.textContent = song.artist.name
    artist.append(artistLink)

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
    const buttonHidden = document.createElement('button')
    buttonHidden.setAttribute('id','buttonHidden')
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
        colPlayList.classList.add('colPlayList','col-6','col-md-4','d-flex','justify-content-center','align-items-center')

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
        const artistLink = document.createElement('a')
        titlePlaylist.append(artistLink)
        artistLink.classList.add('link-unstyled','text-decoration-none','text-white')
        artistLink.href='./album.html'

        titlePlaylist.classList.add('m-0','text-truncate')
        artistLink.textContent = song.album.title

        const containerSectionTwo = document.createElement('div')
        containerSectionTwo.classList.add('containerSectionTwo','d-flex','justify-content-center','align-items-center','me-3')
        
        const playButton = document.createElement('button')
        playButton.classList.add('rounded-pill', 'border-0','play2','d-none','d-md-flex','justify-content-center','align-items-center','p-1','playButtonPlayList')
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
    card.classList.add('card','d-flex','justify-content-start','align-items-start','gap-2','rounded','pt-3','px-3','p-md-2','text-white')
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
    const artistLink = document.createElement('a')
    title.classList.add('title','fw-bold')
    artistLink.textContent  = 'Playlist title'
    artistLink.classList.add('link-unstyled','text-decoration-none','text-white')
    artistLink.href='./artist.html?id=' + song.artist.id
    title.append(artistLink)

    const description = document.createElement('p')
    description.classList.add('description','truncate')
    description.textContent = 'Lorem, ipsum dolor.'

    const containerSectionOne = document.createElement('div')
    containerSectionOne.classList.add('containerSectionOne','d-flex','d-md-block','gap-3')

    const containerText = document.createElement('div')
    containerText.append(title,description)

    containerSectionOne.append(figure,containerText)

    const containerSectionTwo = document.createElement('div')
    containerSectionTwo.classList.add('containerSectionTwo','d-flex','d-md-none','justify-content-between','align-items-center','w-100','pt-2')

    const sectionLeft = document.createElement('div')
    const heart = document.createElement('button')
    heart.innerHTML=`<ion-icon name="heart-outline"></ion-icon>`
    const moreInfo = document.createElement('button')
    moreInfo.innerHTML=`<ion-icon name="ellipsis-horizontal-outline"></ion-icon>`
    sectionLeft.append(heart, moreInfo)

    const sectionRight = document.createElement('div')
    sectionRight.classList.add('sectionRight','d-flex','justify-content-center','align-items-center','gap-2')
    const songs = document.createElement('p')
    songs.classList.add('m-0')
    songs.textContent='Lorem'
    const play = document.createElement('button')
    play.classList.add('d-flex','justify-content-center','align-items-center','p-2')
    play.innerHTML=`<ion-icon name="play-outline"></ion-icon>`   
    sectionRight.append(songs,play)
    
    containerSectionTwo.append(sectionLeft, sectionRight)
    card.append(containerSectionOne,containerSectionTwo)
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
    containreInfo.classList.add('figurePlaylist','d-flex','justify-content-center','align-items-center','m-0')
    const imgSong = document.createElement('img')
    imgSong.src = song.album.cover_xl
    imgSong.classList.add('w-100','h-100')

    containreInfo.appendChild(imgSong)

    const info = document.createElement('div')
    info.classList.add('info','d-flex','justify-content-center','align-items-start','m-0','flex-column','fs-6','me-4')
    const titleSong = document.createElement('p')
    titleSong.classList.add('text-truncate','m-0','fw-bolder','text-white')
    titleSong.textContent = song.album.title
    const nameArtis = document.createElement('p')
    nameArtis.textContent = song.artist.name
    const iconHeart = document.createElement('div')
    iconHeart.innerHTML=`<ion-icon name="heart-outline"></ion-icon>`
    iconHeart.classList.add('iconHeart')
    info.append(titleSong,nameArtis)

    songSection.append(containreInfo,info,iconHeart)


    const footerSmartPhone = document.querySelector('.titleFooterButtonsSmartphone')
    footerSmartPhone.textContent = song.album.title
}

const play = () =>{
    const playbar = document.querySelector('.playbar')

    const top = document.createElement('div')
    top.classList.add('d-flex','justify-content-center','align-items-center','gap-2','top')

    const randomPlay = document.createElement('button')
    randomPlay.innerHTML=`<ion-icon name="shuffle-outline"></ion-icon>`
    const back = document.createElement('button')
    back.innerHTML=`<ion-icon name="play-skip-back"></ion-icon>`
    const pause = document.createElement('button')
    pause.innerHTML=`<ion-icon name="play-circle"></ion-icon>`
    const forward = document.createElement('button')
    forward.innerHTML=`<ion-icon name="play-skip-forward"></ion-icon>`
    const rewind = document.createElement('button')
    rewind.innerHTML=`<ion-icon name="sync"></ion-icon>`

    top.append(randomPlay,back,pause,forward,rewind)

    const down = document.createElement('div')
    down.classList.add('d-flex','justify-content-center','align-items-center','gap-2')

    const startTime = document.createElement('p')
    startTime.textContent = '0:58'

    const progress = document.createElement('div')
    progress.classList.add('progress','playProgressBar','mb-3')
    progress.innerHTML=`<div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>`

    const endTime = document.createElement('p')
    endTime.textContent = '3:20'

    down.append(startTime,progress,endTime)

    playbar.append(top,down)

    const buttons = top.querySelectorAll('button')
    buttons.forEach(button =>{
        button.classList.add('info', 'border-0', 'bg-transparent', 'rounded-pill')
    })
}

const set = () =>{
    const set = document.querySelector('.set')

    const mic = document.createElement('button')
    mic.innerHTML=`<ion-icon name="mic-outline"></ion-icon>`

    const queue = document.createElement('button')
    queue.innerHTML=`<ion-icon name="albums-outline"></ion-icon>`


    const device = document.createElement('button')
    device.innerHTML=`<ion-icon name="desktop-outline"></ion-icon>`

    const containAudioSet = document.createElement('div')
    containAudioSet.classList.add('containAudioSet','d-flex','justify-content-center','align-items-center','m-0')
    
    const audioSet = document.createElement('button')
    audioSet.innerHTML=`<ion-icon name="volume-high-outline"></ion-icon>`

    const progres = document.createElement('div')
    progres.classList.add('progress','mb-1')
    progres.innerHTML=`
    <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    `
    const expand = document.createElement('button')
    expand.innerHTML=`<ion-icon name="expand-outline"></ion-icon>`

    containAudioSet.append(audioSet, progres)
    set.append(mic, queue, device, containAudioSet, expand)

    const buttons = set.querySelectorAll('button')
    buttons.forEach(button =>{
        button.classList.add('info', 'border-0', 'bg-transparent', 'rounded-pill')
    })
}

const hideAside = () =>{
    document.querySelector('#close').addEventListener('click', () =>{
        document.querySelector('aside').classList.add('d-none'),
    document.querySelector('#principal').classList.remove('col-8'),
    document.querySelector('#principal').classList.add('col-10')
    })
}

const hiddeAd = () =>{
    document.querySelector('#buttonHidden').addEventListener('click', () =>{
        document.querySelector('.hero').remove(document.querySelector('.hero'))
    })
}