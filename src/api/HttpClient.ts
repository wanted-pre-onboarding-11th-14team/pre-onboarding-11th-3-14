import axios from 'axios';

class HttpClient {
  readonly baseURL: string | undefined;

  constructor() {
    this.baseURL = process.env.REACT_APP_API_GITHUB_URL;
  }

  fetch(endpoint: string) {
    return axios.get(this.baseURL + endpoint, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github.raw+json',
        Authorization: 'Bearer ' + process.env.REACT_APP_API_GITHUB_TOKEN,
      },
    });
  }
}

export const httpClient = new HttpClient();
