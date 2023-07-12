import axios from 'axios';

// axios 생성
const AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react/',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github.raw+json',
    Authorization: 'Bearer ' + process.env.REACT_APP_API_GITHUB_TOKEN,
  },
});

export default AxiosInstance;
