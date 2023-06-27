import React from "react";
import { Result } from "./result.js";
import { Welcome } from "./welcome.js";
import { QuizComp } from "./quizComp.js";
import { getData, getMode } from "./store.js";

export default class Quiz extends React.Component {
   constructor(props) {
      super(props);

      this.title = "UNIMAID GST";
      this.answers = [];
      this.questions = [];
      this.state = {
         started: false,
         submitted: false,
         index: 0
      };
      this.set();
   }
   data() {
      return require(`../questions/${getData()}.json`);
   }
   set() {
      switch(getMode().toLowerCase()) {
         case "test":
            this.totalQuestions = 20;
            this.timeAllowed = 600;
            break;
         case "exam":
            this.totalQuestions = 35;
            this.timeAllowed = 1200;
            break;
         default:
            this.totalQuestions = 10;
            this.timeAllowed = 300;
      }

      this.questions = this.data().sort((a, b) => 0.5 - Math.random()).slice(0, this.totalQuestions);
      this.answers = [];
   }
   reset() {
      this.set();
      this.setState({
         started: false,
         submitted: false,
         index: 0
      });
   }

   start() {
      this.setState({ started: true });
   }
   submit() {
      this.setState({
         submitted: true,
         started: false
      });
   }
   getQuestion(i = this.state.index) {
      return this.questions[i];
   }
   getOptions(i = this.state.index) {
      return {
         options: this.getQuestion(i).options,
         choosen: this.answers[i]
      }
   }

   getAnswer() {
      return this.answers[this.state.index];
   }
   selectAnswer(ans) {
      const i = this.state.index;
      this.answers[i] = ans;

      const gotoNext = window.setTimeout(() => {
         if(this.state.index === i) this.next();
         window.clearTimeout(gotoNext);
      }, 500);
   }

   writeAnswer(ans) {
      const i = this.state.index;
      this.answers[i] = ans;
   }

   lastQuestion() {
      return this.state.index >= this.questions.length - 1;
   }
   prev() {
      if (this.state.index <= 0) return;
      this.setState({
         index: this.state.index - 1
      });
   }
   next() {
      if (this.lastQuestion()) return;
      this.setState({
         index: this.state.index + 1
      });
   }
   result() {
      const wrongs = [];
      let corrects = 0;

      for (let i in this.answers) {
         let answer = this.answers[i];

         if(!answer) continue;

         const q = this.questions[i];
         let correct = q.correct;
         const options = q.options;
         const correctly = answer.toLowerCase() === correct.toLowerCase();

         if (correctly) corrects++;
         else {
            if(q.options) {
               answer = options[answer];
               correct = options[correct];
            }

            wrongs.push({
               id: q.id,
               question: q.question,
               statements: q.statements,
               answer: answer,
               correct: correct
            });
         }
      }

      const wrongly = wrongs.length;
      return {
         corrects: corrects,
         inCorrects: wrongly,
         wrongs: wrongs,
         score: Math.round(corrects / this.totalQuestions * 100),
         skips: this.totalQuestions - (corrects + wrongly)
      };
   }
   render() {
      if (this.state.submitted)
         return <Result quiz={this} />;
      if (this.state.started)
         return <QuizComp quiz={this} />;

      return <Welcome quiz={this} />;
   }
}