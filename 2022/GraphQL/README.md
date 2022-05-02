# GraphQL

GraphQL은 페이스북에서 개발한 쿼리 언어이며, 기존 REST API의 단점을 보완하기 위해 만들어졌다고 한다. REST API에서는 End-Point가 여러 곳 존재하여 요청이 많아질 수 있는데, GraphQL은 단 하나의 End-Point만 존재하기에 단 한 번의 요청으로 원하는 정보를 모두 가져올 수 있다.

장점부터 조금 나눠 정리하면 다음과 같다.

**장점**

- 단일 요청으로 필요한 데이터만 받아올 수 있음 (구체적으로 기술)
- 강력한 개발자 도구(Playground) 지원

REST API는 굳이 불필요한 데이터까지 요청하게 된다.

```
-- ID가 1인 유저 조회
GET /users/1

{
  id: 1
  name: NoHack
  age: 29
  ...
}
```

REST API를 통해 특정 사용자를 요청하게 되면 스키마(Schema)에 따라 정의되어 있는 모든 데이터를 반환받게 된다. 가령 name만 필요한 경우라 하더라도, 우리는 불필요한 age 값도 받게 되는 것이다. 이렇게 불필요한 정보까지 받게 되는 것을 **Over-Fetching**이라 한다.

GraphQL에서는 구체적으로 기술된 단일 요청에 의해 필요한 데이터만 받을 수 있다.

```graphql
-- ID가 1인 유저의 name 조회
{
  user(id: 1){
    name
  }
}
```

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

## 진행 프로젝트

**[영화 API 백엔드](./project/movie-api-node/)**

- graphql-yoga를 사용해 간단한 GraphQL API 서버 구축

  > graphql-yoga는 GraphQL 서버 설치를 간단하게 할 수 있도록 도와주는 패키지이다.

**[영화 API 프런트엔드](./project/movie-api-react/)**

- 위에서 만든 백엔드를 사용하여 API를 요청하고, 받아온 데이터로 화면 구성

아폴로 서버

**스키마(Schema)**

어떤 데이터가 오고 갈지 정의하는 것

쿼리: 정보 요청

뮤테이션: 정보 변경

**리졸버(Resolver)**
