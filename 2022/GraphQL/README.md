# GraphQL

GraphQL은 페이스북에서 개발한 쿼리 언어이며, 기존 REST API의 단점을 보완하기 위해 만들어졌다. REST API에서는 End-Point가 여러 곳에 존재하기에 하나의 화면을 구성하기 위해 많은 요청(Under-fetching)이 필요한데, GraphQL은 단 하나의 End-Point만 존재하기에 단 한 번의 요청으로 원하는 정보를 모두 가져올 수 있다.

GraphQL은 앞서 언급한 Under-fetching과 더불어 불필요한 데이터까지 요청하게 되는 Over-fetching 문제까지 해결할 수 있다. 다음의 REST API 예시를 보면서 어떤 문제가 있고, 이 문제를 어떻게 해결하는지 살펴보자.

```javascript
// GET /users/1
// (ID가 1인 유저 조회)

{
  id: 1;
  name: NoHack;
  age: 29;
}
```

REST API를 통해 특정 사용자를 요청하게 되면 스키마(Schema)에 따라 정의되어 있는 모든 데이터를 반환 받는다. 사용자의 이름(name)만 필요한 경우라 하더라도, 우리는 불필요한 나이(age)도 받게 되는 것이다. 이렇게 불필요한 정보까지 받게 되는 것을 **Over-Fetching**이라 한다. GraphQL에서는 구체적으로 기술된 단일 요청에 의해 필요한 데이터만 받을 수 있다.

```graphql
{
  user(id: 1) {
    name
  }
}
```

### 작업 타입

- 쿼리(Query): 데이터 요청
- 뮤테이션(Mutation): 데이터 변경
- 구독(Subscription):

> 쿼리 필드는 병렬로 수행되지만, 뮤테이션은 하나씩 순차적으로 실행된다.

### 데이터 타입

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

  > graphql-yoga는 GraphQL 서버 설치를 간단하게 할 수 있도록 도와주는 패키지

**[영화 API 프런트엔드](./project/movie-api-react/)**

- 위에서 만든 백엔드를 사용하여 API를 요청하고, 받아온 데이터로 화면 구성
- 프런트에 apollo-client를 설치해 간단하게 GraphQL 요청을 할 수 있도록 함

  > apollo-client는 GraphQL에 API를

아폴로 서버

**스키마(Schema)**

어떤 데이터가 오고 갈지 정의하는 것

쿼리: 정보 요청

뮤테이션: 정보 변경

**리졸버(Resolver)**
