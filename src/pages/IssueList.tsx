import React, { memo } from 'react';
import Loading from '../components/Loading';
import Error from './Error';
import useFetchIssueList from '../hooks/useFetchIssueList';
import IssueListComponent from '../components/IssueListComponent';

const IssueList = memo(() => {
  const [data, loading, error, setObservationTarget] = useFetchIssueList();

  if (error) return <Error />;

  return (
    <div>
      <IssueListComponent data={data} />

      {loading && <Loading />}
      <div
        style={{ height: '100px', backgroundColor: 'red' }}
        ref={setObservationTarget}
        id='target'>
        target
      </div>
    </div>
  );
});

export default IssueList;
