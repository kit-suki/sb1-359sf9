import React, { useState, useCallback } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizQuestion } from './components/QuizQuestion';
import { ResultScreen } from './components/ResultScreen';
import { quizData } from './data/quizData';

type GameState = 'start' | 'playing' | 'result';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(quizData);

  const shuffleQuestions = useCallback(() => {
    return [...quizData].sort(() => Math.random() - 0.5);
  }, []);

  const handleStart = () => {
    setQuestions(shuffleQuestions());
    setGameState('playing');
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setGameState('result');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleHome = () => {
    setGameState('start');
  };

  if (gameState === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (gameState === 'playing') {
    return (
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    );
  }

  return (
    <ResultScreen
      score={score}
      totalQuestions={questions.length}
      onRestart={handleStart}
      onHome={handleHome}
    />
  );
}

export default App;