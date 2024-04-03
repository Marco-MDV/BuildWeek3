const requestData = async () =>{
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + randomName(arrayNameArtists));   
        const JsonResponse = response.json()
        if (response.ok) {
            return JsonResponse
        }
    } catch (error) {
        console.log(error.message);
    }
}


