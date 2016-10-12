import {ApiRequest} from 'api-request-base';
import {API_URL, METHOD} from './constants';

export default class GGApiRequest extends ApiRequest {
    constructor({path, routeBinding, requiredParameters = [], method = METHOD.GET}) {
        super({
            path,
            routeBinding,
            requiredParameters,
            method
        });

        this.setBaseUrl(API_URL);
    }
}