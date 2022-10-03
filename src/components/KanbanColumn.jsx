import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KanbanCard from "./KanbanCard";
import {useState} from "react";
const KanbanColumn = ({
    stage,
    name,
    projects,
    setProjects,
    onDragEnter,
    onDragEnd,
    setColumns,
    addTicket,
  }) => {
    const [mouseIsHovering, setMouseIsHovering] = useState(false);
  
    const deleteColumn = () => {
      setColumns((cols) => cols.filter((item) => item.stage !== stage));
      setProjects((proj) => proj.filter((item) => item.project_stage !== stage));
    };
    const handleNewCardAddition = () => {
      addTicket(stage);
    };
    const generateKanbanCards = () => {
      return projects.slice(0).map((project) => {
        return (
          <KanbanCard
            project={project}
            key={project.id + project.project_stage}
            onDragEnd={onDragEnd}
            setProjects={setProjects}
            id={project.id}
          />
        );
      });
    };
  
    const columnStyle = {
      display: "inline-block",
      verticalAlign: "top",
      marginRight: "5px",
      marginBottom: "5px",
      paddingLeft: "5px",
      paddingTop: "0px",
      width: "230px",
      textAlign: "center",
      backgroundColor: mouseIsHovering ? "#efe2e2" : "#faf7f7",
      border: mouseIsHovering ? "dashed 2px red" : undefined,
      borderRadius: "10%",
      cursor: "copy",
    };
    return (
      <div 
        style={columnStyle}
        className="kanban-column"
        onDragEnter={(e) => {
          e.preventDefault();
          setMouseIsHovering(true);
          onDragEnter(e, stage);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setMouseIsHovering(false);
        }}
        data-testid= "kanban-column"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <FontAwesomeIcon data-testid= "add-ticket" onClick={handleNewCardAddition} icon={faPlus} className="addIcon"/>
          <FontAwesomeIcon data-testid= "delete-column" onClick={deleteColumn} icon={faTrash} className="deleteIcon"/>
        </div>
  
        <div data-testid= "column-text" style={{textAlign: "left", marginLeft: "4%"}}><strong >{name} ({projects.length})</strong></div>
        {generateKanbanCards()}
        <br />
      </div>
    );
  };

  export default KanbanColumn;