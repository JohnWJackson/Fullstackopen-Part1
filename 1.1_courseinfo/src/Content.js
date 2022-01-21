const Part = (part) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};


const Content = (props) => {
  const { parts } = props.parts;
  return (
    <div>
      {Part(parts[0])}
      {Part(parts[1])}
      {Part(parts[2])}
    </div>
  );
};

export default Content