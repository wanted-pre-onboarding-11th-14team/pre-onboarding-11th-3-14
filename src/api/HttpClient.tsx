import axios, { AxiosInstance } from 'axios';
import { Dispatch } from 'react';
import { IssueAction } from './IssueModel';

export class HttpClient {
  readonly baseURL: string | undefined;
  #issuesAxios: AxiosInstance | null;

  constructor() {
    this.baseURL =
      process.env.REACT_APP_API_GITHUB_URL || 'https://api.github.com/repos/facebook/react/';
    this.#issuesAxios = null;
    this.create();
  }

  create() {
    this.#issuesAxios = axios.create({
      baseURL: this.baseURL,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github.raw+json',
        // Authorization: 'Bearer ' + process.env.REACT_APP_API_GITHUB_TOKEN,
      },
    });
  }

  async getIssueList(dispatch: Dispatch<IssueAction>, page: number) {
    dispatch({ type: 'GET_ISSUE_LIST' });
    try {
      const response = await this.#issuesAxios?.get(
        this.baseURL + `issues?sort=comments&page=${page}&per_page=30`,
      );
      dispatch({ type: 'GET_ISSUE_LIST_SUCCESS', data: response?.data });
    } catch (e) {
      dispatch({ type: 'GET_ISSUE_LIST_ERROR', error: e });
    }
  }

  async getIssueItem(dispatch: Dispatch<IssueAction>, id: number) {
    dispatch({ type: 'GET_ISSUE' });
    try {
      const response = await this.#issuesAxios?.get(this.baseURL + 'issues/' + id);
      dispatch({ type: 'GET_ISSUE_SUCCESS', data: response?.data });
    } catch (e) {
      dispatch({ type: 'GET_ISSUE_ERROR', error: e });
    }
  }
}
