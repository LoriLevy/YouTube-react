/* file: store/actions/videos.js */
/* Used With: SAGA */

import {
  createAction,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE
} from "./index";
//If the request succeeded, we dispatch an action with whose action.type field ends with SUCCESS. 
//If the request fails, we dispatch an action whose action.type filed ends with a FAILURE.

export const MOST_POPULAR = createRequestTypes("MOST_POPULAR");

export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
      nextPageToken
    }),
  success: response => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: response => createAction(MOST_POPULAR[FAILURE], { response })
  
};
