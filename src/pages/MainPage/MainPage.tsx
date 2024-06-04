import { useEffect, useMemo, useState } from "react";

import TagFilter from "../../components/TagFilter/TagFilter";
import CourseList from "../../components/CourseList/CourseList";
import classes from "./MainPage.module.scss";
import { Course as TCourse } from "../../common/types/Course";
import { fetchCourses } from "../../services/api/coursesAPI";
import { useQuery } from "react-query";

const MainPage: React.FC = () => {
  const { isLoading, error, data } = useQuery("courses", fetchCourses);

  useEffect(() => {
    if (data) getCourses(data);
  }, [data]);

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("Все темы");

  const getCourses = (data: TCourse[]) => {
    const uniqueTags: string[] = ["Все темы"];

    if (!data) {
      return uniqueTags;
    }

    data?.forEach((course: TCourse) => {
      course.tags.forEach((tag) => {
        if (!uniqueTags.includes(tag)) {
          uniqueTags.push(tag);
        }
      });
    });

    setTags(uniqueTags);
  };

  const filteredCourses = useMemo(() => {
    return selectedTag === "Все темы"
      ? data
      : data.filter((course: TCourse) =>
          course.tags.includes(selectedTag)
        );
  }, [selectedTag, data]); 
  

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>{`Ошибка: ${error}`}</p>;

  return (
    <div className={classes.container}>
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default MainPage;
