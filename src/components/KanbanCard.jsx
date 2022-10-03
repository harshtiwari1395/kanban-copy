import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";

const KanbanCard = ({ onDragEnd, project, setProjects, id }) => {
    const colorMapping = {
      Bug: "red",
      Feature: "blue",
      Request: "green",
    };
  
    const [collapsed, setCollapsed] = useState(true);
    const deleteCard = () =>
      setProjects((projects) => projects.filter((item) => item.id !== id));
    const cardStyle = {
      backgroundColor: "#ffffff",
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "5px",
      paddingBottom: "5px",
      marginLeft: "0px",
      marginRight: "5px",
      marginBottom: "5px",
      borderRadius: "4px",
    };
    const circleStyle = {
      display: "inline-flex",
      width: 10,
      height: 10,
      borderRadius: "50%",
    };
  
    return (
      <div
        data-testid= "kanban-card"
        style={cardStyle}
        draggable={true}
        onDragEnd={(e) => {
          onDragEnd(e, project);
        }}
      >
        {" "}
        <div
          style={{
            color: colorMapping[project.category],
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div
              style={{
                ...circleStyle,
                backgroundColor: colorMapping[project.category],
              }}
            ></div>{" "}
            {project.category}
          </div>
          <FontAwesomeIcon data-testid= "delete-button" onClick={deleteCard} icon={faTrash} className="deleteIcon delete-icon-margin" size= {"sm"}/>
          {/* <button onClick={deleteCard}>delete</button> */}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", marginLeft: "7%" }}>
          <strong>{project.description}</strong>
          <br />
        </div>
      </div>
    );
  };

  export default KanbanCard;