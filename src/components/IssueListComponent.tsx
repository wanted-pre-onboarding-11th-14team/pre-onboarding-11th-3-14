import React, { memo } from 'react';
import styled from 'styled-components';

interface IssueListComponentProps {
  data: any[];
}

const IssueListComponent: React.FC<IssueListComponentProps> = memo(({ data }) => {
  return (
    <IssueListContainer>
      <ul>
        {data?.map((v: any, i: number) => {
          const [year, month, day] = new Date(v?.created_at).toLocaleDateString('ko-KR').split('.');

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
                  <div className='issueWrap'>
                    <div className='issueLeft'>
                      <div className='issueTitle'>
                        <div className='issueNumber'>#{v?.number}</div> <div>{v?.title}</div>
                      </div>
                      <div className='issueWriter'>
                        작성자: {v?.user.login}, 작성일:
                        {year}년 {month}월 {day}일
                      </div>
                    </div>

                    <div className='issueRight'>코멘트: {v?.comments}</div>
                  </div>
                  <br />
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </IssueListContainer>
  );
});

const IssueListContainer = styled.div`
  width: 100%;

  ul {
    width: 95%;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;

    li {
      border-bottom: 1px solid black;
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: black;

        img {
          display: block;
          height: 100px;
          margin: 10px auto 10px;
        }

        .issueWrap {
          display: flex;
          justify-content: space-between;

          .issueLeft {
            padding: 20px 0;
            max-width: 80%;

            .issueTitle {
              font-size: 20px;
              margin-bottom: 30px;
              display: flex;

              .issueNumber {
                width: 100px;
              }
            }
          }

          .issueRight {
            width: 100px;
            height: 100px;
            line-height: 100px;
          }
        }
      }
    }
  }
`;

export default IssueListComponent;
