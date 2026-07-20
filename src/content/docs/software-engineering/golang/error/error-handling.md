---
title: "효율적인 오류 핸들링"
---

- Go언어를 사용해서 개발을 하다보면 어떻게 하면 효율적으로 오류 핸들링을 할 수 있을지가 의문이었음.
- 어디까지 오류를 반환하여야 하고, 이러한 반환된 오류를 어떻게 사용자 혹은 서버 로그 상으로 남겨야할지, 그리고 이러한 오류들을 어떻게 해결해야할지 등 수많은 궁금증과 의문점이 남았고, 이러한 의문과 궁금증을 해결하기 위해 작성함.
- 본 문서를 작성하며 참고한 문서는 아래와 같음.
  - [A concise guide to error handling in Go](https://medium.com/@andreiboar/a-concise-guide-to-error-handling-in-go-611a42e589ad)
  - [Golang으로 백엔드 개발하기 - 5. Error Handling. 에러 잘 처리하기 (feat. fiber)](https://umi0410.github.io/blog/golang/how-to-backend-in-go-errorhandle/)
  - [[Go] Error 처리는 어떻게 해야할까?](https://velog.io/@curiosity806/Go-Error-%EC%B2%98%EB%A6%AC%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C)
    - [Don’t just check errors, handle them gracefully](https://dave.cheney.net/2016/04/27/dont-just-check-errors-handle-them-gracefully)

## 기존의 나의 방식

- 아래와 같은 방법으로 오류를 처리하고 있음.
  - 공식 오류 패키지 및 커스텀한 패키지들을 통해서 오류를 정의함.
  - 만약 API 관련 문제인 경우 `StatusCode`마다 오류 메시지를 정의하여 오류를 처리함.

```go

```
