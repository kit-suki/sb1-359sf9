import React, { useState } from 'react';
import type { QuizQuestion as QuizQuestionType } from '../data/quizData';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (isCorrect: boolean) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleAnswer = (isCorrect: boolean) => {
    setSelectedAnswer(isCorrect);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      onAnswer(isCorrect);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              問題 {currentQuestion} / {totalQuestions}
            </span>
            <div className="w-24 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full"
                style={{
                  width: `${(currentQuestion / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            {question.question}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {question.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(choice.isCorrect)}
              disabled={showFeedback}
              className="relative group overflow-hidden rounded-lg transition-transform duration-200 transform hover:scale-105 disabled:cursor-not-allowed"
            >
              <img
                src={choice.imageUrl}
                alt={`選択肢 ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
            <div className={`transform scale-100 transition-transform duration-200`}>
              <div className={`flex flex-col items-center bg-white rounded-2xl p-8 max-w-md ${
                selectedAnswer ? 'text-green-500' : 'text-red-500'
              }`}>
                {selectedAnswer ? (
                  <>
                    <CheckCircle2 className="w-24 h-24" />
                    <span className="text-2xl font-bold mt-4">正解！</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-24 h-24" />
                    <span className="text-2xl font-bold mt-4">不正解...</span>
                  </>
                )}
                <p className="text-gray-600 mt-4 text-center">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};