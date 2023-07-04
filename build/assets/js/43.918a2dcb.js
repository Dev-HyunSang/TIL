(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{323:function(_,v,e){"use strict";e.r(v);var t=e(14),o=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_20230430-명령줄-애플리케이션-구축"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20230430-명령줄-애플리케이션-구축"}},[_._v("#")]),_._v(" 20230430 - 명령줄 애플리케이션 구축")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://udemy.com/course/rust-building-application",target:"_blank",rel:"noopener noreferrer"}},[_._v("Rust : 실제 애플리케이션 구축을 통한 Rust 완벽 정복"),v("OutboundLink")],1),_._v("을 보면서 공부한 내용들을 기록한 내용임.")])]),_._v(" "),v("h2",{attrs:{id:"기본적인-데이터-유형-basic-data-types"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기본적인-데이터-유형-basic-data-types"}},[_._v("#")]),_._v(" 기본적인 데이터 유형(Basic Data Types)")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Boolean - 블리언")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("bool")]),_._v(" → "),v("code",[_._v("true")]),_._v(", "),v("code",[_._v("false")])]),_._v(" "),v("li",[v("code",[_._v("1byte")]),_._v(" 크기이며, bool 키워드를 통해서 선언 가능.")])])]),_._v(" "),v("li",[v("strong",[_._v("Characters - 문자")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("char")]),_._v(" → 하나의 유니코드 값을 가짐.")]),_._v(" "),v("li",[v("code",[_._v("4byte")]),_._v(" 크기임. 예를 들어서 ASCII 문자 집합을 "),v("code",[_._v("char")]),_._v("로 저장하게 된다면 메모리 낭비임.")])])]),_._v(" "),v("li",[v("strong",[_._v("Integers - 정수")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("u8")]),_._v(", "),v("code",[_._v("i8")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("u")]),_._v("는 무부호 정수(양수) → 부호가 없는 정수")]),_._v(" "),v("li",[v("code",[_._v("i")]),_._v("는 유부호 정수(양수 or 음수) → 부호가 있는 정수")]),_._v(" "),v("li",[v("code",[_._v("8bit")]),_._v(" → "),v("code",[_._v("1byte")]),_._v(" / in Rust 128bit ok!")])])]),_._v(" "),v("li",[v("code",[_._v("u16")]),_._v(", "),v("code",[_._v("i16")])]),_._v(" "),v("li",[v("code",[_._v("u32")]),_._v(", "),v("code",[_._v("i32")])]),_._v(" "),v("li",[v("code",[_._v("u64")]),_._v(", "),v("code",[_._v("i64")])]),_._v(" "),v("li",[v("code",[_._v("u128")]),_._v(", "),v("code",[_._v("i128")])]),_._v(" "),v("li",[v("code",[_._v("usize")]),_._v(", "),v("code",[_._v("iszie")]),_._v(" "),v("ul",[v("li",[_._v("아키텍쳐에 종속된 타입,")]),_._v(" "),v("li",[_._v("32비트 아키텍쳐 환경에서는 32bit, 64bit")])])])])]),_._v(" "),v("li",[v("strong",[_._v("Floats - 부동 소수점")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("f32")]),_._v(", "),v("code",[_._v("f64")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("f64")]),_._v(" → "),v("code",[_._v("f32")]),_._v("보다 2배의 정밀도를 갖고 있음.")])])])])])]),_._v(" "),v("h3",{attrs:{id:"함수-function"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#함수-function"}},[_._v("#")]),_._v(" 함수(Function)")]),_._v(" "),v("ul",[v("li",[_._v("Rust에서는 함수를 선언하기 위해서는 키워드 "),v("code",[_._v("fn(){}")]),_._v("을 사용해야함.\n"),v("ul",[v("li",[_._v("특별한 점은 없고, 선언과정은 다른 프로그래밍 언어와 동일함.")])])]),_._v(" "),v("li",[_._v("Rust에서는 함수와 변수를 선언할 때 "),v("strong",[_._v("스케이크 케이스(Snake Case)")]),_._v(" 를 사용함.\n"),v("ul",[v("li",[v("strong",[_._v("Ex)")]),_._v(" "),v("code",[_._v("fn hello_world(){}")])]),_._v(" "),v("li",[_._v("표기법에 대해서 더 정확한 내용을 알고 싶다면 "),v("a",{attrs:{href:"https://velog.io/@leyuri/%ED%91%9C%EA%B8%B0%EB%B2%95-%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%ED%8C%8C%EC%8A%A4%EC%B9%BC-%EC%BC%80%EC%9D%B4%EC%8A%A4-%EC%B9%B4%EB%A9%9C-%EC%BC%80%EC%9D%B4%EC%8A%A4",target:"_blank",rel:"noopener noreferrer"}},[_._v("표기법 - 스네이크 케이스, 파스칼 케이스, 카멜 케이스"),v("OutboundLink")],1),_._v("를 살펴보길 바람.")])])]),_._v(" "),v("li",[v("strong",[_._v("반환문:")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("return 50.0")]),_._v(" 혹은 "),v("code",[_._v("50.0")]),_._v("만 적어도 반환이 됨.\n"),v("ul",[v("li",[_._v("암묵적으로 반환할 수 있도록 함.")])])])])])]),_._v(" "),v("h3",{attrs:{id:"매크로-macro"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#매크로-macro"}},[_._v("#")]),_._v(" 매크로(Macro)")]),_._v(" "),v("ul",[v("li",[_._v("매크로(Macro) → "),v("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D",target:"_blank",rel:"noopener noreferrer"}},[_._v("메타 프로그래밍(Metaprogramming)"),v("OutboundLink")],1),_._v("의 줄임말.")]),_._v(" "),v("li",[_._v("변수, 다수의 매개변수 그리고 매번 다른 유형으로 처리될 수 있음. 효율적인 방법.")]),_._v(" "),v("li",[_._v("매크로의 단점은 매크로를 정의하는 것이 함수 정의보다 더 복잡하다는 점."),v("br"),_._v("\n결론적으로는 "),v("strong",[_._v("더 많은 Rust 코드를 작성하는 Rust 코드를 작성하기 때문이고 이것은 읽고 관리하기 훨씬 더 어렵습니다.")])]),_._v(" "),v("li",[v("code",[_._v("println()!")]),_._v("가 매크로인 이유는 다수의 인수를 받고 있기 때문임. 단일 문자열로 호출할 수 있고, 중괄호를 포함하는 문자열로 호출 될 수도 있음.\n"),v("ul",[v("li",[v("strong",[_._v("Ex)")]),_._v(" "),v("code",[_._v('println!("Nubmer: {}, String:{}, 100, "Hello")')])])])]),_._v(" "),v("li",[_._v("더 많은 Rust 코드로 확장되는 방법을 더 잘 이해하고 싶다면 "),v("a",{attrs:{href:"https://github.com/dtolnay/cargo-expand",target:"_blank",rel:"noopener noreferrer"}},[v("code",[_._v("cargo-expand")]),v("OutboundLink")],1),_._v("를 사용하면 됨.")])])])}),[],!1,null,null,null);v.default=o.exports}}]);