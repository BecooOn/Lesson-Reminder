import React from "react";
import LessonCard from "../components/LessonCard/LessonCard";
import "../../src/index.css";

const Lesson = ({ data,clear,setClear }) => {
  return (
    <div className="lessonPage">
      <LessonCard data={data} setClear={setClear} clear={clear}/>
    </div>
  );
};

export default Lesson;
