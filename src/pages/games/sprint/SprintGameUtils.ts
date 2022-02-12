import { ICard } from "../../../services/types";

const randomAnswer = (array: ICard[]) => (Math.floor(Math.random() * (array.length)));

const wordCorrect =
  (array: ICard[], question: number, answer: number, resultArray: boolean[], setQuestion: any, setAnswer: any) => {
    resultArray.push(true);
    setQuestion(question += 1);
    console.log(resultArray);
    setAnswer(randomAnswer(array));
  };
const wordWrong =
  (array: ICard[], resultArray: boolean[], setAnswer: any) => {
    resultArray.push(false);
    console.log(resultArray);
    setAnswer(randomAnswer(array));
  };

export const isCorrect =
  (array: ICard[], question: number, answer: number, resultArray: boolean[], setQuestion: any, setAnswer: any, isTrue: boolean) => {
    console.log(array);
    if (question < array.length) {
      console.log('question= ', question);
      if (isTrue) {
        if (array[question].wordTranslate === array[answer].wordTranslate) {
          wordCorrect(array, question, answer, resultArray, setQuestion, setAnswer);
        } else {
          wordWrong(array, resultArray, setAnswer);
        }
      } else if (array[question].wordTranslate !== array[answer].wordTranslate) {
        wordCorrect(array, question, answer, resultArray, setQuestion, setAnswer);
      } else {
        wordWrong(array, resultArray, setAnswer);
      }
    } else {
      alert('Game over');
    }
  }
