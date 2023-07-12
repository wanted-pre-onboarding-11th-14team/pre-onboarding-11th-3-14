import React, { memo } from 'react';

interface IssueListComponentProps {
  data: any[];
}

const IssueListComponent: React.FC<IssueListComponentProps> = memo(({ data }) => {
  return (
    <ul>
      {data?.map((v: any, i: number) => {
        return (
          <>
            {i > 0 && i % 4 === 0 && (
              <li>
                <a href='https://www.wanted.co.kr/'>
                  <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100' />
                </a>
              </li>
            )}
            <li key={i}>
              <a href={'/issue/' + v?.number}>
                #{v?.number} {v?.title} {v?.state} 코멘트: {v?.comments}
                <br />
              </a>
            </li>
          </>
        );
      })}
    </ul>
  );
});

export default IssueListComponent;
