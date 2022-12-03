import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Button } from "react-bootstrap";

const ModalForm = ({viewEdit, handleEditClose, setName, setAdjective, handleEdit}) => {
    return (
            <Modal
                    show={viewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false} > 
                    <ModalHeader closeButton>
                        <ModalTitle>Edit your member</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                    <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' name='name' type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/>
                    </div>
                    <div className='form-group mt-3'>
                    <label>Adjective</label>
                    <input className='form-control' name="adjective" type='text'  onChange={(e) =>setAdjective(e.target.value)} placeholder='Enter your adjective'></input>
                    </div>
                
                <Button variant='primary' className='btn mt-4' type='submit' onClick={handleEdit}>Edit</Button>
                    </ModalBody>
                    <ModalFooter>
                        <button variant='secondary' onClick={handleEditClose}>Close</button>
                    </ModalFooter>
                </Modal>
    );
};

export default ModalForm;