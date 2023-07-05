import { Text } from "./formatter";

export const Question = props => {
  const quiz = props.quiz;
  const question = quiz.getQuestion();
  const opts = quiz.getOptions();
  const stms = question.statements;
  const statements = stms? stms.map(stm => <p>{stm}</p>): "";
  
  const Options = question.options? () => 
  (<ol type="A" className="list-group text-start">{
    Object.keys(opts.options).map(opt => {
      const option = opts.options[opt];
      let klass = "list-group-item";

      if(opt === opts.choosen) klass += " active";

      return <li key={opt} 
        onClick={e => {
          const lss = Array.from(e.target.parentElement.children);

          lss.forEach(li => li.classList.remove("active"));
          e.target.classList.add("active");
          props.quiz.selectAnswer(opt);
        }} 
        className={klass}
      >{opt.toUpperCase()}. {option}</li>;
    })
  }</ol>):() => (<form onSubmit={ e => {
      e.preventDefault();
      quiz.next();
    }} className="input-group">
    <input autoFocus value={quiz.getAnswer()}
      onChange={e => {
        props.quiz.writeAnswer(e.target.value);
    }} 
    className="form-control" 
    placeholder="Fill in the blank"/>
  </form>);
  
  return (<div className="text-start">
    <Text content={question.question} />
    {statements}
    <Options />
  </div>);
}