export const questions: Question[] = [
    {
        "type": "mcq_single",
        "question": "What is the largest mammal on Earth?",
        "options": [
            "Elephant",
            "Blue Whale",
            "Giraffe",
            "Polar Bear"
        ],
        "answer": ["Blue Whale"]
    },
    {
        "type": "mcq_multiple",
        "question": "Which of the following are fruits?",
        "options": [
            "Potato",
            "Apple",
            "Banana",
            "Carrot"
        ],
        "answer": ["Apple", "Banana"]
    },
    {
        "type": "yes_no",
        "question": "Is the sun a star?",
        "answer": ["Yes"]
    }
]

interface QuestionBase {
    type: string;
    question: string;
    answer: string[];
}

interface MCQSingle extends QuestionBase {
    type: 'mcq_single';
    options: string[];
}

interface MCQMultiple extends QuestionBase {
    type: 'mcq_multiple';
    options: string[];
}

interface YesNoQuestion extends QuestionBase {
    type: 'yes_no';
}
export type Question = MCQSingle | MCQMultiple | YesNoQuestion;
