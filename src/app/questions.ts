export const questions: Question[] = [
    {
        "type": "mcq_multiple",
        "domain": "Verbal Reasoning",
        "question": "Choose the word that is most similar to 'Beneficial':",
        "options": [
            "Detrimental",
            "Harmful",
            "Advantageous",
            "Favourable"
        ],
        "answer": ["Advantageous", "Favourable"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Verbal Reasoning",
        "question": "Which word doesn't fit?",
        "options": [
            "Window",
            "Door",
            "Ceiling",
            "Floor"
        ],
        "answer": ["Ceiling"],

        duration: 60,
        weight: 1
    },
    {
        "type": "yes_no",
        "domain": "Verbal Reasoning",
        "question": "Is the following statement always true? 'A rectangle is a square.'",
        "answer": ["No"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Geography",
        "question": "Which of the following countries is NOT in Europe?",
        "options": [
            "Spain",
            "Australia",
            "Germany",
            "Italy"
        ],
        "answer": ["Australia"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Geography",
        "question": "The river Nile flows into which body of water?",
        "options": [
            "Indian Ocean",
            "Mediterranean Sea",
            "Red Sea",
            "Atlantic Ocean"
        ],
        "answer": ["Mediterranean Sea"],

        duration: 60,
        weight: 1
    },
    {
        "type": "yes_no",
        "domain": "Geography",
        "question": "Is Mount Everest located in Africa?",
        "answer": ["No"],

        duration: 120,
        weight: 2
    },
    {
        "type": "mcq_single",
        "domain": "Aptitude",
        "question": "If a shirt costs $20 and is reduced by 25%, how much will it cost now?",
        "options": [
            "$5",
            "$10",
            "$15",
            "$25"
        ],
        "answer": ["$15"],

        duration: 120,
        weight: 2
    },
    {
        "type": "mcq_single",
        "domain": "Aptitude",
        "question": "Which number comes next in the sequence: 2, 4, 6, 8, ...?",
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": ["10"],

        duration: 120,
        weight: 2
    },
    {
        "type": "yes_no",
        "domain": "Aptitude",
        "question": "Is the number 1000 divisible by 2?",
        "answer": ["Yes"],

        duration: 120,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Verbal Reasoning",
        "question": "Identify the antonym of 'Harsh':",
        "options": [
            "Rough",
            "Gentle",
            "Tough",
            "Stiff"
        ],
        "answer": ["Gentle"],

        duration: 60,
        weight: 1
    },
    {
        "type": "yes_no",
        "domain": "Geography",
        "question": "Is Brazil located in South America?",
        "answer": ["Yes"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Aptitude",
        "question": "Which shape has more sides: Pentagon or Hexagon?",
        "options": [
            "Pentagon",
            "Hexagon",
            "Both have same sides",
            "Neither"
        ],
        "answer": ["Hexagon"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Verbal Reasoning",
        "question": "Which of these words is spelled incorrectly?",
        "options": [
            "Definitely",
            "Separate",
            "Occurrence",
            "Maintanance"
        ],
        "answer": ["Maintanance"],

        duration: 60,
        weight: 3
    },
    {
        "type": "yes_no",
        "domain": "Geography",
        "question": "Is the Sahara Desert located in Asia?",
        "answer": ["No"],

        duration: 60,
        weight: 1
    },
    {
        "type": "mcq_single",
        "domain": "Aptitude",
        "question": "If you reverse the number 56, what number do you get?",
        "options": [
            "65",
            "66",
            "55",
            "46"
        ],
        "answer": ["65"],
        duration: 60,
        weight: 1
    }
]


interface QuestionBase {
    type: string;
    question: string;
    answer: string[];
    duration: number;
    domain: 'Verbal Reasoning' | 'Geography' | 'Aptitude';
    weight: number;
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
