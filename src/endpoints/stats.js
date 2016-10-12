import {PARAMETERS} from '../constants';
import GGApiRequest from '../GGApiRequest';

export default {
    elo: new GGApiRequest({
        path: `elo/{${PARAMETERS.MEMBERSHIP_ID}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_ID
        ]
    }).buildRequest(),
    eloHistory: new GGApiRequest({
        path: `elo/history/{${PARAMETERS.MEMBERSHIP_ID}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_ID
        ]
    }).buildRequest()
}