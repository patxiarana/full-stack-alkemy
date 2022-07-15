import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core";
const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.primary,
  },
  card: {
    backgroundColor: 'rgb(173, 184, 175)',
    boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
    borderRadius: '5px',
    border: 'solid 1px black'
}
}));

const  MaterialCard = (props) => {
  const classes = estilos();
console.log(props)
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} lg={3} className={classes.card}>
      <Box
        bgcolor='primary.main'
        color="primary.contrastText"
        p={2}
        textAlign="center"
      >
     <p>concepto:{props.concepto}</p>
     <p>monto:{props.monto}</p>
     <p>fecha:{props.fecha}</p>
     <p>tipo:{props.tipo}</p>
     <button>delete</button>
     <button>update</button>
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={3} className={classes.card}>
      <Box >
     <p>concepto:{props.concepto}</p>
     <p>monto:{props.monto}</p>
     <p>fecha:{props.fecha}</p>
     <p>tipo:{props.tipo}</p>
     <button>delete</button>
     <button>update</button>
      </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={3} className={classes.card}>
      <Box>
     <p>concepto:{props.concepto}</p>
     <p>monto:{props.monto}</p>
     <p>fecha:{props.fecha}</p>
     <p>tipo:{props.tipo}</p>
     <button>delete</button>
     <button>update</button>
    </Box>
    </Grid>
    <Grid item xs={12} md={6} lg={3} className={classes.card}>
      <Box>
     <p>concepto:{props.concepto}</p>
     <p>monto:{props.monto}</p>
     <p>fecha:{props.fecha}</p>
     <p>tipo:{props.tipo}</p>
     <button>delete</button>
     <button>update</button>
      </Box>
    </Grid>
  </Grid>
  );
};

export default withWidth()(MaterialCard);




/*
const AllOperations = () =>{

 const AllOp = useSelector((state) => state.Allop)
console.log(AllOp)
 const dispatch = useDispatch();
 useEffect(() =>{
 dispatch(GetAllOp())
 },[])


return(



<div>
<div className='Op_map'>
     {AllOp?.map((e) => (

             <MaterialCard 
             id = {e.id}
             key= {e.id}
             concepto={e.concepto}
            monto={e.monto}
            fecha = {e.fecha}
            tipo = {e.tipo}
             />
            
             ))}
  </div>

</div>

)
}


export default  AllOperations; */