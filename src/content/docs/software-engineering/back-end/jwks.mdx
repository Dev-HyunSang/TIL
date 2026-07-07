# JWKS(JSON Web Key Set)

- JWT(JSON Web Token)는 웹 애플리케이션에서 인증 및 정보 교환을 안전하게 수행하기 위해 사용됨.
    - 많은 서비스에서 사용되고 있음.
- JWT는 자체적으로 정보를 담고 있으며, 일반적으로 사용자 식별 및 권한 정보를 포함함.
    - JWT는 통상적으로 사용자 인증, 사용자 정보에 사용되며, 웹 애플리케이션에서 안전한 인증을 위해 사용할 수 있는 도구임.

- JWT의 핵심은 서명을 통해 토큰의 무결성을 보장하는 것임. JWT의 서명에는 대칭 암호화(HMAC)와 비대칭 암호화(RSA, EC) 방식을 사용할 수 있음.
    - 대칭 암호화(HMAC) : 같은 비밀 키(Secret Key)를 사용하여 서명과 검증을 수행함.
        - 예시) HS256, HS384, HS512
    - 비대칭 암호화(RSA, EC) : 개인 키로 서명하고 공개 키로 검증함.
        - 예시) RS256, ES256

- 비대칭 암호화 방식을 사용할 경우, 클라인언트가 JWT의 서명을 검증할 수 있도록 JWT EndPoint를 제공하여 공개 키를 공유하기도 함.
    - 이때 사용하는 기술이 JWKS(JSON Web Key Set)임.

- JWKS는 JSON 형식으로 공개 키를 제공하는 표준 규격으로, 클라이언트를 이를 통해 JWT의 서명을 검증할 수 있음.

## JWKS는 무엇인가

### JWK vs JWKS

- **JWK(JSON Web Key)**
    - JSON 형식으로 표현된 단일 키(비대칭 키 쌍의 공개 키 또는 대칭 키)임.
    - JWK는 키의 식별자, 키 타입, 알고리즘 등과 같은 메타데이터를 포함함.
- **JWKS(JSON Web Key Set)**
    - JWKS는 JWK를 여러 개를 포함한 키의 집함임.
    - 보통 HTTPS를 통해 노출되는 엔드포인트에서 제공되며, 클라이언트는 이를 통해 JWT를 검증함.

### JWKS 구조

```json
{
  "keys": [
    {
      "kty": "EC",
      "crv": "P-256",
      "x": "MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4",
      "y": "4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM",
      "use": "enc",
      "kid": "1"
    },
    {
      "kty": "RSA",
      "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw",
      "e": "AQAB",
      "alg": "RS256",
      "kid": "2011-04-29"
    }
  ]
}
```

- JWKS는 JSON 배열 형태로 JWK의 집합을 나타냄. 각 JWK 객체는 다음과 같은 필드를 가질 수 있음.

- kty(key type)
    - 이 파라미터는 암호 알고리즘을 식별할 때 사용함. RSA, EC 같은 값을 갖는다.
    - ***필수요소***
- use(public key use)
    - 이 파라미터는 공개 키(public key) 사용 목적을 식별함. sig(signature), enc(encryption) 같은 값을 가짐.
    - ***선택요소***
- alg(algorithm)
    - 이 파라미터는 키와 함께 사용되는 알고리즘 정보를 식별할 때 사용함.
    - ***선택요소***
- kid(key id)
    - JWKS 객체에 담긴 JWKS 객체들은 자신을 구분할 수 있도록 서로 다른 kid 값을 가짐.
    - ***선택요소***
- 추가속성
    - kty과 alg에 따라서 추가로 필요한 속성 값이 다름.
    - RSA key type의 경우에는 n(public key modulus), e(exponent)가 추가로 필요하고 Base64URL로 인코딩된 값임.
    - EC key type의 경우엔 crv(curve type), x, y(coordinates)
    - ***선택요소***

### JWKS Endpoint

- JWKS는 보통 HTTPS를 통해 제공되며 클라이언트는 이를 활용하여 JWT를 검증함. 일반적으로 URL 형식은 아래와 같음.

```
https://<server_domain>/.well-known/jwks.json
```

- RSA 공개 키, 개인 키 생성하는 방법
    - 비대칭 암호화로 RSA를 사용함. 공개 키와 개인 키를 생성하기 위해 `openssl`를 사용한다.

```shell
openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
```

- 위 명령어를 통해 개인 키가 생성되었음. 개인 키에서 아래와 같은 명령어를 사용하여 공개키를 추출함.

```shell
openssl rsa -pubout -in private.key -out public.key
```

### JWKS 생성

- JWKS 생성은 [JWKSet 라이브러리](https://github.com/MicahParks/jwkset)를 사용하여 쉽게 구현 가능함.
     - API Endpoint로 구현은 하지 않음. 간단한 예제로 unit test 형식으로 작성함.

```golang
func (suite *jwksTestSuite) generateJWKS() (jwkset.JWKSMarshal, error) {
	pubKey, err := parsePublicKey(suite.publicKey)
	if err != nil {
		return jwkset.JWKSMarshal{}, err
	}

	jwk, err := jwkset.NewJWKFromKey(pubKey, jwkset.JWKOptions{
		Marshal: jwkset.JWKMarshalOptions{
			Private: false,
		},
		Metadata: jwkset.JWKMetadataOptions{
			USE: jwkset.UseSig,
		},
	})
	if err != nil {
		return jwkset.JWKSMarshal{}, err
	}

	if err := suite.jwkCache.KeyWrite(suite.ctx, jwk); err != nil {
		return jwkset.JWKSMarshal{}, err
	}

	jwkMarshal, err := suite.jwkCache.Marshal(suite.ctx)
	if err != nil {
		return jwkset.JWKSMarshal{}, err
	}
	return jwkMarshal, nil
}
```
- 파싱된 공개 키로부터 jwkset.NewJWKFromKey 함수를 사용하여 JWK를 생성함.
    - . 생성된 JWKS를 메모리 내 JWK cache에 저장하고 marshal 하여 데이터를 반환하는 코드임.

```json
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "n": "ueE7_FhlT2gYKB8AQEjhBHpB-yS93P5TUUlVFgeI4sWZ7tnpAtrOj15WzVpOEU11hFYq1-UzEwFZI2DJQ7WOJIF9Ry63hXUTV5TZTBZoNfUAV7aaQV5G8YK6CXc6kBpghOoYcABjy0KvLUe6STU2tXPaFoASJq9MVgMZ_FpwKQrGoHHq4WQqpfu9wEnxaHu1qFYDQCAAqApoJSVeBrkVZR98hbQf0G53JbLyUZkzd6toNbCdUuOjzC7aq5ZP1GIDsNsRooUjrkE4TQjDznl0O6l8bmzOLqYcDimMPYRYtmVh_5U6uWmCLOmtp2ErQRaXovkDq-7mpb-zCSaec3HVzw",
      "e": "AQAB"
    }
  ]
}
```

## 참고한 글

- [JSON Web Key Sets](https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-key-sets)
- [JWKS(JSON Web Key Set)이란?](https://blog.advenoh.pe.kr/jwks-json-web-key-set%EC%9D%B4%EB%9E%80/) 