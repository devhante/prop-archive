import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image21 from "./images/21.jpg";
import image31 from "./images/31.jpg";
import image41 from "./images/41.png";
import image51 from "./images/51.jpg";
import image61 from "./images/61.jpg";
import image71 from "./images/71.jpg";
import image81 from "./images/81.jpg";
import image91 from "./images/91.png";

function getPropName(week, isPrime) {
  let result = "";
  switch (week) {
    case "1":
      result = isPrime ? "종이" : "돌";
      break;
    case "2":
      result = isPrime ? "연필" : "연필";
      break;
    case "3":
      result = isPrime ? "크레파스" : "크레파스";
      break;
    case "4":
      result = isPrime ? "박스테이프" : "박스테이프";
      break;
    case "5":
      result = isPrime ? "자연물" : "자연물";
      break;
    case "6":
      result = isPrime ? "나무토막" : "나무토막";
      break;
    case "7":
      result = isPrime ? "솜" : "솜";
      break;
    case "8":
      result = isPrime ? "알루미늄" : "알루미늄";
      break;
    case "9":
      result = isPrime ? "스티로폼" : "스티로폼";
      break;
  }

  return result;
}

function getPropImage(week, isPrime) {
  let result = "";
  switch (week) {
    case "1":
      result = isPrime ? image11 : image12;
      break;
    case "2":
      result = isPrime ? image21 : image21;
      break;
    case "3":
      result = isPrime ? image31 : image31;
      break;
    case "4":
      result = isPrime ? image41 : image41;
      break;
    case "5":
      result = isPrime ? image51 : image51;
      break;
    case "6":
      result = isPrime ? image61 : image61;
      break;
    case "7":
      result = isPrime ? image71 : image71;
      break;
    case "8":
      result = isPrime ? image81 : image81;
      break;
    case "9":
      result = isPrime ? image91 : image91;
      break;
  }

  return result;
}

function getContents(week, isPrime) {
  let result = [];

  const content11 = [
    [
      "얇다",
      "하얗다.",
      "베이기 쉽다.",
      "접힌 자국이 남는다.",
      "대부분 사각형 모양이다.",
    ],
    [
      "멀리서 보면 반질반질하다.",
      "가까이서 보면 표면이 울퉁불퉁하다.",
      "반짝거린다.",
      "가위로 잘 잘린다.",
      "빛에 비추면 빛이 약간 투과한다(반투명하다).",
      "색을 입히기 쉽다.",
    ],
    [
      "여러 번 접으면 쉽게 잘리거나 찢어지지 않는다.",
      "돌로 긁었을 때 찢어지지 않고 얇게 파인다.",
      "돌에 대고 비비고 구겼더니 흙이 묻어나왔다.",
      "여러 겹으로 되어 있다.",
      "풀을 바르면 종이와 잘 붙는다.",
    ],
  ];
  const content12 = [
    [
      "딱딱하다.",
      "차갑다.",
      "무겁다.",
      "모양이 다양하다.",
      "변형시키기 힘들다.",
    ],
    [
      "반짝거린다.",
      "색깔이 다양하다.",
      "맞으면 아프다.",
      "가위로 잘 잘리지 않는다.",
    ],
    ["흙냄새가 난다.", "종이를 긁어도 변함이 없다.", "색을 입히기 힘들다."],
  ];

  const content21 = [
    [
      "길이가 길다.",
      "겉은 나무로, 심은 흑연으로 이루어져 있다.",
      "대부분 육각기둥 모양이다.",
      "심의 굵기가 다양하다.",
    ],
    [
      "칼로 잘 깎인다.",
      "흑연 부분을 칼로 깎으면 가루로 묻어나온다.",
      "나무 부분보다 흑연 부분이 더 잘 부서진다.",
      "날카롭게 깎으면 무기로 쓸 수 있을 정도로 위험하다.",
    ],
    [
      "가로로 부러뜨렸을 때 단면이 깔끔하지 않다.",
      "세로로 부러뜨리면 단면이 깔끔하다.",
      "물풀로 붙였을 때 잘 붙는다.",
    ],
  ];
  const content22 = [[], [], []];

  const content31 = [[], [], []];
  const content32 = [[], [], []];

  const content41 = [[], [], []];
  const content42 = [[], [], []];

  const content51 = [[], [], []];
  const content52 = [[], [], []];

  const content61 = [[], [], []];
  const content62 = [[], [], []];

  const content71 = [[], [], []];
  const content72 = [[], [], []];

  const content81 = [[], [], []];
  const content82 = [[], [], []];

  const content91 = [[], [], []];
  const content92 = [[], [], []];

  switch (week) {
    case "1":
      result = isPrime ? content11 : content12;
      break;
    case "2":
      result = isPrime ? content21 : content22;
      break;
    case "3":
      result = isPrime ? content31 : content32;
      break;
    case "4":
      result = isPrime ? content41 : content42;
      break;
    case "5":
      result = isPrime ? content51 : content52;
      break;
    case "6":
      result = isPrime ? content61 : content62;
      break;
    case "7":
      result = isPrime ? content71 : content72;
      break;
    case "8":
      result = isPrime ? content81 : content82;
      break;
    case "9":
      result = isPrime ? content91 : content92;
      break;
  }

  return result;
}

export { getPropName, getPropImage, getContents };
