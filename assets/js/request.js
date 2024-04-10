/* import{randomName} from './script.js'
 */
const requestData = async (value) =>{
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + value);   
        const JsonResponse = response.json()
        if (response.ok) {
            return JsonResponse
        }
    } catch (error) {
        console.log(error.message);
    }
}


