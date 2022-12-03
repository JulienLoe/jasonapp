import ModalForm from "../Modals/ModalForm";
import {useState} from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Card = ({getData, setName, setAdjective, data, setId, handleEdit, handleEditClose, viewEdit, setEditShow,}) => {
    // Logique des modals
    const handleEditView = ()=> {setEditShow(true)};
    const handleConfirmView = ()=> {setConfirmShow(true)};
    const [viewConfirm, setConfirmShow]= useState(false);
    const handleConfirmClose = () => setConfirmShow(false);
    const message = 'Are you sure ?';

    const handleClick = async (e, id) =>{
        e.preventDefault();
        if(id!==undefined){
          const result = await axios.delete(`http://localhost:8080/${id}`)
          console.log(result)
          if(result.status===200){
            toast.error('Deleted member !')
              handleConfirmClose();
               getData();
               console.log(id);
              
          }
        }
      }
    
    return (
        <>
        <div className='pageCard'>
        <div className='containerCard'>
        
            {data.map((elements,index) =>{
                return(
            <div key={elements._id} className='elementCard'>
                <ul>
                    <li>{elements.name}</li>
                    <li>{elements.adjective}</li>
                </ul>
                <div className="btnContainer">
                <Button className='btnEdit' variant='secondary' type='submit' onClick={() => {handleEditView(setId(elements._id))}}>Edit</Button>
                <Button className='btnDelete' variant='danger' onClick={()=>{handleConfirmView(elements._id)}}>Delete</Button>
                </div>
                <div className="model-box-view">
                
                <ModalForm viewEdit={viewEdit} handleEditClose={handleEditClose} setName={setName} setAdjective={setAdjective} handleEdit={handleEdit}/> 
                
                <Modal show={viewConfirm}
                    onHide={handleConfirmClose} 
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>{message}</Modal.Body>
        <                               Modal.Footer>
                                        <Button variant="primary" onClick={handleConfirmClose}>CLOSE</Button>
                                        <Button variant="danger" onClick={(e)=>handleClick(e,elements._id)}>DELETE</Button> 
                                        </Modal.Footer>
                </Modal>
                </div>
            </div>
            )}
            )}

        
</div>
</div>
</>
    );
};

export default Card;