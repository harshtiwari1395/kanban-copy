
import Modal from "../modules/modals/components/Modal";
import ModalBody from "../modules/modals/components/ModalBody";
import ModalHeader from "../modules/modals/components/ModalHeader";
import ModalFooter from "../modules/modals/components/ModalFooter";
import Select from 'react-select'
import {useState} from "react"
import options from "../data/categories"

export default function NewTicketModal({close, 
  stage, createTicket}) {
  const [category, setCategory]= useState({ value: 'bug', label: 'Bug' });
  const [title, setTitle] = useState("");  
  const handleTicketCreate =()=>{
    createTicket(stage, title, category);
    close();
  }
  return (
    <Modal data-testid="add-ticket-modal">
      <ModalHeader>
        <h3>Create new ticket</h3>
      </ModalHeader>
      <ModalBody>
      <Select  options={options} value= {category} onChange={(value)=>setCategory(value) }/>
      <br/>
      <input placeholder= {"Ticket details..."} className="form-control" value={title} onChange= {e=> setTitle(e.target.value)}></input>
        
      </ModalBody>
      <ModalFooter>
      <button disabled={!title} className="btn btn-primary" onClick={handleTicketCreate}>Create Ticket</button>
      <button onClick={close} className="btn btn-light">Close</button>

      </ModalFooter>
    </Modal>
  );
}