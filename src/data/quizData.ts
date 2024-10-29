export interface QuizQuestion {
  id: number;
  question: string;
  choices: {
    imageUrl: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "どちらが富士山でしょうか？",
    explanation: "富士山は日本の象徴的な山で、標高3,776メートルの活火山です。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    question: "どちらが桜の花でしょうか？",
    explanation: "桜は日本の春を代表する花で、3月から4月に咲きます。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    question: "どちらが新幹線でしょうか？",
    explanation: "新幹線は日本が誇る高速鉄道システムで、1964年に運行を開始しました。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1524092914671-e08037c08862?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      }
    ]
  },
  {
    id: 4,
    question: "どちらが寿司でしょうか？",
    explanation: "寿司は日本の伝統的な料理で、世界中で人気があります。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  },
  {
    id: 5,
    question: "どちらが秋の紅葉でしょうか？",
    explanation: "紅葉は日本の秋の風物詩で、多くの人々が観賞に訪れます。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      }
    ]
  },
  {
    id: 6,
    question: "どちらが抹茶ラテでしょうか？",
    explanation: "抹茶は日本の伝統的な緑茶で、現代では様々なスイーツやドリンクに使用されています。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1462917882517-e150004895fa?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  },
  {
    id: 7,
    question: "どちらが金閣寺でしょうか？",
    explanation: "金閣寺は京都にある有名な寺院で、建物全体が金箔で覆われています。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1584363295563-a0f5f7ce8fb6?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      }
    ]
  },
  {
    id: 8,
    question: "どちらがラーメンでしょうか？",
    explanation: "ラーメンは日本で独自の進化を遂げた麺料理で、各地域に特徴的な味があります。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  },
  {
    id: 9,
    question: "どちらが浴衣姿でしょうか？",
    explanation: "浴衣は夏の着物で、お祭りや花火大会などで着用される伝統的な衣装です。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      }
    ]
  },
  {
    id: 10,
    question: "どちらが招き猫でしょうか？",
    explanation: "招き猫は幸運を招くとされる日本の伝統的な置物です。",
    choices: [
      {
        imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=300&h=300",
        isCorrect: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&h=300",
        isCorrect: false
      }
    ]
  }
];