import { useEffect } from 'react';
import { useIssueState, useIssueDispatch, useIssueApi } from '../api/IssueContext';

function useFetchIssueItem() {
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const apis = useIssueApi();
  const { data, loading, error } = state.issue;

  useEffect(() => {
    const issueId: number = Number(window.location.pathname.split('/')[2]);
    apis.getIssueItem(dispatch, issueId);
  }, []);

  return [data, loading, error];
}

export default useFetchIssueItem;
