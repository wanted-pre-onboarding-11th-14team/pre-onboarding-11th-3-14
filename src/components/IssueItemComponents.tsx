import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

interface IssueItemComponentProps {
  data: any;
  date: Date;
}

const IssueItemComponents: React.FC<IssueItemComponentProps> = memo(({ data }) => {
  const [year, month, day] = new Date(data?.created_at).toLocaleDateString('ko-KR').split('.');

  return (
    <div>
      <h1>IssueItem</h1>
      <div>
        <img src={data?.user.avatar_url} alt='프로필 사진' />
      </div>
      <div>
        #{data?.number} {data?.title}
      </div>
      <div>
        작성자: {data?.user.login}, 작성일:
        {year}년 {month}월 {day}일
      </div>
      <div>코멘트: {data?.comments}</div>
      <br />
      <div>
        <ReactMarkdown>{data?.body}</ReactMarkdown>
      </div>

      <div></div>
    </div>
  );
});

export default IssueItemComponents;
