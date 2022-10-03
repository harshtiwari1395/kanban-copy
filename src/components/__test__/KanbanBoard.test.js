import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import KanbanBoard from "../KanbanBoard";

const setProjects= jest.fn();
const setColumns = jest.fn();
const addTicket  = jest.fn();
const projects= [{
    id: "id1",
    category: "Bug",
    description: "title1",
    project_stage: "stage1",
  },
  {
    id: "id2",
    category: "Feature",
    description: "title2",
    project_stage: "stage2",
  }
];
const columns=     [
    { name: "Planning", stage: "stage1"},
    { name: "Design", stage: "stage2" },
  ];

it("renders without crashing", ()=>{
    render(
        <KanbanBoard
        projects={projects}
        setProjects={setProjects}
        columns={columns}
        setColumns={setColumns}
        addTicket={addTicket}
    />
    );
    expect(screen.getByTestId("kanban-board")).toBeTruthy();
});

it("renders desired number of columns", async ()=>{
    const setProjects = jest.fn();
    render(
        <KanbanBoard
        projects={projects}
        setProjects={setProjects}
        columns={columns}
        setColumns={setColumns}
        addTicket={addTicket}
    />
    );
    const element=  screen.queryAllByTestId("kanban-column");

    expect(element.length).toBe(2);
})