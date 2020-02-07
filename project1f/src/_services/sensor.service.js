import config from '../config';
import { authHeader, handleResponse } from '../_helpers';

export const sensorService = {
    getSensorInfo
};

function getSensorInfo() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/sensor`, requestOptions).then(handleResponse);
}
