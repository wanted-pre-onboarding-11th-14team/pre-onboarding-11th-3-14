import { Dispatch } from 'react';

export interface Issue {
  [key: string]: any;
}

export interface IssueState {
  issueList: {
    loading: boolean;
    data: Issue[] | null;
    error: any;
  };
  issue: {
    loading: boolean;
    data: Issue | null;
    error: any;
  };
}

export interface ApiProps {
  getIssueList: (dispatch: Dispatch<IssueAction>, page: number) => Promise<void>;
  getIssueItem: (dispatch: Dispatch<IssueAction>, id: number) => Promise<void>;
}

export type IssueAction =
  | { type: 'GET_ISSUE_LIST' }
  | { type: 'GET_ISSUE_LIST_SUCCESS'; data: Issue[] }
  | { type: 'GET_ISSUE_LIST_ERROR'; error: any }
  | { type: 'GET_ISSUE' }
  | { type: 'GET_ISSUE_SUCCESS'; data: Issue }
  | { type: 'GET_ISSUE_ERROR'; error: any };
