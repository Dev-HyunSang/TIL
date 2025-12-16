# Web Hacking

## 공격기법

### SQL Injection

- [[Special Report] 웹 취약점과 해킹 매커니즘 #5 Blind SQL Injection](https://www.fis.kr/ko/major_biz/cyber_safety_oper/attack_info/security_news?articleSeq=2568)
- [OWASP - SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)

### XSS, Cross-site scripting

- [XSS 공격을 직접 해보면서 알아보기(dangerouslySetInnerHTML는 얼마나 위험할까?)](https://dj-min43.medium.com/xss-%EA%B3%B5%EA%B2%A9%EC%9D%84-%EC%A7%81%EC%A0%91-%ED%95%B4%EB%B3%B4%EB%A9%B4%EC%84%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-c2c1d9baf7ec)

### SSTI, Server Side Template Injection

- [웹 템플릿 엔진 기반의 SSTI 취약점 분석](https://www.igloo.co.kr/security-information/%EC%9B%B9-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%97%94%EC%A7%84-%EA%B8%B0%EB%B0%98%EC%9D%98-ssti-%EC%B7%A8%EC%95%BD%EC%A0%90-%EB%B6%84%EC%84%9D/)
- [[Research & Technique] SSTI & Atlassian Confluence RCE Vulnerability (CVE-2023-22527)](https://blog.naver.com/sk_shieldus/223387962790)
- [Thymeleaf 환경의 SSTI 공격사례 및 대응 방안: Template fragment와 CVE-2023-38286기반의 SSTI](https://www.igloo.co.kr/security-information/thymeleaf-%ED%99%98%EA%B2%BD%EC%9D%98-ssti-%EA%B3%B5%EA%B2%A9%EC%82%AC%EB%A1%80-%EB%B0%8F-%EB%8C%80%EC%9D%91-%EB%B0%A9%EC%95%88-template-fragment%EC%99%80-cve-2023-38286%EA%B8%B0%EB%B0%98%EC%9D%98-ss/)

## File Inclusion

- [File Inclusion](https://www.hahwul.com/cullinan/attack/file-inclusion/)

### LFI, Local File Inclusion

- [[취약점] File Inclusion 취약점: LFI (Local File Inclusion)](https://mnzy.tistory.com/128)

### RFI, Remote File Inclusion

### RCE, Remote Code Execution

### WebShell

### EL(Expression Language) Injection at Java Spring

- [EL Injection](https://www.hahwul.com/cullinan/attack/el-injection/)
- [Expression Language Injection](https://owasp.org/www-community/vulnerabilities/Expression_Language_Injection)
- [EL inejection in Spring framework](https://gist.github.com/benelog/4582041)
- [Stefano Di Paola 등의 Expression Language Injection 보고서](https://docs.google.com/document/d/1dc1xxO8UMFaGLOwgkykYdghGWm_2Gn0iCrxFsympqcE/)

### IDOR(Insecure Direct Object References) Attack

- [IDOR Attack](https://www.hahwul.com/cullinan/attack/idor/)

### WAF(Web Application Firewall) ByPass

- [AI 보조 WAF 우회: 공격 자동화 시나리오(심화·공격자 관점)](https://blog.plura.io/ko/tech/ai-waf-bypass/)

## Black box testings

- [Black box testing basics](https://snyk.io/articles/application-security/testing/black-box-testing/)
- [Black Box Testing](https://www.imperva.com/learn/application-security/black-box-testing/)
- [What is Black Box Testing? Techniques, Types and Examples](https://www.qatouch.com/blog/black-box-testing/)

## CVE 관련

### in Python

- [Arbitrary Code Execution in Pillow / CVE-2023-50447](https://duartecsantos.github.io/2024-01-02-CVE-2023-50447/)
  - [AhnLab - python pillow 패키지 보안 업데이트 권고 (CVE-2023-50447, CVE-2022-22817)](https://www.ahnlab.com/ko/contents/asec/advice/3176)

### in Java Spring

- [Spring 제품 보안 업데이트 권고(CVE-2024-38816)](https://asec.ahnlab.com/ko/83234/)
  - [NIST - CVE-2024-38816](https://nvd.nist.gov/vuln/detail/cve-2024-38816)
  - [Spring - CVE-2024-38816: Path traversal vulnerability in functional web frameworks](https://spring.io/security/cve-2024-38816)

### in JavaScript/TypeScript(Vue.js or React)

## Search Tools

- [Metasploit](https://www.metasploit.com/)
- [SearchSploit](https://www.exploit-db.com/searchsploit)
  - [[칼리리눅스 모의 해킹] 13. 취약점 평가 - Searchsploit 활용 컴퓨터 취약점 찾기(nmap 연계)](https://blog.naver.com/snova84/223455117407)
- [OWASP Depndency-Check](https://owasp.org/www-project-dependency-check/)
  - `dependency-check.sh --project "MyWebApp" --scan .`
- [trivy](https://trivy.dev/latest/)

## Tools

- [ZAP](https://www.zaproxy.org/)
  - [OWASP-ZAP 도구](https://sheow13.tistory.com/65)
- [sqlmap](https://sqlmap.org/)
  - [sqlmap: SQL 인젝션 테스트 자동화 툴](https://wikidocs.net/228053)
- [nmap](https://nmap.org/)
  - [[Network/Tools] NMAP 정의 및 설치/사용법](https://musclebear.tistory.com/105)
