import "./Button.css";

function App(props) {
  return (
    <div className={`button-container ${props.label.toLowerCase()}`}>
      {props.aTag ? (
        <a
          className={`button-link ${props.label.toLowerCase()}`}
          href={props.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {props.label}
        </a>
      ) : (
        <a
          className={`button-link ${props.label.toLowerCase()}`}
          onClick={props.onClick}
        >
          {props.label}
        </a>
      )}
    </div>
  );
}

export default App;
