class Quiz{
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    // 2. getQuestion()
    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex++
    }

    // 4. shuffleQuestions()
    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
          }
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer){
      if(answer === answer){
        this.correctAnswers++
      }
    }

    // 6. hasEnded()
    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length){
            return false
        }
        else{
            return true
        }
    }

    filterQuestionsByDifficulty(difficulty){
        if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
            console.log('Invalid difficulty level. Please provide a number between 1 and 3.');
            return;
        }

        this.questions = this.questions.filter(question => question.difficulty === difficulty);
    
      }

           
      averageDifficulty(){
        const totalDifficulty  = this.questions.reduce((sum, question) => sum + question.difficulty, 0)
        const average =  totalDifficulty / this.questions.length
        return average
        
    }

}