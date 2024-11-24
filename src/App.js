import "./App.css";

function Feature(props) {
  return (
    <div className="feature">
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>{props.title || "This is example of title"}</p>
      <p>{props.author || "This is example of author"}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
function App() {
  return (
    <div className="abc">
      <Feature
        logo="https://images.unsplash.com/photo-1731329891228-c5009dc54fb6?q=80&w=1964&auto=format&fit=crop&ixlib=rb
      -4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Bao Ngoc"
        author="BN"
      ></Feature>
      <Feature
        logo="https://images.unsplash.com/photo-1731688687538-8c5a3550ef39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       
      ></Feature>
    </div>
  );
}

export default App;
