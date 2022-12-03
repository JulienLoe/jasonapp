// import { useEffect, useRef, useState } from "react";
// import axios from 'axios';
import InputSearch from "../Components/InputSearch";
import Card from '../Components/Card';

const Home = ({ getData, setName, setAdjective, data, setId, inputRefName, inputRefAdjective, handleClick, handleEdit, handleEditClose, viewEdit, setEditShow, handleSubmit, viewConfirm, handleConfirmClose, setConfirmShow}) => {
    return (
    <div>
        <InputSearch
         setName={setName}  
         setAdjective={setAdjective} 
         inputRefName={inputRefName} 
         inputRefAdjective={inputRefAdjective}
         handleSubmit={handleSubmit} />
        
        <Card 
         getData={getData}
        setName={setName}  
        setAdjective={setAdjective} 
        data={data}  
        setId={setId}
        handleClick={handleClick}
        handleEdit={handleEdit}
        handleEditClose={handleEditClose}
        viewEdit={viewEdit}
        setEditShow={setEditShow}
        viewConfirm={viewConfirm}
        handleConfirmClose={handleConfirmClose}
        setConfirmShow={setConfirmShow}
         />
    </div>
    );
};

export default Home;