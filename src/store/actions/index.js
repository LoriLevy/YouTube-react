/* file:  store/actions/index.js */
/* Used With: SAGA */

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
//If the request succeeded, we dispatch an action with whose action.type field ends with SUCCESS. 
//If the request fails, we dispatch an action whose action.type filed ends with a FAILURE.


export function createRequestTypes(base) {
  if(!base){
    throw new Error('cannot create the Request Type with base = \'\' or base = null');
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((action, type) => {
    // Append the suffix (REQUEST, SUCCESS, FAILURE) to the action
    action[type] = `${base}_${type}`;
    return action;
  }, {});
}

export function createAction(type, payload = {}) {
    return {
      type,
      ...payload,
    };
  }