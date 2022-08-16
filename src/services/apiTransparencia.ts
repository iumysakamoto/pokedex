import axios from 'axios';

const apiTransparencia = axios.create({
    baseURL: 'http://wf.codiub.net/filatransparente-api',
})

export default apiTransparencia;