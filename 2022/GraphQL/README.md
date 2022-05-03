# GraphQL

GraphQL은 페이스북에서 개발한 API를 위한 쿼리 언어이며, REST API의 단점을 보완한다.

대표적으로 REST API에서 발생하는 문제인 두 가지 문제를 해결 가능하다.

**Over-fetching (불필요한 데이터까지 요청하는 것)**

```graphql
# REST API에서 1번 user의 정보를 요청하는 경우
GET /users/1
{
  id: 1,
  name: 'NoHack',
  age: 29
}

# name만 필요한 경우, GraphQL에서는 구체적으로 요청 가능
query {
  user(id: 1){
    name
  }
}
```

**Under-fetching (여러 Endpoint에 요청을 보내는 것)**

```grahql
# REST API에서는 한 화면을 구성하기 위해 많은 Endpoint에 요청하게 됨
GET /posts
GET /notices
GET /user/1

# GraphQL은 Endpoint가 오직 하나
query {
  posts {
    id
    title
  }
  notices {
    id
    title
  }
  user(id: 1){
    name
  }
}
```

하지만 단점 또한 존재한다.

- 재귀적인 요청이 어렵다.
- 항상 고정적인 요청을 하는 경우 기존 REST API보다 요청 크기가 클 수 있다.
- 파일 업로드와 같은 경우 명세를 참고한 개발이 필요하다.

## 알아두고 넘어가기

**용어**

1. 스키마(Schema): 데이터 명세(타입\_type)
2. 리졸버(Resolver): 호출 시 행할 행동이 담긴 객체(스키마와 연결)

```graphql
# Schema
query {
  hello: String
  ping: String
}

# Resolver
{
  Query: {
    hello: () => "Hello World!",
    ping: () => "pong!"
  }
}
```

**작업 종류**

1. 쿼리(Query): 데이터를 요청하는 작업
2. 뮤테이션(Mutation): 기존 데이터를 수정하는 작업

> GraphQL은 요청 형태에 따라 작업 종류가 다르다.

## 프로젝트

- [영화 API - 백엔드](./project/movie-api-node/)
- [영화 API - 프런트엔드](./project/movie-api-react/)
