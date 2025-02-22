"use client";

import { useState } from "react";
import { Question, QuestionResult } from "./QuizQuestion";
import QuizQuestion from "./QuizQuestion";

interface Props {
  jsonQuestions: Question[];
}

export default function QuizForm({ jsonQuestions }: Props) {
  const [questionAnswers, setQuestionAnswers] =
    useState<Question[]>(jsonQuestions);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const checkAnswers = (event: React.FormEvent) => {
    event.preventDefault();

    questionAnswers.map(({ questionNumber, options }) => {
      let result = { correctChoice: "", chosenChoice: "" };

      options.map((option) => {
        if (option.choiceSelected !== undefined) {
          if (option.choiceSelected && option.isCorrect) {
            // ANSWER CORRECT
            result = {
              correctChoice: option.choice,
              chosenChoice: option.choice,
            };
          }
          if (option.choiceSelected && !option.isCorrect) {
            // ANSWER INCORRECT
            result = { ...result, chosenChoice: option.choice };
          }
          if (!option.choiceSelected && option.isCorrect) {
            // CORRECT ANSWER THAT WAS NOT SELECTED
            result = { ...result, correctChoice: option.choice };
          }
        } else {
          // ANSWER NOT SELECTED
          if (option.isCorrect) {
            // CORRECT ANSWER THAT WAS NOT SELECTED
            result = { ...result, correctChoice: option.choice };
          }
          result = { ...result, chosenChoice: "" };
        }
      });

      setResults((prev) => [...prev, { questionNumber, result }]);
    });
  };

  return (
    <form onSubmit={checkAnswers}>
      {jsonQuestions &&
        jsonQuestions.map((question: Question, index) => (
          <QuizQuestion
            key={question.questionNumber}
            question={question}
            setAnswer={setQuestionAnswers}
            result={results[index]}
          />
        ))}
      <div className="flex justify-center mt-10">
        <button className="primary filled py-2 px-4 rounded-lg">
          Check Answers
        </button>
      </div>
    </form>
  );
}
