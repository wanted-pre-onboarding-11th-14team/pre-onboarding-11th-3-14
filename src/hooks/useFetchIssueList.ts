import { useEffect, useState, useCallback } from 'react';
import { useIssueState, useIssueDispatch, getIssueList } from '../api/IssueContext';
import { useIntersectionObserver } from './useIntersectionObserver';

type Issue = { [key: string]: any };

function useFetchIssueList() {
  const state = useIssueState();
  const dispatch = useIssueDispatch();
  const [data, setData] = useState<Issue>([]);
  const [page, setPage] = useState(1);
  const { data: issueList, loading, error } = state.issueList;

  const fetchMoreIssue = useCallback(() => {
    setPage(prev => prev + 1);
  }, [data]);

  const setObservationTarget = useIntersectionObserver(fetchMoreIssue);

  useEffect(() => {
    console.log(page);
    getIssueList(dispatch, page);
  }, [page]);

  useEffect(() => {
    if (issueList) {
      setData((data: Issue[]) => [...data, ...issueList]);
    }
  }, [issueList]);

  return [data, loading, error, setObservationTarget];
}

export default useFetchIssueList;
