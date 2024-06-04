import React from "react";
import classes from "./TagFilter.module.scss";

type Props = {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

const TagFilter: React.FC<Props> = ({
  tags,
  selectedTag,
  onSelectTag,
}) => {
  return (
    <div className={classes.container}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${classes.button} ${selectedTag === tag ? classes.selected : ''}`}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
