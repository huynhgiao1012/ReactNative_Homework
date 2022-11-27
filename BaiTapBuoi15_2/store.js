import {configureStore} from '@reduxjs/toolkit';
import ReduxSlices from './Screen/reduxToolkit/ReduxSlices';

export const store = configureStore({
  reducer: {
    reduxReducer: ReduxSlices,
  },
});
