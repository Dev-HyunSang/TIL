(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(t,a,s){t.exports=s.p+"assets/img/01.ad0f08e8.png"},275:function(t,a,s){t.exports=s.p+"assets/img/02.1f897360.png"},276:function(t,a,s){t.exports=s.p+"assets/img/03.48f09c0f.png"},277:function(t,a,s){t.exports=s.p+"assets/img/04.559c54e3.png"},302:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" DataBase")]),t._v(" "),a("h2",{attrs:{id:"table-of-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[t._v("#")]),t._v(" Table of Content")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#database"}},[t._v("DataBase")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#uuid-to-bin"}},[t._v("UUID to BIN")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#docker%EC%99%80-ide-database-table-%EA%B0%84%EC%9D%98-%EC%8B%9C%EA%B0%84%EC%9D%B4-%EB%A7%9E%EC%A7%80-%EC%95%8A%EC%95%84%EC%9A%94%E3%85%A0"}},[t._v("Docker와 IDE DataBase Table 간의 시간이 맞지 않아요...ㅠ")])])])])]),t._v(" "),a("h2",{attrs:{id:"uuid-to-bin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid-to-bin"}},[t._v("#")]),t._v(" UUID to BIN")]),t._v(" "),a("p",[t._v("UUID를 Binary 타입으로 넣기 위해서는 MySQL 자체적으로 있는 함수인 "),a("code",[t._v("UUID_TO_BIN()")]),t._v("를 사용하면 됩니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("관련 자료:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://remarkablemark.org/blog/2020/05/21/mysql-uuid-bin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL: convert between UUID and binary"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mysqlcode.com/mysql-uuid_to_bin-and-bin_to_uuid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL UUID_TO_BIN and BIN_TO_UUID Functions"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid-to-bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("12.23 Miscellaneous Functions"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nickname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" edited_at\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UUID_TO_BIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"docker와-ide-database-table-간의-시간이-맞지-않아요-ᅲ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker와-ide-database-table-간의-시간이-맞지-않아요-ᅲ"}},[t._v("#")]),t._v(" Docker와 IDE DataBase Table 간의 시간이 맞지 않아요...ㅠ")]),t._v(" "),a("p",[t._v("GoLand와 MySQL(on Docker)를 기준으로 합니다."),a("br"),t._v("\nGoLand에서 데이터베이스를 접속한 경우 데이터베이스 설정에서 "),a("code",[t._v("Advanced")]),t._v("에서 "),a("code",[t._v("serverTimezone")]),t._v("에서 "),a("code",[t._v("Asia/Seoul")]),t._v("를 추가해 주시면 정상적으로 올바른 시간이 나오게 됩니다.")]),t._v(" "),a("p",[t._v("추가적으로 데이터베이스 상에서 데이터베이스 "),a("code",[t._v("time_zone")]),t._v("을 설정해 주시면 한국(서울) 기준을 설정하실 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GLOBAL")]),t._v(" time_zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Seoul'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" time_zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Seoul'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@global.time_zone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@session.time_zone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@global.time_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@session.time_zone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Asia"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Seoul         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Asia"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Seoul          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:s(274),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(275),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(276),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(277),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"scan-error-on-column-index-5-name-created-at-unsupported-scan-storing-driver-value-type-uint8-into-type-time-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scan-error-on-column-index-5-name-created-at-unsupported-scan-storing-driver-value-type-uint8-into-type-time-time"}},[t._v("#")]),t._v(' Scan error on column index 5, name "created_at": unsupported Scan, storing driver.Value type []uint8 into type *time.Time')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<account>:<password>@tcp(adr)/<database>\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<account>:<password>@tcp(adr)/<database>?parseTime=true\n")])])]),a("p",[a("code",[t._v("?parseTime=true")]),t._v("를 추가적으로 입력해 주면 정상적으로 불러와집니다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/45040319/unsupported-scan-storing-driver-value-type-uint8-into-type-time-time",target:"_blank",rel:"noopener noreferrer"}},[t._v("unsupported Scan, storing driver.Value type []uint8 into type *time.Time"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);