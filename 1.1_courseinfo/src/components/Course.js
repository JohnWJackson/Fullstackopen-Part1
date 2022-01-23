import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  const { course } = props;
  course.parts.map(p => console.log(p.name));
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default Course;
