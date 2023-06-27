import { getCourse, saveCourse, saveMode } from "./store";

export const Header = () => {
  const courses = [111, 112, 113, 122, 123, 211, 212, 221, 224, 231].map(code => 
    <li key={code}><span onClick={() => {
      saveCourse(code); 
    }} data-code={code} className="dropdown-item">GST {code}</span></li>);
    
  const modes = ["Quick", "Test", "Exam"].map(mode => 
    <li key={mode}><span onClick={e => saveMode(mode) } data-mode={mode.toLowerCase()} className="dropdown-item">{mode}</span></li>);
  
  return (<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://github.com/uadam12/unimaid-gst/raw/main/UNIMAID%20GST.apk">
          <img src={ require("../logo.jpg") } className="rounded-pill" style={{width: "40px"}} alt="UNIMAID GST"/>
        </a>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" 
                onClick={() => {
                  const pdf = require(`../handouts/${getCourse()}.pdf`);
                  window.open(pdf, "_blank");
              }}>Read Handout</span>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Courses</span>
              <ul className="dropdown-menu">{ courses }</ul>
            </li>
    
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Mode</span>
              <ul className="dropdown-menu">{ modes }</ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
};
