export type MCOption = {
  choiceId: string;
  text: string;
};
export type MCQuestion = {
  setId: number;
  options: MCOption[];
  correctChoiceId: string;
  question: string;
};
