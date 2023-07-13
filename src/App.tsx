import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IssueList from './pages/IssueList';
import IssueItem from './pages/IssueItem';
import Error from './pages/Error';

const App = memo(() => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<IssueList />} />
        <Route path='/issue/:id' element={<IssueItem />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
});

export default App;
