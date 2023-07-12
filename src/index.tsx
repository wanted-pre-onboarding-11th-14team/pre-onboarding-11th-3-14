import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IssueProvider } from './api/IssueContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <IssueProvider>
      <App />
    </IssueProvider>
  </BrowserRouter>,
);
