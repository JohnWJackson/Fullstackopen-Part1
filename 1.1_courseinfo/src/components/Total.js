const calcTotal = ({parts}) => {
  let sum = 0;
  parts.forEach(p => {sum += p.exercises});
  return sum;
};

const Total = (props) => {
  return (
    <p>
      Number of exercises {calcTotal(props.parts)}
    </p>
  );
};

export default Total