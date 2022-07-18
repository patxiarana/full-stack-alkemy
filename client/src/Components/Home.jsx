import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './home.css'
const columns= [
  { title: 'Concepto', field: 'concepto' },
  { title: 'Monto', field: 'monto' },
  { title: 'Fecha', field: 'fecha' },
  { title: 'Tipo', field: 'tipo', type: 'tipo'}
];
const baseUrl="http://localhost:3000/operations";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  icons:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Home() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [operacionSeleccionada, setOperacionSeleccionada]=useState({
    concepto: "",
    monto: "",
    id: "",
    fecha: "",
    tipo: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setOperacionSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl,operacionSeleccionada)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+operacionSeleccionada.id, operacionSeleccionada)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(operacion=>{
        if(operacion.id===operacionSeleccionada.id){
          operacion.concepto=operacionSeleccionada.concepto;
          operacion.monto=operacionSeleccionada.monto;
          operacion.tipo=operacionSeleccionada.tipo;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/"+operacionSeleccionada.id)
    .then(response=>{
      setData(data.filter(operacion=>operacion.id!==operacionSeleccionada.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarOperacion=(operacion, caso)=>{
    setOperacionSeleccionada(operacion);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nueva Operacion</h3>
      <TextField className={styles.inputMaterial} label="Concepto" name="concepto"  onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Monto" name="monto" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Fecha" name="fecha"  type="date"  onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Tipo" name="tipo" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Operacion</h3>
      <TextField className={styles.inputMaterial} label="Concepto" name="concepto" onChange={handleChange} value={operacionSeleccionada&&operacionSeleccionada.concepto}/>
      <br />
      <TextField className={styles.inputMaterial} label="Monto" name="monto" onChange={handleChange} value={operacionSeleccionada&&operacionSeleccionada.monto}/>          
<br />
<TextField className={styles.inputMaterial} label="Fecha" name="fecha" onChange={handleChange}  type="date" value={operacionSeleccionada&&operacionSeleccionada.fecha}/>
      <br />
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estas seguro que desea eliminar operacion<b>{operacionSeleccionada && operacionSeleccionada.operacion}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div className="Home">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Incertar operacion</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Operaciones"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar operacion',
              onClick: (event, rowData) => seleccionarOperacion(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar operacion',
              onClick: (event, rowData) => seleccionarOperacion(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />


        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default Home;