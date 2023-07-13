import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { IssueProvider } from './api/IssueContext';
import { HttpClient } from './api/HttpClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const httpClient = new HttpClient();

root.render(
  <BrowserRouter>
    <IssueProvider httpClient={httpClient}>
      <App />
    </IssueProvider>
  </BrowserRouter>,
);
