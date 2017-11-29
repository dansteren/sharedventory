/*
For more information about the configure store structure see
https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md
*/

import devStoreConfigurer from './configureStore.dev';
import prodStoreConfigurer from './configureStore.prod';

export default (process.env.NODE_ENV === 'production'
  ? prodStoreConfigurer
  : devStoreConfigurer);
