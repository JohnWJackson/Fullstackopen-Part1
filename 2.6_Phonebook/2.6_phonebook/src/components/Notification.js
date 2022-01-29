const Notification = ({message, error = false}) => {
  if (message == null) {
    return null;
  };
  let _className = null;
  error ? _className = 'error' : _className = 'notification';
  return (
    <div className = {_className} >
      {message}
    </div>
  )
}

export default Notification