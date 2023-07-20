function Modal(props) {
  return (
    <div className="modal">
      <p> Are you Sure ? </p>
      <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
      <button className="btn" onClick={props.onClick}>Submit</button>
    </div>
  );
}

export default Modal;
