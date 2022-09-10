import React from 'react';
import Header from './pages/Header';
import TodayFeed from './pages/TodayFeed';
import MyScrap from './pages/MyScrap';
import TodayTodo from './pages/TodayTodo';
import Memo from './pages/Memo';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  width 100%;
  height: 76px;
`

function App() {
  return (
    <>
      <Header />
      <Box />
      <Routes>
        <Route path='/*' element={<><TodayFeed /><MyScrap /><TodayTodo /><Memo /></>} />
        <Route path='/feed' element={<TodayFeed />} />
        <Route path='/scrap' element={<MyScrap />} />
        <Route path='/todo' element={<TodayTodo />} />
        <Route path='/memo' element={<Memo />} />
      </Routes>
    </>
  );
}

export default App;
