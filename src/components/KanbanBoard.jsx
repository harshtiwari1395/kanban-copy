import {useState} from "react";
import KanbanColumn from "./KanbanColumn";
const KanbanBoard = ({
    projects,
    setProjects,
    columns,
    setColumns,
    addTicket,
  }) => {
    const [draggedOverColumn, setDraggedOverColumn] = useState(0);
    //this is called when a Kanban card is dragged over a column (called by column)
    const handleOnDragEnter = (e, stageValue) => {
      setDraggedOverColumn(stageValue);
    };
  
    //this is called when a Kanban card dropped over a column (called by card)
    const handleOnDragEnd = (e, project) => {
      e.preventDefault();
      const updatedProjects = projects.slice(0);
      updatedProjects.find((projectObject) => {
        return projectObject.id === project.id;
      }).project_stage = draggedOverColumn;
      setProjects(updatedProjects);
    };
    return (
      <div data-testid="kanban-board" style={{ display: "flex", flexWrap: "nowrap" }}>
        {columns.map((column) => {
          return (
            <KanbanColumn
              name={column.name}
              setProjects={setProjects}
              stage={column.stage}
              setColumns={setColumns}
              projects={projects.filter((project) => {
                return project.project_stage === column.stage;
              })}
              onDragEnter={handleOnDragEnter}
              onDragEnd={handleOnDragEnd}
              key={column.stage}
              addTicket={addTicket}
            />
          );
        })}
      </div>
    );
  };

  export default KanbanBoard;