import { Course as TCourse } from "../../common/types/Course";
import classes from './CourseCard.module.scss';

type Props = {
  course: TCourse;
};

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper} style={{backgroundColor: `${course.bgColor}`}}>
        <img className={classes.image} src={course.image} alt={"picture of course"} />
      </div>
      <div className={classes.title}>{course.name}</div>
    </div>
  );
};

export default CourseCard;
