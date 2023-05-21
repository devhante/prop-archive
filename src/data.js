import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image21 from "./images/21.jpg";
import image22 from "./images/22.jpg";
import image23 from "./images/23.jpg";
import image31 from "./images/31.jpg";
import image32 from "./images/32.png";
import image33 from "./images/33.jpg";
import image41 from "./images/41.png";
import image42 from "./images/42.jpg";
import image43 from "./images/43.jpg";
import image51 from "./images/51.jpg";
import image53 from "./images/53.jpg";
import image61 from "./images/61.jpg";
import image63 from "./images/63.jpg";
import image71 from "./images/71.jpg";
import image72 from "./images/72.jpg";
import image73 from "./images/73.jpg";
import image81 from "./images/81.jpg";
import image82 from "./images/82.jpg";
import image83 from "./images/83.jpg";
import image91 from "./images/91.png";
import image92 from "./images/92.jpg";
import image93 from "./images/93.jpg";

import image13_0 from "./images/13_0.jpg";
import image13_1 from "./images/13_1.jpg";
import image13_2 from "./images/13_2.jpg";
import image13_3 from "./images/13_3.jpg";
import image23_0 from "./images/23_0.jpg";
import image23_1 from "./images/23_1.jpg";
import image23_2 from "./images/23_2.jpg";
import image33_0 from "./images/33_0.jpg";
import image33_1 from "./images/33_1.jpg";
import image33_2 from "./images/33_2.jpg";
import image33_3 from "./images/33_3.jpg";
import image33_4 from "./images/33_4.jpg";
import image33_5 from "./images/33_5.jpg";
import image33_6 from "./images/33_6.jpg";
import image33_7 from "./images/33_7.jpg";
import image43_0 from "./images/43_0.jpg";
import image43_1 from "./images/43_1.jpg";
import image53_0 from "./images/53_0.jpg";
import image63_0 from "./images/63_0.jpg";
import image63_1 from "./images/63_1.jpg";
import image63_2 from "./images/63_2.jpg";
import image63_3 from "./images/63_3.jpg";
import image73_0 from "./images/73_0.jpg";
import image73_1 from "./images/73_1.jpg";
import image73_2 from "./images/73_2.jpg";
import image73_3 from "./images/73_3.jpg";
import image73_4 from "./images/73_4.jpg";
import image83_0 from "./images/83_0.jpg";
import image83_1 from "./images/83_1.jpg";
import image83_2 from "./images/83_2.jpg";
import image83_3 from "./images/83_3.jpg";
import image83_4 from "./images/83_4.jpg";
import image93_0 from "./images/93_0.jpg";
import image93_1 from "./images/93_1.jpg";
import image93_2 from "./images/93_2.jpg";
import image93_3 from "./images/93_3.jpg";
import image93_4 from "./images/93_4.jpg";
import image93_5 from "./images/93_5.jpg";
import image93_6 from "./images/93_6.jpg";
import image93_7 from "./images/93_7.jpg";

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
      result = isPrime ? "스티로폼" : "금속";
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
      result = isPrime ? image91 : image92;
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
      "찢어지기 쉽다",
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
      "깔끔하게 자르기 쉽지 않다.",
      "열을 가하면 깔끔하게 자를 수 있다.",
      "시간이 지나면 눌러서 들어간 부분이 다시 돌아온다.",
      "표면이 울퉁불퉁해서 꼼꼼이 칠해지지 않는다.",
    ],
  ];
  const content92 = [
    ["튼튼하다.", "전기가 잘 통한다.", "열을 가하면 금방 뜨거워진다."],
    ["빛을 비추면 반사해서 반짝거린다.", "얇고 날카롭게 가공할 수 있다."],
    ["달구어진 금속으로 스티로폼을 깔끔하게 자를 수 있다."],
  ];

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

function getCardText(week) {
  let result = "";
  switch (week) {
    case "1":
      result = `저희 조에서는 2주차의 주제 물성 '종이'와 어울리는 부제 물성으로 '돌'을 선택했습니다. 종이를 만드는 과정에서 돌이 들어간다는 이유에서였습니다.
종이와 돌을 가지고 어떻게 작품을 만들까 고민하다가 교수님께서 나눠주신 준비물 중에 유성매직을 돌에 칠해보는 과정에서 '색을 입히기 힘들다'라는 물성을 알게 되었습니다.
그에 비해 종이는 '색을 입히기 쉽다'라는 물성을 가지고 있었습니다. 돌의 겉면을 종이로 감싸 유성매직으로 칠한다면 돌의 '변형시키기 힘들다'라는 물성으로 인해 적은 양의 종이만으로는 만들 수 없는 입체적이고 형태가 쉽게 바뀌지 않는 작품을 만들 수 있을 것이라 생각했습니다.
제가 가져온 돌 중에 크기가 적당하고 예쁜 돌을 하나 선택하여 겉면을 종이로 감쌌습니다. 그 모양이 마치 계란같이 보여 어렸을 때 즐겨 봤던 애니메이션인 '캐릭캐릭 체인지'에 등장하는 '수호캐릭터 알'이 연상되어 한쪽 면을 애니메이션에 등장하는 주인공의 수호캐릭터 알로 칠하고, 반대쪽 면을 악당 역할의 수호캐릭터 알로 칠하여 양면성을 표현해 보았습니다.
추가로 종이의 물성인 '찢어지기 쉽다'를 보완하기 위해 박스테이프의 물성인 '투명하다', '얇다', '종이에 잘 붙는다'를 이용하여 겉을 박스테이프로 감싸 내구성을 높였습니다.`;
      break;
    case "2":
      result = `저희 조에서는 3주차의 주제 물성 '연필'과 어울리는 부제 물성으로 '물풀'을 선택했습니다.
저는 연필의 물성을 탐구하기 위해 연필깎기로 깎아보기도 하고, 부러뜨려 보기도 했습니다. 그 과정에서 연필이 소모되고 결국 수명이 다해 버려지는 과정을 연상하게 되었습니다.
대부분의 물건들은 수명이 다 해서 버려지더라도 원래 형태와 비슷한 상태로 버려지는데, 연필은 깎여나간 모습이 그 역할이 다해 버려진 상태라는 생각이 들었고, 이것이 다른 물건들과 다른 매력적인 점이라고 생각하여 그 부분을 작품에 집중적으로 표현하였습니다.
물풀의 물성인 '투명하다', '물체에 바르고 그 위에 다른 물체를 붙이면 잘 붙는다'를 이용하여 종이 위에 물풀을 발라 중앙에 부러진 연필을 붙이고 주변에는 연필을 깎고 남은 조각들을 붙여 역할이 다해 버려진 연필의 두 가지 상태를 표현해 보았습니다.`;
      break;
    case "3":
      result = `저희 조에서는 4주차의 주제 물성 '크레파스'와 어울리는 부제 물성으로 '양초'를 선택했습니다.
크레파스와 양초의 녹았을 때의 물성을 탐구하기 위해 잘게 자른 크레파스를 국자에 담고, 불을 붙인 양초 위에 올려두어 녹여 보았습니다.
크레파스의 '색깔이 다양하다', '녹았을 때 금방 굳는다'라는 물성을 이용하여 실링 왁스를 직접 만들어 보았습니다.
처음에는 양초와 크레파스를 섞어 녹여 보았는데, 점성이 너무 낮아 동그란 모양이 되지 않고 넓게 퍼져 실링 왁스로 사용할 수 없었습니다.
점성을 높이기 위해 글루건 심을 일정량 섞으니 적절한 점성을 가지게 되었습니다.
지우개를 칼로 파서 스탬프를 만들어 굳지 않은 실링 왁스를 눌러 주었고, 굳은 이후에 다시 떼는 것까지 성공하였습니다.
여러 가지 준비물의 물성을 이용하여 하나의 작품을 완성하는 과정이 즐거웠습니다.
특히 여러 번의 시행착오 끝에 적절한 점성의 실링 왁스를 만들기 위한 크레파스, 양초, 글루건 심의 비율을 찾아내는 것이 즐거웠습니다.`;
      break;
    case "4":
      result = `저희 조에서는 5주차의 주제 물성 '박스테이프'와 어울리는 부제 물성으로 '색종이'를 선택했습니다.
조원들이 각자 여러 가지 색종이를 가져왔는데, 저는 학종이를 준비해 왔습니다. 살면서 한번도 종이학을 접어본 적이 없어서 학을 접을 줄 아는 조원분께 부탁하여 직접 학을 접어 보았습니다. 그 과정에서 색종이의 '접어서 여러 가지 형태를 만들 수 있다'라는 물성을 알게 되었습니다.
종이학과 박스테이프를 이용하여 어떤 작품을 만들까 고민하다가 박스테이프의 물성인 '투명하다', '접착 능력이 있다', '여러 번 접으면 단단해지고 구부러지지 않는다', '가벼운 물체를 세울 수 있다'를 이용하여 색종이를 잘라 만든 태양과 산, 연못을 입체적으로 배치하여 팝업북처럼 표현해 보았습니다.
접은 종이학을 연못에서 목을 축이는 것처럼 보이도록 하였고, 작품의 이름을 동요의 한 구절을 인용하여 '깊은 산 속 옹달샘 누가 와서 먹나요'로 재치있게 정했습니다.`;
      break;
    case "5":
      result = `저는 6주차의 주제 물성인 '자연물' 3가지를 '나뭇가지', '솔방울', '냉이'로 정했습니다.
솔방울의 물성을 탐구하기 위해 솔방울의 잎을 떼어보다가, 솔방울의 잎이 마치 비늘같기도 하고 깃털같기도 해서 솔방울의 잎을 이어붙여 날개를 만들어 보기로 결정했습니다.
솔방울의 잎을 하나하나 떼어 목공풀로 접착했습니다. 목공풀이 마르는 속도가 빠르지 않아서 한 짝밖에 만들지 못하였습니다. 한 짝의 날개를 보고 있자니 그리스 로마 신화의 이카루스가 떠올랐습니다. 직접 만든 인공적인 날개라는 부분에서 신화와 제 작품과의 공통점이 있었고, 이카루스의 날개는 녹아서 떨어졌지만 떨어졌다는 부분에서도 유사한 부분이 있다고 생각했습니다.
다만 이카루스의 신화는 결말이 단순히 실패로 끝나는데, 저는 실패한 도전에도 의미를 부여하고 싶어 떨어진 날개에서 새로운 생명이 자라나는 것을 냉이 뿌리와 잎으로 표현해 보았습니다.`;
      break;
    case "6":
      result = `저희 조에서는 7주차의 주제 물성 '나무토막'을 부제 물성 없이 탐구하기로 결정했습니다.
나무토막의 물성을 탐구하다 '서로 두드리면 소리가 난다', '어떻게 두드리냐에 따라 매번 다른 소리가 난다'라는 물성을 알게 되었고 이를 이용해 여러 가지 소리를 내는 타악기를 만들어 작은 연주회를 하기로 하였습니다.
세 가지 악기를 만들었는데, 첫 번째는 직육면체 모양의 가공된 나무토막을 얇은 나무젓가락으로 두드려서 드럼과 같은 소리를 내는 악기를 만들었습니다.
두 번째는 물통 안에 부러뜨린 나무젓가락을 여러 개 넣어 마라카스와 비슷한 소리를 내는 악기를 만들었습니다.
세 번째는 나무 젓가락 여러 개를 이어붙여 만든 두꺼운 나무토막으로 넓은 나무주걱을 두드리거나 긁어 좀 더 낮고 울리는 소리를 내는 타악기를 만들었습니다.
인간의 목소리와 나무토막으로 만든 타악기가 합쳐지니 잘 어울리고 듣기에 좋아 신나게 연주할 수 있었던 것 같습니다.`;
      break;
    case "7":
      result = `저희 조에서는 8주차의 주제 물성 '솜'과 어울리는 부제 물성으로 '이쑤시개'를 선택했습니다. 솜의 부드러운 물성과 반대되는 뾰족한 물성을 가졌기 때문입니다.
교수님이 주신 솜과 조원이 가져온 솜을 비교해 보니 겉으로는 차이가 없지만 섬유의 종류가 달라 질감이나 뭉쳐지는 정도 등 물성의 차이를 알 수 있었습니다.
처음에는 이쑤시개와 뭉친 솜을 여러 개 만들어 수세미에 꽂아 민들레 꽃씨를 만들어 보려 했으나 이쑤시개의 고정력이 약해 실패했습니다.
솜의 물성인 '촉감이 부드럽다', 이쑤시개의 물성인 '접착제 없이도 솜과 잘 붙는다'를 이용하여 솜을 동그랗게 뭉친 후 이쑤시개로 연결하여 강아지를 만들어 보았습니다. 솜의 물성을 탐구하다가 '펜으로 색칠할 수 있다'라는 물성을 알게 되어 이 물성을 활용하여 강아지의 눈과 코 부분을 검은색 매직으로 칠한 솜을 작게 뭉쳐서 만들었습니다. 아쉬웠던 점은 가벼워서 바람이 조금만 불어도 쓰러진다는 것과, 접착제를 쓰지 않아 쉽게 형태가 무너진다는 것이었습니다.`;
      break;
    case "8":
      result = `저희 조에서는 9주차의 주제 물성 '알루미늄 호일'과 어울리는 부제 물성으로 '유성마커(유성매직)'를 선택했습니다.
알루미늄 호일의 물성을 탐구하다가 한 조원분이 요즘 유행하는 발렌시아가 패션쇼를 패러디한 유튜브 동영상을 보여 주셨고, 발렌시아가 패션쇼에 쓰이는 의상들의 독특함을 알루미늄 호일로 표현하면 어떨까 하는 아이디어에서 시작하여 조원들이 다같이 알루미늄 호일과 유성마커로 독특한 의상을 만들어 패션쇼를 하기로 하였습니다.
알루미늄 호일의 물성인 '얇다', '빛에 반사된다', '잘 뭉쳐져서 모양을 잡기가 쉽다'와 유성마카의 물성인 '알루미늄 호일 위에 잘 써진다'를 이용하여 여러 의상을 만들어 보았습니다. 선글라스는 안경 위에 독특한 모양의 호일을 씌운 후 빛이 반사되는 만화적 느낌의 장식을 유성마카로 표현해 주었고, 장갑은 제 손을 테이프로 감싼 후 다시 그 위를 알루미늄 호일로 감싼 다음 조심히 빼서 만들었습니다. 가방과 머리띠에는 발렌시아가의 로고를 마카로 칠해 넣었고, 목걸이는 실제로 있는 제품을 모방한 것으로 노란색 마카로 금색 체인을 표현했습니다.
수업 막바지에 다같이 만든 의상을 착용하고 패션쇼를 했는데 많은 사람들이 좋아해 주어서 뿌듯한 기분이 들었습니다.`;
      break;
    case "9":
      result = `저희 조에서는 10주차의 주제 물성 '스티로폼'과 어울리는 부제 물성으로 '금속'을 선택했습니다.
마지막 작품이라 조원들이 다같이 의미를 가진 작품을 만들면 어떨까 하는 의견이 나왔고, 스티로폼이 주로 일회용품으로 쓰인다는 점을 이용하여 이글루를 만들기로 했습니다.
처음에는 커터칼로 스티로폼을 잘라보려고 하였으나, 깔끔하게 잘리지 않고 조각들이 지저분하게 튀었습니다. 스티로폼의 물성인 '열을 가하면 깔끔하게 자를 수 있다'를 이용하여 열을 가한 금속으로 스티로폼을 깔끔하게 잘라 만든 스티로폼 벽돌을 글루건을 이용하여 붙여 만들었습니다.
지구온난화 문제를 표현하고자 발표할 때 열을 가한 금속을 이용하여 스티로폼으로 만든 이글루를 녹이려고 하였으나 시간상 하지 못해서 아쉬웠습니다.`;
      break;
  }
  return result;
}

function getCardImage(week) {
  let result = "";
  switch (week) {
    case "1":
      result = image13;
      break;
    case "2":
      result = image23;
      break;
    case "3":
      result = image33;
      break;
    case "4":
      result = image43;
      break;
    case "5":
      result = image53;
      break;
    case "6":
      result = image63;
      break;
    case "7":
      result = image73;
      break;
    case "8":
      result = image83;
      break;
    case "9":
      result = image93;
      break;
  }

  return result;
}

function getCardImages(week) {
  let result = [];
  switch (week) {
    case "1":
      result = [image13_0, image13_1, image13_2, image13_3];
      break;
    case "2":
      result = [image23_0, image23_1, image23_2];
      break;
    case "3":
      result = [
        image33_0,
        image33_1,
        image33_2,
        image33_3,
        image33_4,
        image33_5,
        image33_6,
        image33_7,
      ];
      break;
    case "4":
      result = [image43_0, image43_1];
      break;
    case "5":
      result = [image53_0];
      break;
    case "6":
      result = [image63_0, image63_1, image63_2, image63_3];
      break;
    case "7":
      result = [image73_0, image73_1, image73_2, image73_3, image73_4];
      break;
    case "8":
      result = [image83_0, image83_1, image83_2, image83_3, image83_4];
      break;
    case "9":
      result = [
        image93_0,
        image93_1,
        image93_2,
        image93_3,
        image93_4,
        image93_5,
        image93_6,
        image93_7,
      ];
      break;
  }

  return result;
}

export {
  getPropName,
  getPropImage,
  getContents,
  getCardText,
  getCardImage,
  getCardImages,
};
