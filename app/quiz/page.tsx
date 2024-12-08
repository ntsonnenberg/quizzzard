interface Props {
  searchParams: {
    [key: string]: string;
  };
}

type Option = {
  choice: string;
  answer: string;
  isCorrect: boolean;
};

interface Question {
  questionNumber: number;
  questionText: string;
  options: Option[];
}

export default async function Quiz({ searchParams }: Props) {
  const response = (await searchParams.response) || "No response sent.";

  const stringQuestions = response
    .replace("\\n", "")
    .replace("json", "")
    .split("```");
  const jsonQuestions = JSON.parse(stringQuestions[1]);
  console.log(jsonQuestions);

  return (
    <div className="flex flex-col justify-center  h-screen my-40 mx-10">
      {jsonQuestions &&
        jsonQuestions.map((question: Question) => (
          <div key={question.questionNumber} className="my-10">
            <h1 className="font-bold text-xl">
              {question.questionNumber}) {question.questionText}
            </h1>
            <div className="ml-10">
              {question.options.map((option) => (
                <h3
                  key={option.choice}
                  className={option.isCorrect ? "text-green-500" : ""}
                >
                  {option.choice}) {option.answer}
                </h3>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
