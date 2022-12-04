import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef } from 'react';
import Home from './Pages/Home';
import axios from 'axios';

function App() {

  // Les States
  const [name,setName] = useState('');
  const [adjective, setAdjective] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([])
  const inputRefName = useRef();
  const inputRefAdjective= useRef();

  const [viewEdit, setEditShow]= useState(false);
  const handleEditClose = () => setEditShow(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const member = {name, adjective};
    const result = await axios.post('https://jason-api-y9ew.onrender.com/create', member)
    console.log(result)
    if(result.status===200){
      toast.success('Member created !')
      getData();
      console.log(id);
      inputRefName.current.value = '';
      inputRefAdjective.current.value = '';
    }
    else{
        console.log(Error);
    }
}

  const handleEdit = async (e) =>{
    e.preventDefault();
    const member = {name, adjective}
    const result = await axios.put(`https://jason-api-y9ew.onrender.com/${id}`, member)
    if(result.status===200){
      toast.success("Modified member !")
      handleEditClose();
      getData();
      console.log(id);
    }
    
}

   const getData = async ()=>{
       const result = await axios.get('https://jason-api-y9ew.onrender.com/');
       if(result.status===200){
       setData(result.data);
       console.log(result);
       }
     }


  useEffect((name, adjective, id) =>{
    
    setName(localStorage.setItem('name', name));
    setAdjective(localStorage.setItem('adjective', adjective));
    setId(localStorage.setItem('id', id));

       
    getData();
      
  }, [])


  return (
    <div className='App'>
      <Home 
      getData={getData}
      data={data} 
      setData= {setData}
      name={name}
      setName={setName}
      adjective={adjective}
      setAdjective={setAdjective}
      setId={setId}  
      inputRefName={inputRefName}
      inputRefAdjective={inputRefAdjective}
      
      handleEdit={handleEdit}
      handleEditClose={handleEditClose}
      handleSubmit={handleSubmit}
      viewEdit={viewEdit}
      setEditShow={setEditShow}
       />
       <ToastContainer />
    </div>
    
    
  );
}

export default App;
