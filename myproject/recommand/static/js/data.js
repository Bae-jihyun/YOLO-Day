const qnaList = [
  {
    q: "1. 나의 나이대는?",
    a: [
      { answer: "10대", type: [2, 5, 6, 8, 9, 10, 16, 17] },
      { answer: "20대", type: [1, 2, 3, 5, 6, 7, 8, 9, 10, 15, 16, 17] },
      { answer: "30대~40대", type: [1, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16] },
      { answer: "50대 이상", type: [4, 5, 7, 8, 14, 16, 17] },
    ],
  },
  {
    q: "2. 나의 성향은?",
    a: [
      { answer: "집순이", type: [1, 4, 5, 9, 12, 15, 16, 17] },
      { answer: "활동가", type: [2, 3, 6, 7, 8, 10, 11, 13, 14] },
    ],
  },
  {
    q: "3. 나는 보통?",
    a: [
      { answer: "걷는다", type: [2, 3, 10, 11, 15, 16, 17] },
      { answer: "뛴다", type: [7, 8, 13, 14] },
      { answer: "뭔가를 탄다", type: [4, 5, 6, 9, 12] },
    ],
  },
  {
    q: "4. 루이스 폴센이 뭔지 안다",
    a: [
      { answer: "예", type: [1] },
      {
        answer: "아니오",
        type: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
    ],
  },
  {
    q: "5. 여행가면 맡는 역할?",
    a: [
      { answer: "숨 쉬기", type: [7, 9, 14, 15, 16] },
      { answer: "사진 담당", type: [5, 10] },
      { answer: "정리 담당", type: [1, 4, 13, 17] },
      { answer: "텐션 담당", type: [2, 3, 6, 8, 12] },
    ],
  },
  {
    q: "6. 콘서트를 간다면",
    a: [
      { answer: "영상 찍기", type: [10, 13, 17] },
      { answer: "눈으로 보기", type: [6, 7, 14, 15, 16] },
    ],
  },
  {
    q: "7. 스팀 계정이 있나요?",
    a: [
      { answer: "예", type: [9] },
      {
        answer: "모른다",
        type: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17],
      },
    ],
  },
  {
    q: "8. 지금 당장 집에 참기름이 어디있는지 안다",
    a: [
      { answer: "예", type: [4] },
      {
        answer: "아니오",
        type: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      },
    ],
  },
  {
    q: "9. 넥스트 레벨을 따라 춰 본 적이 있다",
    a: [
      { answer: "예", type: [1, 2, 3, 6, 7, 8, 12, 13, 15, 16] },
      { answer: "아니오", type: [4, 5, 9, 10, 14, 17] },
    ],
  },
  {
    q: "10. 클래식을 들으면 솔직히 잔다",
    a: [
      { answer: "예", type: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15] },
      { answer: "아니오", type: [5, 12, 16, 17] },
    ],
  },
  {
    q: "11. 취미를 위한 지출 비용 얼마까지?",
    a: [
      { answer: "무료", type: [3, 6, 7, 9, 16] },
      { answer: "5만원 이하", type: [2, 4, 5, 8, 15] },
      { answer: "10만원 이하", type: [11, 12, 17] },
      { answer: "10만원 초과", type: [1, 10, 13, 14] },
    ],
  },
  {
    q: "12. 취미란",
    a: [
      { answer: "에너지", type: [2, 3, 6, 8, 11, 13, 16] },
      {
        answer: "머리비우기",
        type: [1, 4, 5, 7, 9, 10, 12, 14, 15, 17],
      },
    ],
  },
];

const infoList = [
  {
    key: 1,
    path: "blog",
  },
  {
    key: 2,
    path: "com_1",
  },
  {
    key: 3,
    path: "com_2",
  },
  {
    key: 4,
    path: "com_3",
  },
  { key: 5, path: "com_4" },
  { key: 6, path: "com_5" },
  { key: 7, path: "com_6" },
  { key: 8, path: "com_7" },
  { key: 9, path: "com_8" },
  { key: 10, path: "com_9" },
  { key: 11, path: "com_10" },
  { key: 12, path: "com_11" },
  { key: 13, path: "com_12" },
  // { key: 14, path: 'exotic' },
  // { key: 15, path: 'exotic' },
  // { key: 16, path: 'exotic' },
  // { key: 17, path: 'exotic' },
];
