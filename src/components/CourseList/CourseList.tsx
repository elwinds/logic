import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Course as TCourse } from "../../common/types/Course";
import classes from './CourseList.module.scss';

type Props = {
  courses: TCourse[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <section className={classes.container}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
};

export default CourseList;
