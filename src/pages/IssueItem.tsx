import Loading from '../components/Loading';
import Error from './Error';
import useFetchIssueItem from '../hooks/useFetchIssueItem';
import IssueItemComponents from '../components/IssueItemComponents';

const IssueItem = () => {
  const [data, loading, error] = useFetchIssueItem();

  if (loading) return <Loading />;

  if (data?.state !== 'open' || error) return <Error error={error} />;

  return <IssueItemComponents data={data} />;
};

export default IssueItem;
