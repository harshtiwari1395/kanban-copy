import React from "react";
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// import NewTicketModal from "../NewTicketModal";
import ModalService from "../../modules/modals/services/ModalService";
import ModalRoot from "../../modules/modals/components/ModalRoot"
it("renders without crashing", ()=>{
    const createTicket= jest.fn();
    const stage="stage";
    render(
        <ModalRoot  />
    );
    //ModalService.open(NewTicketModal, { createTicket, stage });

    expect(screen.getByTestId("modal-root")).toBeTruthy();
});

