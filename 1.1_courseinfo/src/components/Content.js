const Part = (part) => {
  //console.log(part.name);
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};


const Content = (props) => {
  //console.log(props.parts);
  const { parts } = props.parts;
  return (
    <div>
      {parts.map(part => 
        <div key={part.id}>
          {Part(part)}
        </div>
      )}
    </div>
  );
};

export default Content