/*Actions and Web Services Initilized*/

import axios from 'axios';
import { Router, BrowserRouter ,Redirect} from 'react-router-dom';
import cookie from 'react-cookie';
import { SUBMIT_LOADER } from './types';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if(error && error.data && error.data.error) {
    errorMessage = error.data.error;
  } else if(error && error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error && error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}


