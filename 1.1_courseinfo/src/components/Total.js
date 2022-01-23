const calcTotal = ({parts}) => 
  (parts.reduce((sum, part) => 
    (sum += part.exercises), 0));


const Total = (props) => {
  return (
    <p>
      Number of exercises {calcTotal(props.parts)}
    </p>
  );
};

export default Total