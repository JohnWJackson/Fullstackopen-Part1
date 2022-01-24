import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (prop) => {
  const { course } = prop;
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default Course;
