"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

export type Option = {
  choice: string;
  answer: string;
  isCorrect: boolean;
  choiceSelected?: boolean;
};

export interface Question {
  questionNumber: number;
  questionText: string;
  options: Option[];
}

export interface QuestionResult {
  questionNumber: number;
  result: {
    correctChoice: string;
    chosenChoice: string;
  };
}

interface Props {
  question: Question;
  setAnswer: (callback: (prev: Question[]) => Question[]) => void;
  result: QuestionResult;
}

export default function QuizQuestion({ question, setAnswer, result }: Props) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);

    setAnswer((prev: Question[]) =>
      prev.map((q: Question) =>
        q.questionNumber === question.questionNumber
          ? {
              ...q,
              options: q.options.map((o: Option) =>
                o.choice === option.choice
                  ? { ...o, choiceSelected: true }
                  : { ...o, choiceSelected: false }
              ),
            }
          : q
      )
    );
  };

  const answeredCorrect =
    result?.result?.chosenChoice === result?.result?.correctChoice;

  const questionNumberClasses = `p-5 px-7 border border-zinc-200 dark:border-zinc-800  bg-zinc-50 dark:bg-zinc-900 rounded-full place-self-start shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] ${
    result !== undefined
      ? answeredCorrect
        ? "border-green-500 dark:border-green-300 bg-green-200 dark:bg-green-200"
        : "border-red-500 dark:border-red-300 bg-red-200 dark:bg-red-200"
      : ""
  }`;

  const questionWrapperClasses = `my-20 p-4 rounded-md ${
    !answeredCorrect && result?.result?.chosenChoice === "" ? "bg-red-300" : ""
  }`;

  const renderedOptions = question.options.map((option) => {
    const selectedChoice = selectedOption?.choice === option.choice;
    const correctChoice = result?.result?.correctChoice === option.choice;
    const selectedChoiceIncorrect =
      result?.result?.chosenChoice === option.choice && !answeredCorrect;

    const selectedChoiceClasses = selectedChoice
      ? "shadow-lg border-2 border-zinc-400 dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-950"
      : "";

    const correctChoiceClasses = correctChoice
      ? "shadow-lg border-2 border-green-500 dark:border-green-300 bg-green-200 dark:bg-green-200"
      : "";

    const selectedChoiceIncorrectClasses = selectedChoiceIncorrect
      ? "shadow-lg border-2 border-red-500 dark:border-red-300 bg-red-200 dark:bg-red-200"
      : "";

    const listItemClasses = `mt-2 p-2 flex gap-4 items-center border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-[0_1px_6px_0_rgba(0,0,0,0.02)] hover:transition-all ease-in-out hover:shadow-md cursor-pointer ${selectedChoiceClasses} ${correctChoiceClasses} ${selectedChoiceIncorrectClasses}`;

    return (
      <li
        onClick={() => handleOptionClick(option)}
        key={option.choice}
        className={listItemClasses}
      >
        <h3 className="p-1 pr-3 font-bold border-r-2 place-self-start">
          {option.choice}
        </h3>
        <h3>{option.answer}</h3>
        <div className="grow">
          {correctChoice ? (
            <Check className="text-green-500 w-6 h-6 place-self-end" />
          ) : null}
          {selectedChoiceIncorrect ? (
            <X className="text-red-500 w-6 h-6 place-self-end" />
          ) : null}
        </div>
      </li>
    );
  });

  return (
    <div className={questionWrapperClasses}>
      <div className="flex gap-4 items-center">
        <div className={questionNumberClasses}>{question.questionNumber}</div>
        <h1 className="font-bold text-left text-xl text-gray-900 dark:text-white hover:text-primary">
          {question.questionText}
        </h1>
        {result !== undefined ? (
          answeredCorrect ? (
            <Check className="bg-green-500 p-1 rounded-md text-white w-10 h-10" />
          ) : (
            <X className="bg-red-500 p-1 rounded-md text-white w-10 h-10" />
          )
        ) : null}
      </div>
      <ul className="mx-20 mt-6">{renderedOptions}</ul>
    </div>
  );
}
