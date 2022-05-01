<p align="center">
  <img width="75%" src="https://user-images.githubusercontent.com/42988225/166141884-922cdb67-dbbb-4bc4-a9cf-db33d52ad0e1.png"/>
</p>

장점
구체적인 단일 요청으로 필요한 데이터만 받아올 수 있음
강력한 개발자 도구(Playground)를 지원

RESTful은 굳이 불필요한 영역까지 요청하게 됨
/users GET으로 요청하면 필요없는 정보도 얻음 (가령 나이와 관련된 정보가 필요없을 때)
이런 것을 Over-Fetching이라 함

하지만 GraphQL은 우리가 사용할 만큼의 데이터만 요청할 수 있음

GraphQL로 해결할 수 있는 문제

1. Over-Fetching (불필요한 정보까지 요청하는 것)
2. Under-Fetching (하나의 화면을 구성하기 위해 많은 소스 /users, /feed 등등를 요청하는 것)

하나의 쿼리로 관리할 수 있으며, 요청에 따른 결과만 자바스크립트 객체로 내려줌

Request

```graphql
query {
  feed {
    comments
    likeNumber
  }
  notifications {
    ...
  }
  user {
    ...
  }

  ...
}
```

Response

```javascript
{
  feed: {
    comments: 1,
    likeNumber: 20
  },
  notifications: [
    { id: 1 },
    { id: 2 }
  ],
  user: {
    name: 'NoHack'
  }
}
```

프로젝트 Dependencies

graphql-yoga
graphql
apollo-server

간단한 API

리액트와 연결

몽고DB와 연결

아폴로 서버

**스키마(Schema)**

어떤 데이터가 오고 갈지 정의하는 것

쿼리: 정보 요청

뮤테이션: 정보 변경

**리졸버(Resolver)**
