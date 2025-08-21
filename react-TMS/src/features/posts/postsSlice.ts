import type { Post, Posts } from '../../types/posts';
import { BASE_URL } from './../../api/posts';
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";


type PostsSlice = {
  posts: Post[]
  selectedPost?: Post,
  loading: boolean,
  error: string | null
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}`)
      const data = await response.json()
      return data as Posts
    } catch (error) {
      return rejectWithValue(error)
    }
  })

const initialState: PostsSlice = {
  posts: [],
  selectedPost: undefined,
  loading: false,
  error: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //posts.updatePosts
    updatePosts: (state, action) => {
      state.posts = action.payload
    },
    //posts.selectPost
    selectPost: (state, action) => {
      state.selectedPost = action.payload
    },
    //posts.clearSelectedPost
    clearSelectedPost: (state) => {
      state.selectedPost = undefined
    },
    updateLikePost: (state, action) => {
      const postId = action.payload;
      const postToUpdate = current(state.posts.find(post => post.id === postId));

      if (postToUpdate) {
        const updatedPost = {
          ...postToUpdate,
          reactions: {
            ...postToUpdate.reactions,
            likes: postToUpdate.reactions.likes + 1
          }
        };

        state.posts = state.posts.map(post => post.id === postId ? updatedPost : post);
      }
    },
    updateDislikePost: (state, action) => {
      const postId = action.payload;
      const postToUpdate = current(state.posts.find(post => post.id === postId));

      if (postToUpdate) {
        const updatedPost = {
          ...postToUpdate,
          reactions: {
            ...postToUpdate.reactions,
            dislikes: postToUpdate.reactions.dislikes + 1
          }
        };

        state.posts = state.posts.map(post => post.id === postId ? updatedPost : post);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload.posts
    }).addCase(fetchPosts.rejected, (state) => {
      state.loading = false
      state.error = 'Ошибка запроса постов'
    })
  }
})

export const { updatePosts, selectPost, clearSelectedPost, updateLikePost, updateDislikePost } = postsSlice.actions
