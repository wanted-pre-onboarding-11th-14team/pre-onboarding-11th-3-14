import Loading from '../components/Loading';
import Error from './Error';
import useFetchIssueList from '../hooks/useFetchIssueList';
import IssueListComponent from '../components/IssueListComponent';

const IssueList = () => {
  const [data, loading, error, setObservationTarget] = useFetchIssueList();

  if (error) return <Error error={error} />;

  return (
    <div>
      <IssueListComponent data={data} />

      {loading && <Loading />}

      {loading || <div style={{ height: '200px' }} ref={setObservationTarget} id='target'></div>}
    </div>
  );
};

export default IssueList;
