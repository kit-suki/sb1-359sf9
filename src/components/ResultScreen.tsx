import React from 'react';
import { Home, Trophy } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onHome,
}) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getFeedbackMessage = () => {
    if (percentage === 100) return 'パーフェクト！素晴らしい！';
    if (percentage >= 80) return 'すごい！よくできました！';
    if (percentage >= 60) return 'なかなかいい成績です！';
    if (percentage >= 40) return 'もう少し頑張りましょう！';
    return 'まだまだ伸びしろがありますね！';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        </div>
        
        <img
          src="/kitsuki-thumbsup.png"
          alt="キツキちゃん"
          className="w-32 h-32 mx-auto mb-6 object-contain"
        />
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">クイズ完了！</h2>
        <div className="text-6xl font-bold text-purple-600 mb-4">
          {score}/{totalQuestions}
        </div>
        <p className="text-gray-600 text-lg mb-2">
          正解率: {percentage}%
        </p>
        <p className="text-purple-600 font-bold text-xl mb-8">
          {getFeedbackMessage()}
        </p>
        
        <button
          onClick={onHome}
          className="group flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 w-full"
        >
          <Home className="w-5 h-5" />
          <span>スタート画面に戻る</span>
        </button>
      </div>
    </div>
  );
};