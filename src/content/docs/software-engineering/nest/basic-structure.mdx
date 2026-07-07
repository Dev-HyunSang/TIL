# Nest 기본 구조 이해

## 1. Module

- 모듈은 API 하나당 적어도 하나의 모듈이 존재하고 각 객체들이 자동으로 주입될 수 있도록 어플리케이션 구조를 받혀주는 요소임.
    - Nest.js가 싱글톤 패턴을 지향하기 때문에 인스턴스를 직접 생성하지 않고 모듈을 통해서 Injectio 하는 패턴을 권장하고 있음.
        - 싱글톤 패턴(Singleton Pattern)은 디자인 패턴 중에 하나로, 클래스의 객체를 한개만 생성해서 그 객체만을 사용하는 패턴임.

#### 기본적인 형태

```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
 imports: [DogModule],
 controllers: [CatsController],
 providers: [CatsService, ExternalService],
 exports: [CatsService, DogModule]
})
export class CatsModule {}
```

- `imports` : 다른 모듈에서 export한 모듈을 현재 모듈에서 사용할 목록
- `controllers` : 이 모듈에서 사용한 컨트롤러
- `providers` : 이 모듈에서 사용하며 인스턴스화시킬 서비스(Provider)
- `exports` : 이 모듈에서 제공하는 Providers 중 외부의 다른 모듈에서 사용할 수 있도록 할 서비스(Provider)

### 모듈의 종류

1. 기능 모듈 : 같은 도메인에 속하며 밀접하게 관련 있는 요소들을 모아놓은 모듈
2. 공유 모듈 : 싱글톤 특성을 적용하여 여러 모듈 간 쉽게 공통 모듈을 사용할 수 있도록 하는 모듈 - `DatabaseModule`


## 2. Controller

- 클라이언트 입장에서 사용할 API에 대하여 Route 수행해주는 Annotation임.

### 기본적인 형태

```ts
import { Controller, Get, POST } from '@nestjs/common';

@Controller('cats')
export class CatsController {

 @Get()
 findAll() {
  return 'This action returns all cats';
 }

 @POST()
 createCat(){
  return 'This action create cat'
 }
}
```

## 3. Provider

- Nest.js에서 사용하는 대부분의 비즈니스 로직이 적용된 서비스 객체임.
    - Provider는 Nest 런타임 시스템에 기능을 위임하며 주입함.

### 기본적인 형태

```ts
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
 private readonly cats: Cat[] = [];

 create(cat: Cat) {
  this.cats.push(cat);
 }

 findAll(): Cat[] {
  return this.cats;
 }
}
```

### 대표적인 특징 : Dependency Injection

```ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
 constructor(private readonly catsService: CatsService) {}

 @Post()
 async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
 }

 @Get()
 async findAll(): Promise<Cat[]> {
  return this.catsService.findAll();
 }
}
```

- constructor 상에서 private readonly을 사용하며 의존성을 주입하며 해당 인스턴스를 사용할 수 있게 됨.

## 4. Dependency Injection과 Inversion of Control(IoC)

- IoC는 제어 역전이라는 의미로서, 개발자가 아닌 프레임워크가 제어한다는 의미를 가짐.
- Dependency Injection란 프레임워크가 주체가 되어 개발자가 필요한 클래스들을 대신 관리해주는 의미를 가짐.

### 생성자 기반 주입 (Constructor-based Injection)

```ts
class AppController {
	constructor(private readonly appService: AppService) {}
}
```

### 속성 기반 주입 (Property-based Injection)

```ts
class AppController {
	@Inject('APP_SERVICE') // key
	private readonly appService: AppService; // value
}
```

## 5. useValue vs useClass vs useFactory

- Custom Provider를 사용할 수 있게 도입된 요소로 기존에 Service Class 뿐만 아니라 동적으로 만든 여러 객체나 함수들을 사용하고 주입할 수 있도록 제공함.

### useValue 사용법

- `useValue` 구문은 상수 값을 정의하거나 외부 라이브러리를 Nest 컨테이너에 넣거나 실제 구현을 모의 객체로 대체 할 때 유용함.
    - `useValue`는 key, value로 구성된 요소로 value에는 주입하고자 하는 Provider를 넣고 key에는 value를 대표하는 이름 값을 넣는 것임.

```ts
// ========= useValue를 활용한 provider 주입 =========
import { connection } from './connection';

@Module({
  providers: [{
      provide: 'CONNECTION',
      useValue: connection, // object, const
    }, {
      provide: 'MASTER_NAME',
      useValue: 'KGH'
    }],
})
export class AppModule {}

// ========= class 에서 주입하기 =========
// 1. DI 방식
@Injectable()
export class CatsRepository {
  constructor(@Inject('CONNECTION') connection: Connection) { }
}
// 2. 단순 삽입
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  @Inject('MASTER_NAME') name: string;
}
```

### useClass 사용법

- `useClass` 구문을 사용하면 선택한 요소마다 다른 클래스를 사용할 수 있음.

```ts
const configServiceProvider = {
  provide: ConfigService, // 부모 객체
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService // 자식 객체
      : ProductionConfigService, 
};

@Module({
  providers: [configServiceProvider],
})
export class ApplicationModule {}
```

### useFactory 사용법

- `useFactory`는 제공자를 동적으로 만드는 방법임. 실제 공급자는 팩토리 함수의 반환 값과 같음.
    - 팩토리 기능은 여러 다른 제공자에 의존하거나 완전히 독립된 상태를 유지할 수 있음.

```ts
const connectionFactory = {
  provide: 'CONNECTION', // key
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options); // value
  },
  inject: [OptionsProvider], // useFactory에서 사용하는 OptionsProvider를 주입하는 객체
};

@Module({
  providers: [connectionFactory],
})
export class AppModule {}
```

#### AWS S3를 주입하고자 할 때

```ts
// useFactory에 넘겨주는 객체가 없으므로 inject 옵션이 들어가지 않았다.
import { S3 } from 'aws-sdk';

const S3Provider = {
  provide: 'S3_CONNECTION',
  useFactory: async (): Promise<any> => {
    const s3 = new S3({
      accessKeyId: 'accessKeyId',
      secretAccessKey: 'secretAccessKey',
    });
    return s3;
  },
};

@Module({
  providers: [S3Provider],
})
export class AppModule {}

// ======= Service 상에서 정의하기 =======
class AppService {
 constructor(
  @Inject('S3_CONNECTION')
  private readonly s3: S3;
 ) {}
}
```

### 왜 readonly를 사용할까?

> ***Read-only properties may have initializers and may be assigned to in constructors within the same class declaration***, but otherwise assignments to read-only properties are disallowed.
> ***읽기 전용 속성은 초기화자를 가질 수 있으며 동일한 클래스 선언 내 생성자에서 할당될 수 있지만***, 그 외의 경우 읽기 전용 속성에 대한 할당은 허용되지 않습니다.

- 타입스크립트 상에서 생성자가 주입할 때 실행자를 가지고 있거나 이를 할당하는데 사용됨.
- 물론 없어도 되는 경우가 있어서 may라는 표현을 사용하는 것 같음. → 그러나 readonly 관습적으로 사용이 됨.
- 값의 속성을 읽기 전용으로 설정해주는 TypeScript의 타입시스템 기능임.
- 함수가 매개변수로 받는 값을 변경없이 그대로 사용해야할 때 적합함.
- 외부 클래스나 함수에서도 호출이 가능하지만 값의 변경은 불가능함. / 내부에서 미리 값을 초기화 해줘야 함.

## 출처 / 함께 읽으면 도움되는 글

- 출처 : [Nestjs 기본 구조 이해하기](https://medium.com/@jinsung1048/nestjs-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%A1%B0-%EA%BC%BC%EA%BC%BC%ED%9E%88-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-cf7fc335a683)