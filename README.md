# BaityBait

[![Netlify Status](https://api.netlify.com/api/v1/badges/cbd9dcac-51b9-42bc-8757-09645b64cb84/deploy-status)](https://app.netlify.com/sites/baitybait/deploys)

Un Sitio Web sobre el Youtuber y Streamer Español [BaityBait](https://www.youtube.com/c/SrBaityBait).

## Instalación

Clonar el repositorio y seguir los siguientes pasos:

### Generar API KEY

- Crear una cuenta en [RapidAPi](https://rapidapi.com).
- Suscribirse a la API de [YouTube](https://rapidapi.com/Glavier/api/youtube138/) (cuenta on un plan gratuito).
- En *Header Parameters* > *X-RapidAPI-Key* estará la API KEY.

### Agregar la API KEY como una variable de entorno en Netlify

- Crear una cuenta en [Netlify](https://netlify.com).
- [Desplegar el sitio](https://docs.netlify.com/site-deploys/create-deploys/) web en Netlify.
- Ir a las configuraciones del sitio en Netlify (*Site Settings*) > *Build & deploy* > *Environment* > *Environment variables* y crear una nueva variable de entorno llamada `API_KEY` y cuyo valor es la key generada en RapidAPi.
- Para probar el funcionamiento de la App, hay que descargar el [CLI de Netlify](https://docs.netlify.com/cli/get-started/#installation), autenticarse y [vincular el sitio web](https://docs.netlify.com/cli/get-started/#link-and-unlink-sites).
- Ejecutar `netlify dev` para levantar un entorno de desarrollo y verificar que la API KEY este configurada correctamente.