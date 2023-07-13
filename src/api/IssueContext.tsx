import React, { createContext, useReducer, useContext, ReactNode } from 'react';
// import AxiosInstance from './AxiosInstance';
import { httpClient } from './HttpClient';

interface Issue {
  [key: string]: any;
}

interface IssueState {
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

type IssueAction =
  | { type: 'GET_ISSUE_LIST' }
  | { type: 'GET_ISSUE_LIST_SUCCESS'; data: Issue[] }
  | { type: 'GET_ISSUE_LIST_ERROR'; error: any }
  | { type: 'GET_ISSUE' }
  | { type: 'GET_ISSUE_SUCCESS'; data: Issue }
  | { type: 'GET_ISSUE_ERROR'; error: any };

// UsersContext 에서 사용 할 기본 상태
const initialState: IssueState = {
  issueList: {
    loading: false,
    data: null,
    error: null,
  },
  issue: {
    loading: false,
    data: null,
    error: null,
  },
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data: any) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = (error: any) => ({
  loading: false,
  data: null,
  error,
});

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function issueReducer(state: IssueState, action: IssueAction): IssueState {
  switch (action.type) {
    case 'GET_ISSUE_LIST':
      return {
        ...state,
        issueList: loadingState,
      };
    case 'GET_ISSUE_LIST_SUCCESS':
      return {
        ...state,
        issueList: success(action.data),
      };
    case 'GET_ISSUE_LIST_ERROR':
      return {
        ...state,
        issueList: error(action.error),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: success(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: error(action.error),
      };
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const IssueStateContext = createContext<IssueState | null>(null);
const IssueDispatchContext = createContext<React.Dispatch<IssueAction> | null>(null);

interface IssueProviderProps {
  children: ReactNode;
}

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssueProvider({ children }: IssueProviderProps) {
  const [state, dispatch] = useReducer(issueReducer, initialState);
  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssueState(): IssueState {
  const state = useContext(IssueStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssueDispatch(): React.Dispatch<IssueAction> {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

// API 처리 함수
export async function getIssueList(dispatch: React.Dispatch<IssueAction>, page: number) {
  dispatch({ type: 'GET_ISSUE_LIST' });
  try {
    // const response = await AxiosInstance.get(`issues?sort=comments&page=${page}&per_page=30`);
    const response = await httpClient.fetch(`/issues?sort=comments&page=${page}&per_page=30`);
    dispatch({ type: 'GET_ISSUE_LIST_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_LIST_ERROR', error: e });
  }
}

export async function getIssueItem(dispatch: React.Dispatch<IssueAction>, id: number) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    // const response = await AxiosInstance.get('/issues/' + id);
    const response = await httpClient.fetch(`/issues/${id}`);
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
