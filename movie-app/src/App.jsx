import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MoviePage from './components/MoviePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <MoviePage />
    </QueryClientProvider>
  )
}

export default App
