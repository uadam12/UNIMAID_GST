import { Text } from "./formatter.js";

export const Result = props => {
  const quiz = props.quiz;
  const result = quiz.result();
  const wrongs = result.wrongs;
  const correction = wrongs.map(q => {
    const statements = q.statements? q.statements.map(stm => <p key={stm}>{stm}</p>): "";

    return (<li key={q.id}> <hr />

      <div className="text-start">
        <Text content={ q.question } />
        {statements}
      </div>

      <p>Your answer: <span className="text-danger">{ q.answer  }</span></p>
      <p>Correct answer: <span className="text-success">{ q.correct }</span></p>

    </li>);
  });
  
  return (<div className='card m-3 mx-auto' style={{ maxWidth: "600px"}}>
    <h1 className="card-header text-primary">Your Result</h1>

    <div className="card-body text-start">
      <h3 className="text-info">You score: {result.score}%</h3>
	    <p>You answered {result.corrects} question(s) correctly, {result.inCorrects} question(s) wrongly and skip {result.skips} question(s).</p>

      {result.score >= 40?
        <p className="text-success">Passed</p>:
        <p className="text-danger">Failed</p>
      }

      { (wrongs.length > 0) ? 
        <div>
          <h2 className="text-center text-success">Corrections</h2>
          <ol>{ correction} </ol>
        </div>:
        <h2 className="text-center text-success">You are the BOSS!!!</h2>
      }
    </div>

    <div className="card-footer">
	    <button onClick={() => quiz.reset()} className="btn btn-primary">Try again</button>
    </div>
  </div>);
}