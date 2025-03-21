import QuizForm from "@/components/QuizForm";

interface Props {
  searchParams: {
    [key: string]: string | undefined;
  };
}

export default async function Quiz({ searchParams }: Props) {
  const { response } = await searchParams;

  if (!response) {
    return (
      <div className="flex flex-col justify-center my-20 mx-10">
        No Response from LLM
      </div>
    );
  }

  const stringQuestions = response
    .replace("\\n", "")
    .replace("json", "")
    .split("```");
  const jsonQuestions = JSON.parse(stringQuestions[1]);

  return (
    <div className="flex flex-col justify-center my-20 mx-10">
      <QuizForm jsonQuestions={jsonQuestions} />
    </div>
  );
}
