import { configureStore } from '@reduxjs/toolkit';

import { JWT_PERSISTENT_STATE, userSlice } from './user.slice';
import { saveState } from './storage';
import { cartSlise } from './cart.slice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cart: cartSlise.reducer
	}
});

store.subscribe(()=>{
	saveState({jwt: store.getState().user.jwt}, JWT_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

