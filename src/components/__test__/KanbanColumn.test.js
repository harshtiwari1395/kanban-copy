import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import KanbanColumn from "../KanbanColumn";

const setProjects= jest.fn();
const setColumns = jest.fn();
const addTicket  = jest.fn();
const projects= [{
    id: "id1",
    category: "Bug",
    description: "title1",
    project_stage: "stage",
  },
  {
    id: "id2",
    category: "Feature",
    description: "title2",
    project_stage: "stage",
  }
];
it("renders without crashing", ()=>{
    render(
        <KanbanColumn 
        name={"test column name"}
        setProjects={setProjects}
        stage={"stage"}
        setColumns={setColumns}
        projects={projects}
        addTicket={addTicket}
    />
    );
    expect(screen.getByTestId("kanban-column")).toBeTruthy();
});

it("calls appropriate function when + is clicked to add new ticket", async ()=>{
    const addTicket = jest.fn();
    render(
        <KanbanColumn 
        name={"test column name"}
        setProjects={setProjects}
        stage={"stage"}
        setColumns={setColumns}
        projects={projects}
        addTicket={addTicket}
    />
    );
    const addTicketButton=  screen.getByTestId("add-ticket");
    fireEvent.click(addTicketButton);
    expect(addTicket).toHaveBeenCalledTimes(1);
})

it("calls appropriate function when + is clicked to add new ticket", async ()=>{
    const addTicket = jest.fn();
    render(
        <KanbanColumn 
        name={"test column name"}
        setProjects={setProjects}
        stage={"stage"}
        setColumns={setColumns}
        projects={projects}
        addTicket={addTicket}
    />
    );

    const deleteColumnIcon=  screen.getByTestId("delete-column");
    fireEvent.click(deleteColumnIcon);
    expect(setColumns).toHaveBeenCalledTimes(1);
    expect(setProjects).toHaveBeenCalledTimes(1);

})

it("renders correct heading", async ()=>{
    render(
        <KanbanColumn 
        name={"test column name"}
        setProjects={setProjects}
        stage={"stage"}
        setColumns={setColumns}
        projects={projects}
        addTicket={addTicket}
    />
    );

    const columnHeading=  screen.getByTestId("column-text");
    expect(columnHeading).toHaveTextContent("test column name");

})

it("contains two cards", async ()=>{
    render(
        <KanbanColumn 
        name={"test column name"}
        setProjects={setProjects}
        stage={"stage"}
        setColumns={setColumns}
        projects={projects}
        addTicket={addTicket}
    />
    );
    const cards= screen.queryAllByTestId("kanban-card");
    expect(cards.length).toBe(2);
})


