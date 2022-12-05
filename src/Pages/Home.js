// import { useEffect, useRef, useState } from "react";
// import axios from 'axios';
import InputSearch from "../Components/InputSearch";
import Card from '../Components/Card';

const Home = ({ getData, setName, setAdjective, data, setId, inputRefName, inputRefAdjective, handleEdit, handleEditClose, viewEdit, setEditShow, handleSubmit}) => {
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
        handleEdit={handleEdit}
        handleEditClose={handleEditClose}
        viewEdit={viewEdit}
        setEditShow={setEditShow}
         />
    </div>
    );
};

export default Home;