"use client";

import React, { useState, useEffect, useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./taskList.module.css";

const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setVisibleDropdown(visibleDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisibleDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditText(taskList[index]);
    setVisibleDropdown(null);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = () => {
    const updatedTasks = [...taskList];
    updatedTasks[editingIndex] = editText;
    setTaskList(updatedTasks);
    setEditingIndex(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div className={styles["tasks_container"]}>
      <h2>Tasks</h2>
      {taskList.map((task, index) => (
        <div key={index} className={styles["task_content"]}>
          <div className={styles["task"]}>
            <Checkbox />
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={handleEditChange}
                onBlur={saveEdit}
                className={styles["edit_input"]}
              />
            ) : (
              <p>{task}</p>
            )}
          </div>
          <div
            className={styles["more_vert_container"]}
            onClick={() => toggleDropdown(index)}
          >
            <MoreVertIcon />
            {visibleDropdown === index && (
              <div ref={dropdownRef} className={styles["dropdown_menu"]}>
                <p onClick={() => handleEditClick(index)}>Edit</p>
                <p onClick={() => deleteTask(index)}>Delete</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
