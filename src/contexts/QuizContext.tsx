import { createContext, useContext, useState, ReactNode } from "react";

interface QuizData {
  device: string;
  country: string;
  carrier: string;
  duration: number;
}

interface QuizContextType {
  quizData: QuizData;
  updateQuizData: (data: Partial<QuizData>) => void;
  resetQuiz: () => void;
}

const defaultQuizData: QuizData = {
  device: "",
  country: "",
  carrier: "",
  duration: 12,
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizData, setQuizData] = useState<QuizData>(defaultQuizData);

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData(prev => ({ ...prev, ...data }));
  };

  const resetQuiz = () => {
    setQuizData(defaultQuizData);
  };

  return (
    <QuizContext.Provider value={{ quizData, updateQuizData, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within QuizProvider");
  }
  return context;
};
