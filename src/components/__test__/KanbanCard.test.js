import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import KanbanCard from "../KanbanCard";

it("renders without crashing", ()=>{
    render(
        <KanbanCard 
        onDragEnd
        project={ {
            id: "asdasd",
            category: "category",
            description: "title",
            project_stage: "stage",
          }}
        setProjects={()=>({})}
        id={"randomId"}
    />
    );
    expect(screen.getByTestId("kanban-card")).toBeTruthy();
});

it("on delete button  click calls desired function", async ()=>{
    const setProjects = jest.fn();
    render(
        <KanbanCard 
        project={ {
            id: "asdasd",
            category: "category",
            description: "title",
            project_stage: "stage",
          }}
        setProjects={setProjects}
        id={"randomId"}
    />
    );
    const element=  screen.getByTestId("delete-button");
    fireEvent.click(element);
    expect(setProjects).toHaveBeenCalledTimes(1);


})