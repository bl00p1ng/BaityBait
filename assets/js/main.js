// ********** VARIABLES GLOBALES **********
const API_URL = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCNnNCBgckxzqIh1Txw5cgSg';

// ********** SELECTORES **********
const lastVideos = document.querySelector('#last-videos');

// ********** FUNCIONES **********
// Obtener la API KEY
function getAPIKey() {
    let api_key;

    fetch(".netlify/functions/api")
        .then(response => response.json())
        .then(json => {
            api_key = json.api;
            
            return api_key
        })
        // Una vez se tiene el token, consultar API
        .then(api_key => fetchData(API_URL, api_key))
}

// Obtener los datos de la API
function fetchData(URL, API_KEY) {
    fetch(URL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    // Una vez se tiene una respuesta de la API, mostrar los datos
    .then(response => showData(response))
    .catch(err => console.error(err));
}

// Mostrar datos traidos de la API
function showData(data) {
    const {contents} = data;

    contents.slice(0, 8).forEach(videoData => {
        const image = videoData.video.thumbnails[2].url;
        const title = videoData.video.title;
        const url = videoData.video.videoId;
        let view = `
            <div class="group relative">
                <div class="w-full 
                            bg-gray-200 
                            aspect-w-1 
                            aspect-h-1 
                            rounded-md 
                            overflow-hidden 
                            group-hover:opacity-75 
                            lg:aspect-none"
                >
                    <a href="https://youtu.be/${url}" target="_blank">
                        <img src="${image}" alt="${title}" class="w-full" />
                    </a>
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-slate-300">
                        <a href="https://youtu.be/${url}" target="_blank">
                            ${title}
                        </a>
                    </h3>
                </div>
            </div>
        `

        lastVideos.innerHTML += view;
    });
}

// Mostrar un mensaje de error en la UI y en la consola
function showError() {
    const errorMsg = document.createElement('p')
    errorMsg.classList.add('text-slate-200', 'text-center', 'font-bold', 'p-2', 'bg-red-900', 'rounded')
    errorMsg.textContent = 'Ocurri?? un error al obtener los datos. Intentalo de nuevo m??s tarde'

    lastVideos.appendChild(errorMsg)
}

// ********** ENTRY POINT **********
function app() {
    // Obtener la API KEY de Netlify y mostar los datos
    getAPIKey()
}

// Iniciar la App cuando el contenido termine de cargar
document.addEventListener('DOMContentLoaded', app)