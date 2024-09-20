"use client";

import React from "react";
import styles from "./taskSocial.module.css";
import TaskList from "./task-list/taskList";
import SocialPlatformStat from "./social-platform-stat/socialPlatformStat";

const TaskSocial = () => {
  const tasks = [
    "Stakeholder Meeting",
    "Add Style",
    "Social Media Campaign",
    "Add Security to the Sites",
  ];
  return (
    <div className={styles["task_social_container"]}>
      <SocialPlatformStat />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskSocial;
