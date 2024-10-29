import React from 'react';
import { Play } from 'lucide-react';
import { Ruby } from './Ruby';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">杵築市クイズ</h1>
        <div className="text-gray-600 space-y-4 mb-8 text-lg leading-relaxed">
          <p>
            <Ruby text="杵築{きつき}市{し}に関{かん}する２択{たく}問題{もんだい}が出{で}ます。" />
          </p>
          <p>
            <Ruby text="問題{もんだい}は全部{ぜんぶ}で８問{もん}。" />
          </p>
          <p>
            <Ruby text="正{ただ}しいと思{おも}う方{ほう}の画像{がぞう}をタッチして答{こた}えてね。" />
          </p>
          <p>
            <Ruby text="全問{ぜんもん}正解{せいかい}を目指{めざ}して頑張{がんば}ってください！" />
          </p>
        </div>
        <button
          onClick={onStart}
          className="group flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <Play className="w-5 h-5" />
          <span>スタート</span>
        </button>
      </div>
    </div>
  );
};