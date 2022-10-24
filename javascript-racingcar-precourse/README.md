<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 📁 디렉토리
```
├── LICENSE
├── README.md
├── .gitignore
├── .prettierrc
├── index.html
└── src
    ├── index.js -> 게임을 진행하는 모듈을 호출하는 메인 모듈
    │
    ├── game -----> 게임 진행과 관련된 모듚을 모아놓은 폴더
    │   ├── playGame.js ---------> 게임을 진행하는 모듈
    │   ├── getGameResult.js ----> 게임 결과를 계산해주는 모듈
    │   └── printGameResult.js --> 게임 결과를 화면에 출력해주는 모듈
    │
    └── input ----> Computer와 USER의 인풋과 관련된 모듈을 모아놓은 폴더
        ├── getUserInput.js -----> USER에게 인풋을 받는 모듈
        ├── checkValidInput.js --> USER의 인풋이 올바른지 확인하는 모듈
        └── getComputerInput.js -> 컴퓨터의 인풋(정답)을 생성하는 모듈
```

## 📋 구현할 기능!

### input

- **1. USER에게 자동차 이름 Input 받아 입력 형태가 올바른지 체크하는 함수로 넘기기**
  
  - 5자 이하  
  - 콤마로 구분
  
- **2. 자동차 Input이 올바른지 체크**
  
  - 5자 이하
  - 중복되는 이름이 없어야 함
  - Input이 올바른 경우 : 자동차 이름을 배열에 담아 게임을 실행하는 함수로 넘기기
  - Input이 잘못된 경우 : 오류메세지를 출력하고 Input을 다시 받음

- **3. 자동차 Input이 올바르지 않을 때 ```alert```를 이용해 메세지 출력**

  - ```alert```를 이용해 잘못 된 메세지임을 출력
  
- **4. USER에게 게임을 시도할 횟수 Input 받기**

  - Input을 받아 게임을 실행하는 함수로 넘기기

### game

- **1. 게임을 실행할 횟수만큼 play**
  - 반복문으로 구현

- **2. 각 횟수마다 각 자동차의 전진할 조건을 확인**

  - 0부터 9 사이의 숫자를 랜덤으로 고른 뒤 그 값이 4 이상이면 전진
  - 각 자동차의 위치는 자동차의 번호를 인덱스로 하는 배열에 각 위치값을 저장
  - 각 자동차의 위치를 갱신하여 화면에 출력하는 함수로 넘기기
  
- **3. 각 게임 회차마다 자동차의 상태를 화면에 출력**

  - 실행 결과를 HTML에 출력

- **4. 게임을 모두 실행하고 우승자를 판별**
  - 게임을 모두 실행한 뒤 각 자동차의 위치값이 저장된 배열을 입력값으로 받는다.
  - 우승자를 배열에 담아 반환

- **5. 최종 우승자를 화면에 출력**
  - 모든 우승자를 화면에 출력