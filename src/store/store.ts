import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import drawerReducer from './slice/drawerSlice'
import currentUserReducer from './slice/currentUserSlice'
import messageReducer from './slice/messageSlice'

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        currentUser: currentUserReducer,
        message: messageReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)