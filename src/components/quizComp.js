import Timer from "./timer.js";
import { Question } from "./question.js";

export const QuizComp = props => (<div className="card m-3 mx-auto" style={{ maxWidth: "600px"}}>
  <div className="card-header">
    <p className="text-info text-left">Question {props.quiz.state.index+1} of {props.quiz.questions.length}</p>
    <Timer quiz={props.quiz} />
  </div>
  
  <div className="card-body">
    {props.quiz.state.answers}
    <Question quiz={props.quiz} />
  </div>

  <div className="card-footer">
    <div className="row">
       <div className="col-6 text-start">
          <button onClick={()=> props.quiz.prev()} className="btn btn-primary">&lt;&lt;</button>
       </div>

       <div className="col-6 text-end">
	{!props.quiz.lastQuestion()?
	  <button onClick={()=> props.quiz.next()} className="btn btn-primary">&gt;&gt;</button>:
	  <button onClick={()=> props.quiz.submit()} className="btn btn-warning">Submit</button>
	}
       </div>
    </div>
  </div>
</div>);
