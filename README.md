
## Mini Quiz Application

### Description:
A comprehensive quiz application that allows users to test their knowledge across various domains, including Verbal Reasoning, Geography, and Aptitude.

### Features:

1. **User Details Collection**:
   - Before starting the quiz, gather essential details of the user.
   - Provides users with an overview of how the quiz operates.
  
2. **Quiz Page**:
   - Displays questions from various domains with varying time limits for each.
   - Supports different question types:
     - Multiple Choice Questions with a single answer (`mcq_single`).
     - Multiple Choice Questions with multiple answers (`mcq_multiple`).
     - Yes/No questions (`yes_no`).
   - Displays one question at a time, with a stepper to indicate the progress.
   - Includes a timer for each question.
  
3. **Stepper with Timer**:
   - Visual representation of quiz progress.
   - Shows the allocated time for the current question.
   - Completed steps are disabled to prevent going back.
  
4. **Score and Analysis Page**:
   - Provides a breakdown of scores across different domains.
   - Gives insight into the user's strengths and areas of improvement.
5. **Navigation Guard**:
   - Ensures that users have provided necessary details before accessing the quiz page.

### Data Model:

The application adopts an extendable question structure allowing for multiple types of questions:

- **QuestionBase** (Shared Attributes):
  - `type`: Type of the question (`mcq_single`, `mcq_multiple`, or `yes_no`).
  - `question`: The actual question content.
  - `answer`: Correct answer(s) for the question.
  - `duration`: Time in seconds allocated for the question.
  - `domain`: The category of the question (Verbal Reasoning, Geography, Aptitude).
  - `weight`: Points or weightage for the question.

- **MCQSingle**:
  Inherits from `QuestionBase` and has additional attribute:
  - `options`: Options for the question.

- **MCQMultiple**:
  Inherits from `QuestionBase` and has additional attribute:
  - `options`: Options for the question.

- **YesNoQuestion**:
  Inherits from `QuestionBase` and specifies the type as `yes_no`.

### Instructions for Setting Up:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `ng serve`.
5. Access the app on `http://localhost:4200/`.
