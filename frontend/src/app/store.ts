import { createEpicMiddleware } from 'redux-observable';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventSlice from '../features/event/eventSlice';
import participantSlice from '../features/participant/participantSlice';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: combineReducers({
        event: eventSlice,
        participant: participantSlice
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
            .concat([epicMiddleware])
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;