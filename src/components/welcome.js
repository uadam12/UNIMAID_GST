import { getCourse, getMode } from "./store";

export const Welcome = props => (<div className="card my-3" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
  <h1 className="card-header text-primary">GST {getCourse()}, {getMode()} mode</h1>

  <div className="card-body">
    <p>
      <a className="navbar-brand" href="https://github.com/uadam12/unimaid_gst/raw/main/UNIMAID%20GST.apk">
        <img src={ require("../logo.jpg") } className="rounded" style={{
          width: "450px",
          maxWidth: "100%"
        }} alt="UNIMAID GST"/>
      </a>
    </p>
    <p>
      UNIMAID GST contains <b>all GST handouts</b>.
      It also contains <b>Questions and their Answers</b> for
      <i>7 out of the 10 available courses</i>
      (Q and A for GST 111, 112 and 122 are <b>coming soon!</b>).
    </p>

    <p>
      With our app, student can <b>read available handouts,
        open PDF from his/her local storage, read/study Q and A</b>
      and <b>check his/her understanding by playing Quiz, where he/she
        will get his/her result and corrections instantly</b> after submitting.
    </p>
  </div>

  <div className="card-footer">
    <button onClick={() => props.quiz.start()} className="btn btn-primary">Start</button>
  </div>
</div>);
