import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';

interface IssueItemComponentProps {
  data: any;
  date: Date;
}

const IssueItemComponents: React.FC<IssueItemComponentProps> = memo(({ data }) => {
  const [year, month, day] = new Date(data?.created_at).toLocaleDateString('ko-KR').split('.');

  return (
    <IssueItemContainer>
      <div className='userInfo'>
        <div className='userProfile'>
          <img src={data?.user.avatar_url} alt='프로필 사진' />
        </div>
        <div className='userInfoCenter'>
          <div className='title'>
            #{data?.number} {data?.title}
          </div>
          <div className='writer'>
            작성자: {data?.user.login}, 작성일:
            {year}년 {month}월 {day}일
          </div>
        </div>
        <div className='comment'>코멘트: {data?.comments}</div>
      </div>
      <br />
      <div className='markdown'>
        <ReactMarkdown children={data?.body} remarkPlugins={[remarkGfm]}></ReactMarkdown>
      </div>

      <div></div>
    </IssueItemContainer>
  );
});

const IssueItemContainer = styled.div`
  padding: 30px;

  .userInfo {
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;

    .userProfile {
      margin-right: 10px;
      img {
        width: 150px;
      }
    }

    .userInfoCenter {
      width: 60%;
      padding-top: 10px;

      .title {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .writer {
        font-size: 20px;
      }
    }

    .comment {
      height: 100px;
      line-height: 100px;
      margin-right: 20px;
    }
  }

  .markdown {
    width: 100%;
    word-wrap: break-word;

    img {
      max-width: 100%;
    }

    code {
      display: inline-block;
      padding: 3px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.1);
      color: red;
    }
  }
`;

export default IssueItemComponents;
