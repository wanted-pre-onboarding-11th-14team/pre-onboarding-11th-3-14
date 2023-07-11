import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/Header';
import IssueList from './pages/IssueList';
import IssueItem from './pages/IssueItem';

const App = memo(() => {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Routes>
        <Route path='/' element={<IssueList />} />
        <Route path='/issue/:id' element={<IssueItem />} />
      </Routes>
    </>
  );
});

export default App;
