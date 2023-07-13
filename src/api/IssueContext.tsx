import { Dispatch, createContext, useReducer, useContext, ReactNode } from 'react';
import { HttpClient } from './HttpClient';
import { ApiProps, IssueState, IssueAction } from './IssueModel';

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
const IssueDispatchContext = createContext<Dispatch<IssueAction> | null>(null);
const IssueAPIContext = createContext<ApiProps | null>(null);

interface IssueProviderProps {
  httpClient: HttpClient;
  children: ReactNode;
}

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssueProvider({ httpClient, children }: IssueProviderProps) {
  const getIssueList = httpClient.getIssueList.bind(httpClient);
  const getIssueItem = httpClient.getIssueItem.bind(httpClient);
  const [state, dispatch] = useReducer(issueReducer, initialState);
  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>
        <IssueAPIContext.Provider value={{ getIssueList, getIssueItem }}>
          {children}
        </IssueAPIContext.Provider>
      </IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssueState(): IssueState {
  const state = useContext(IssueStateContext);
  if (!state) {
    throw new Error('Cannot find IssueProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssueDispatch(): Dispatch<IssueAction> {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssueProvider');
  }
  return dispatch;
}

export function useIssueApi(): ApiProps {
  const apis = useContext(IssueAPIContext);
  if (!apis) throw new Error('Cannot connected Api');
  return apis;
}
