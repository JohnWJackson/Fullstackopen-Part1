const calcTotal = ({parts}) => 
  (parts.reduce((sum, part) => 
    (sum += part.exercises), 0));


const Total = (props) => {
  return (
    <h4>
      Number of exercises {calcTotal(props.parts)}
    </h4>
  );
};

export default Total