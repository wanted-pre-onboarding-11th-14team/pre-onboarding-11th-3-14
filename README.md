# 원티드 프리온보딩 인터쉽 11차 3주차 14팀 과제

<br />

![image](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/1c8eccee-5a37-46df-b810-d22fd375f4ba)

## ABOUT

<div align='center'>
    <p> GitHub REST API를 활용하여 <br/>특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 <br/> 웹 사이트를 구축하는 프로젝트 입니다 </p>
    <a href="http://wanted-11th-3-14-test.s3-website.ap-northeast-2.amazonaws.com/"><strong>배포 링크</strong></a>
     <!-- | <a href="https://www.notion.so/week3-0bac390c687a48f291d136d68b5fe71a"><strong>Notion</strong></a> -->
    <br />
    <br />
    <div style="text-align: center"> 2023.07.11 ~ 2023.07.14 </div>
</div>

## TEAM

<div align='center'>
<table> 
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/yun-sin"><img src="https://avatars.githubusercontent.com/u/99275134?v=4"width=100px;" alt=""/><br /><sub><b>장윤신(팀장)</b></sub></a><br /></td>
      <td align="center";><a href="https://github.com/AkoIsCat"><img src="https://avatars.githubusercontent.com/u/109052469?v=4" width="100px;" alt=""/><br /><sub><b>김은혜</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rondido"><img src="https://avatars.githubusercontent.com/u/55516901?v=4" width="100px;" alt=""/><br /><sub><b>박진현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jyhan14"><img src="https://avatars.githubusercontent.com/u/105530169?v=4" width="100px;" alt=""/><br /><sub><b>한지윤</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/codingjwp"><img src="https://avatars.githubusercontent.com/u/113403155?v=4" width="100px;" alt=""/><br /><sub><b>박재우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/khakaa"><img src="https://avatars.githubusercontent.com/u/73606877?v=4" width="100px;" alt=""/><br /><sub><b>박하린</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
</div>

<br />

## 기술 스택

- Development

  ![React](https://img.shields.io/badge/Create--React--App-5.0.1-20232A?logo=react)
  ![react-router-dom](https://img.shields.io/badge/react--router-6.14.1-CA4245?logo=reactRouter)
  ![typescript](https://img.shields.io/badge/typescript-4.9.5-007ACC?logo=typescript)
  ![styled-components](https://img.shields.io/badge/styled--components%2Fcss-1.12.0-28A745?logo=styled-components)
  ![axios](https://img.shields.io/badge/axios-1.4.0-%23671DDF?logo=axios&logoColor=%23671DDF)
  ![react-markdown](https://img.shields.io/badge/react--markdown-8.0.7-%23671DDF)

- Deploy
  ![aws s3](https://img.shields.io/badge/Amazon_S3--S?logo=amazonaws&logoColor=white)

## 폴더 구조

```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## 실행 방법

- 의존성 설치 및 husky 실행

```bash
npm install
```

- .env 생성

```bash
  process.env.REACT_APP_API_GITHUB_TOKEN="개인 github token"
```

- 시작

```bash
npm start
# or
npm run start
```

## 회의록

|   일 자    |           회 의 록           | 간 단 한 내 용                      |
| :--------: | :--------------------------: | ----------------------------------- |
| 2023.07.11 | [1차 회의](./1ST_MEETING.md) | 개발 환경, 기능 구현 체크, API 분석 |
| 2023.07.12 | [2차 회의](./2ND_MEETING.md) | Context API, 상세페이지, 이미지 등  |
| 2023.07.13 | [3차 회의](./3RD_MEETING.md) | 수정 사항 적용, 배포                |

## 서비스 소개

### 기능

- 특정 github repository의 issue 조회 (github API)
- 무한 스크롤
  - IntersectionObserver
- 5번째 목록마다 광고 표시

<br />

### 페이지

|                                                                    Issue List                                                                     |                                                                    Issue Item                                                                     |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![IssueList](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/0dc516ef-8979-4249-b383-03982cae7cd7) | ![IssueItem](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/d3ab67d0-f447-4bf1-be24-38d4f4d729d8) |

<br />

| Loading                                                                                                                                                                   | Error                                                                                                                                                                     | Closed Issue                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/f334dff1-18f3-4253-9dc0-0756dc41dcd8" width="150" height="100"/> | <img src="https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/4674e7a6-21ef-497e-9a56-a056383d4014" width="150" height="100"/> | <img src="https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/5c8003be-f48a-40e1-b661-c39891db36a1" width="150" height="100"/> |
