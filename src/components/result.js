import { Text } from "./formatter.js";

export const Result = props => {
  const quiz = props.quiz;
  const result = quiz.result();
  const correction = result.wrongs.map(q => {
    const statements = q.statements? q.statements.map(stm => <p key={stm}>{stm}</p>): "";

    return (<div key={q.id}> <hr />

      <div className="text-start">
        <Text content={ q.question } />
        {statements}
      </div>

      <p>Your answer: <span className="text-danger">{ q.answer  }</span></p>
      <p>Correct answer: <span className="text-success">{ q.correct }</span></p>

    </div>);
  });
  
  return (<div className='card my-3' style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
    <h1 className="card-header text-primary">Your Result</h1>

    <div className="card-body text-start">
      <h3 className="text-info">You score: {result.score}%</h3>
	    <p>You answered {result.corrects} question(s) correctly, {result.inCorrects} question(s) wrongly and skip {result.skips} question(s).</p>

      {result.score >= 40?
        <p className="text-success">Passed</p>:
        <p className="text-danger">Failed</p>
      }

      <h2 className="text-center text-success">Correction</h2>
      {correction}
    </div>

    <div className="card-footer">
	    <button onClick={() => quiz.reset()} className="btn btn-primary">Try again</button>
    </div>
  </div>);
}