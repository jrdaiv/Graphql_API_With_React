import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostListPage from './components/PostListPage';
import { PostsPage } from './components/Posts';



function App() {
  

  return (


    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage/>} />
        <Route path="/post/:id" element={<PostsPage/>} />
      </Routes>
    </BrowserRouter>
      
    </>


  )


}

export default App
