import { createEpicMiddleware } from 'redux-observable';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventSlice from '../features/event/eventSlice';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: combineReducers({
        event: eventSlice
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
            .concat([epicMiddleware])
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;