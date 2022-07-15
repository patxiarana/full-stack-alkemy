import React from "react";
import { Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { useFormik, Field, FormikProvider  } from "formik";
import Swal from 'sweetalert2';
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {CreateOp} from "./action"

const useStyles = makeStyles({
    container: {
        display: 'grid'
    },
    card: {
        backgroundColor: 'rgb(173, 184, 175)',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        borderRadius: '5px',
        border: 'solid 1px black',
        alignSelf: "center",
        justifyContent: "center"

    }
})





export default function Formoperation() {
    const dispatch = useDispatch();

  const clases = useStyles()
    const formik = useFormik({
        onSubmit: async(valores, { resetForm }) => {
         console.log(valores)
         if(!valores.tipo){
            Swal.fire('por favor ingrece un tipo')
         } // await axios.post("http://localhost:3000/operations/create",valores)
            dispatch(CreateOp(valores))
          resetForm("")
     },
        initialValues: {
            concepto: "",
            monto: 0,
            fecha:"",
            tipo:"",
        },
        validate: (valores) => {
            let errors = {}

            if (!valores.concepto) {
                errors.concepto = "Debes agregar un concepto"
            }

            if (!valores.monto) {
                errors.monto = "Debes agregar un monto"
             }
            if (!valores.fecha) {
                errors.fecha = "Debes agregar una fecha"
            }
            return errors
        }
    })



 
    return (
        <FormikProvider value={formik}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: '80%' }}>
      <div style={{maxWidth: '100%'}}>
        <h2> Crear operacion:</h2>
        <form onSubmit={formik.handleSubmit} style={{}}>
            <Card
                style={{ backgroundColor: "#e9e9e9", display: "flex", alignItems: "center", color: 'white', borderRadius: '5px', justifyContent: "center",
                maxWidth: '100%', marginLeft: '10%',
                flexDirection: "column" }}
                sx={{ width: 500 }} className={clases.card}>

                <TextField

                    style={{ marginTop: "30px", width: "90%", justifySelf: "center", backgroundColor: "white" }}
                    id="concepto"
                    name="concepto"
                    label="concepto"
                    value={formik.values.concepto}
                    onChange={formik.handleChange}
                    error={formik.touched.concepto && Boolean(formik.errors.concepto)}
                    helperText={formik.touched.concepto && formik.errors.concepto}
                    onBlur={formik.handleBlur} />
                    <TextField

                    style={{ marginTop: "30px", width: "90%", justifySelf: "center", backgroundColor: "white" }}
                    id="monto"
                    name="monto"
                    label="monto"
                    value={formik.values.monto}
                    onChange={formik.handleChange}
                    error={formik.touched.monto && Boolean(formik.errors.title)}
                    helperText={formik.touched.monto && formik.errors.monto}
                    onBlur={formik.handleBlur} />
                      <TextField

                    style={{ marginTop: "30px", width: "90%", justifySelf: "center", backgroundColor: "white" }}
                    id="fecha"
                    name="fecha"
                    label="fecha"
                    type='date'
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    error={formik.touched.fecha && Boolean(formik.errors.fecha)}
                    helperText={formik.touched.fecha && formik.errors.fecha}
                    onBlur={formik.handleBlur} />
                    <div>
                    <Field name="tipo" as="select">
                        <option>elija un tipo</option>
                      <option value="ingreso">ingreso</option>
                      <option value="egreso">egreso</option>
                    </Field>
                    </div>
            <Button style={{ backgroundColor: "black", color: 'white', borderRadius: '5px', width: "60%", margin: "15px" }} color="primary" variant="contained" fullWidth type="submit">
                    Crear
                </Button>

            </Card>
            
        </form>
        </div>
    </div>
    </FormikProvider>
    )
}


	


