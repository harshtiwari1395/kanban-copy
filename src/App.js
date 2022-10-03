import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import KanbanBoard from "./components/KanbanBoard";
// for modal reusability
import ModalRoot from "./modules/modals/components/ModalRoot";
import ModalService from "./modules/modals/services/ModalService";
import NewColumnModal from "./components/NewColumnModal";
import NewTicketModal from "./components/NewTicketModal";
import useLocallyStoredState from "./hooks/useLocallyStoredState";
const App = () => {
  const [projects, setProjects] = useLocallyStoredState(
    projectList,
    "projects"
  );

  const [columns, setColumns] = useLocallyStoredState(
    [
      { name: "Planning", stage: uuidv4() },
      { name: "Design", stage: uuidv4() },
      { name: "In Progress", stage: uuidv4() },
      { name: "Testing", stage: uuidv4() },
      { name: "Launch", stage: uuidv4() },
    ],
    "columns"
  );

  const style = {
    padding: "30px",
    paddingTop: "5px",
  };
  const addModal = () => {
    ModalService.open(NewColumnModal, { columns, setColumns });
  };

  const addTicket = (stage) => {
    ModalService.open(NewTicketModal, { createTicket, stage });
  };

  const createTicket = (stage, title, category) => {
    setProjects((projects) => [
      ...projects,
      {
        id: uuidv4(),
        category: category.label,
        description: title,
        project_stage: stage,
      },
    ]);
  };

  return (
    <div style={style}>
      <h1 style={{textAlign: "center", marginBottom:"15px"}}>Welcome To Kanban Board</h1>
      <ModalRoot />
      <div style={{display: "inline-flex"}}>
      <div style={{maxWidth:"85vw"}}>
        <KanbanBoard
          projects={projects}
          setProjects={setProjects}
          columns={columns}
          setColumns={setColumns}
          addTicket={addTicket}
        />
        </div>
        <span>
        <button data-testid="add-column" onClick={addModal} className="btn btn-primary margin-style">
          New Column
        </button>
        </span>
        </div>
      </div>
  );
};

let projectList = [];

export default App;
