import { memo } from 'react';
import Loading from '../components/Loading';
import Error from './Error';
import useFetchIssueItem from '../hooks/useFetchIssueItem';
import IssueItemComponents from '../components/IssueItemComponents';

const IssueItem = memo(() => {
  const [data, loading, error, date] = useFetchIssueItem();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return <IssueItemComponents data={data} date={date} />;
});

export default IssueItem;
