import { useEffect } from 'react';
import { useIssueState, useIssueDispatch, getIssueItem } from '../api/IssueContext';
// import IssueItemComponents from '../components/IssueItemComponents';

function useFetchIssueItem() {
  const state = useIssueState();
  const dispatch = useIssueDispatch();

  const { data: data, loading, error } = state.issue;

  const date = new Date(data?.created_at);
  // const [year, month, day] = new Date(data?.created_at).toLocaleDateString('ko-KR').split('.');

  useEffect(() => {
    const issueId: number = Number(window.location.pathname.split('/')[2]);
    console.log(issueId);
    getIssueItem(dispatch, issueId);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return [data, loading, error, date];
}

export default useFetchIssueItem;
