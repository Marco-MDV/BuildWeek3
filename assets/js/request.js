
const requestData = async () =>{
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen');   
        const JsonResponse = response.json()
        return JsonResponse
    } catch (error) {
        console.log(error.message);
    }
}
requestData().then(result => console.log(result))