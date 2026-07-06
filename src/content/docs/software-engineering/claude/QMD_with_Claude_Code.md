# QMD(Query Markup Documents) with Claude Code

Claude Code를 사용하면서 아래와 같은 궁금증이 생김.

1. 어떻게 하면 효율적으로 Claude Code를 사용하면서 있었던 내용들을 기록할 수 있을지
2. Obsidian으로 문서를 확인하고 수정할 수 있는 방식이었으면 좋겠음

해당 문서는 다음의 문서를 참조하여 작성되었음.

- [QMD(Query Markup Documents): 로컬 환경을 위한 의미 기반의 작고 가벼운 지식 검색 엔진](https://discuss.pytorch.kr/t/qmd-query-markup-documents/9158)
- [Query Markup Documents (QMD)](https://thinkingsian.com/QMD/)

## 검색의 종류와 Semantic Search

- 파일 검색 방식은 두 가지로 나눌 수 있음.
    - `Lexical search` 검색어가 포함된 것을 검색함. 윌에게 직관적으로 떠오르는 것들을 검색할 때 사용하는 방식임. `BM25`가 대표적임.
    - `Semantic search` 검색어와 의미가 비슷한 것을 검색함. 의미로 검색한다는 것엔 여러 방식이 있겠지만 `Personal Knowledge Management`에서 주로 다루는 방식에선 `embedding model`을 사용한 방식이라고 보면 됨.

## 어떻게 설정했는가?

