import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image21 from "./images/21.jpg";
import image22 from "./images/22.jpg";
import image31 from "./images/31.jpg";
import image32 from "./images/32.png";
import image41 from "./images/41.png";
import image42 from "./images/42.jpg";
import image51 from "./images/51.jpg";
import image61 from "./images/61.jpg";
import image71 from "./images/71.jpg";
import image72 from "./images/72.jpg";
import image81 from "./images/81.jpg";
import image82 from "./images/82.jpg";
import image91 from "./images/91.png";

function getPropName(week, isPrime) {
  let result = "";
  switch (week) {
    case "1":
      result = isPrime ? "종이" : "돌";
      break;
    case "2":
      result = isPrime ? "연필" : "물풀";
      break;
    case "3":
      result = isPrime ? "크레파스" : "양초";
      break;
    case "4":
      result = isPrime ? "박스테이프" : "색종이";
      break;
    case "5":
      result = isPrime ? "자연물" : "자연물";
      break;
    case "6":
      result = isPrime ? "나무토막" : "나무토막";
      break;
    case "7":
      result = isPrime ? "솜" : "이쑤시개";
      break;
    case "8":
      result = isPrime ? "알루미늄호일" : "유성마커";
      break;
    case "9":
      result = isPrime ? "스티로폼" : "?";
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
      result = isPrime ? image21 : image22;
      break;
    case "3":
      result = isPrime ? image31 : image32;
      break;
    case "4":
      result = isPrime ? image41 : image42;
      break;
    case "5":
      result = isPrime ? image51 : image51;
      break;
    case "6":
      result = isPrime ? image61 : image61;
      break;
    case "7":
      result = isPrime ? image71 : image72;
      break;
    case "8":
      result = isPrime ? image81 : image82;
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
      "글씨를 쓸 수 있다.",
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
      "특별한 맛이 나지 않는다.",
    ],
  ];
  const content22 = [
    [
      "액체다.",
      "투명하다.",
      "끈적끈적하다.",
      "물체에 바르고 그 위에 다른 물체를 붙이면 잘 붙는다.",
    ],
    [
      "투명한 플라스틱 용기에 담겨 있다.",
      "시큼한 냄새가 난다.",
      "한꺼번에 많이 나오지 않도록 뚜껑 안에 또 뚜껑이 있다.",
    ],
    [
      "용기 안에 들어있을 때는 잘 굳지 않는다.",
      "용기 바깥으로 나오면 빨리 굳어버린다.",
      "흑연 가루를 뿌리면 반짝이는 입자가 붙어서 예쁘다.",
    ],
  ];

  const content31 = [
    [
      "길쭉한 모양이다.",
      "잘 부서진다.",
      "종이에 칠해진다.",
      "색깔이 다양하다.",
      "물이 묻어도 번지지 않는다.",
    ],
    [
      "가위로 잘 잘린다.",
      "열을 가하면 금방 녹는다.",
      "잘게 자르면 더 빨리 녹는다.",
    ],
    [
      "녹았을 때 잘 흐른다(점성이 낮다).",
      "녹았을 때 금방 굳는다.",
      "녹았을 때 색깔이 잘 섞인다.",
    ],
  ];
  const content32 = [
    [
      "파라핀 기둥에 심지가 끼워져 있는 모양이다.",
      "불을 붙이면 오랫동안 꺼지지 않는다.",
      "색깔이 다양하다.",
      "겉이 매끈매끈하다.",
    ],
    [
      "불을 붙이면 심지가 탄다.",
      "열을 가하면 금방 녹는다.",
      "녹았을 때 금방 굳는다.",
      "녹이면 투명해진다.",
    ],
    [
      "가위로 잘 잘린다.",
      "녹았을 때 잘 흐른다(점성이 낮다).",
      "굳으면 재활용이 가능하다.",
      "녹았을 때 휴지로 잘 닦인다.",
    ],
  ];

  const content41 = [
    [
      "얇다.",
      "투명하다.",
      "접착 능력이 있다.",
      "가위로 잘 잘린다.",
      "도넛 모양이다.",
    ],
    [
      "먼지가 잘 붙는다.",
      "방수이다.",
      "지문이 잘 묻는다.",
      "본드 냄새가 난다.",
    ],
    [
      "투명하고 앏아 끝부분을 찾기 힘들다.",
      "여러 번 접으면 단단해지고 구부러지지 않는다.",
      "가벼운 물체를 세울 수 있다.",
    ],
  ];
  const content42 = [
    [
      "얇다.",
      "가위로 잘 잘린다.",
      "색깔이 다양하다.",
      "잘 접힌다.",
      "대부분 정사각형 모양이다.",
    ],
    [
      "베이기 쉽다.",
      "빛에 비춰도 불투명하다.",
      "접어서 여러가지 형태를 만들 수 있다.",
    ],
    [
      "일반 종이보다 두껍다.",
      "표면이 일반 종이보다 매끈하다.",
      "펜으로 쉽게 쓰거나 칠할 수 있다.",
    ],
  ];

  const content5 = [
    [
      "긴 모양이다. (나뭇가지)",
      "거칠다. (나뭇가지)",
      "갈색이다. (솔방울)",
      "결이 있다. (솔방울)",
      "단단하다. (솔방울)",
      "흰 꽃을 가지고 있다. (냉이)",
      "뿌리가 맛있다. (냉이)",
      "줄기와 뿌리가 잘 끊어진다. (냉이)",
    ],
    [
      "안쪽 무늬(나이테)가 동심원 형태로 이루어져 있다. (나뭇가지)",
      "잎의 안쪽에 잎줄기 무늬가 있다. (솔방울)",
      "잎이 안쪽으로 휘어져 있다. (솔방울)",
      "잎이 비늘과 닮았다. (솔방울)",
      "줄기와 잎이 분리된다(잘 끊어진다). (솔방울)",
      "뿌리에 잔뿌리가 많이 나 있다. (냉이)",
      "하트모양 잎을 가지고 있다 (냉이)",
    ],
    [
      "세로로 잘 부러진다. (나뭇가지)",
      "중앙에 물이 통하는 것 같은 줄기가 있다. (솔방울)",
      "사이사이에 흙이 묻어 있다. (솔방울)",
      "줄기와 잎은 질긴 줄기로 이어져 있다. (솔방울)",
      "아랫잎과 윗잎의 생김새가 다르다. (냉이)",
      "빠르게 시든다. (냉이)",
    ],
  ];

  const content6 = [
    [
      "단단하다.",
      "나이테 무늬를 볼 수 있다.",
      "갈색 계통의 색깔을 가지고 있다.",
    ],
    [
      "서로 두드리면 소리가 난다.",
      "어떻게 두드리냐에 따라 매번 다른 소리가 난다.",
      "자르거나 부러뜨리기 어렵다.",
    ],
    [
      "부러뜨렸을 때 단면이 깔끔하지 않고 날카로워 나무 파편이 박히기 쉽다.",
      "가공하지 않은 나무토막에는 가지가 뻗어나간 흔적들이 있다.",
    ],
  ];

  const content71 = [
    [
      "하얗다.",
      "가볍다.",
      "보온 효과가 있다.",
      "촉감이 부드럽다.",
      "폭신폭신해서 충격을 잘 흡수한다.",
    ],
    [
      "가느다란 수많은 실이 엉켜있다.",
      "빛이 어느정도 투과한다.",
      "냄새가 없다.",
    ],
    [
      "이쑤시개로 찌르면 잘 뭉친다.",
      "형광펜으로 색칠할 수 있다.",
      "잘 뭉쳐지는 솜이 있고 뭉쳐지지 않는 솜이 있다.",
      "가위로 잘 잘린다.",
    ],
  ];
  const content72 = [
    ["나무로 만들어져 있다.", "한쪽 끝이 뾰족하다.", "크기가 작다."],
    ["찔리면 아프다.", "쉽게 부러진다.", "나무 냄새가 난다."],
    [
      "색깔이 조금씩 다르다.",
      "접착제 없이도 솜과 잘 붙는다.",
      "접착제 없이도 수세미와 잘 붙는다.",
    ],
  ];

  const content81 = [
    [
      "얇다.",
      "가볍다.",
      "은색이다.",
      "맛이 없다.",
      "만지면 소리가 난다.",
      "보온 효과가 있다.",
    ],
    [
      "빛에 반사된다.",
      "잘 뭉쳐져서 모양을 잡기가 쉽다.",
      "앞면과 뒷면의 촉감과 눈에 보이는 모습이 다르다.",
    ],
    [
      "전기가 통한다.",
      "방수가 잘 된다.",
      "매직을 칠하면 끈적끈적해진다.",
      "면적과 구김의 정도에 따라서 흔들었을 때의 소리가 다르다.",
    ],
  ];
  const content82 = [
    [
      "굵기가 두껍다.",
      "물에 번지지 않는다.",
      "진하고 선명하다.",
      "색깔이 다양하다.",
    ],
    [
      "빨리 마른다.",
      "쓸 때 듣기에 좋지 않은 소리가 난다.",
      "눕히거나 세우면서 굵기를 조절할 수 있다.",
    ],
    [
      "알루미늄 호일 위에 잘 써진다.",
      "알루미늄 호일 위에 칠하면 끈적끈적해진다.",
    ],
  ];

  const content91 = [
    [
      "하얀색이다.",
      "폭신폭신하다.",
      "자를 때 듣기 싫은 소리가 난다.",
      "보온재로 쓸 수 있다.",
    ],
    [
      "표면이 울퉁불퉁하다.",
      "누르면 움푹 들어간다.",
      "사인펜으로 잘 칠해진다.",
      "글씨를 쓸 때 듣기 싫은 소리가 난다.",
    ],
    [
      "물에 뜬다.",
      "표면이 울퉁불퉁해서 꼼꼼이 칠해지지 않는다.",
      "깔끔하게 자르기 쉽지 않다.",
      "열을 가하면 깔끔하게 자를 수 있다.",
      "시간이 지나면 눌러서 들어간 부분이 다시 돌아온다.",
    ],
  ];
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
      result = content5;
      break;
    case "6":
      result = content6;
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
