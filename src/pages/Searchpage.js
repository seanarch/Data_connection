import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'reactstrap';
import { Container, Grid, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import TextField from '../components/TextField/TextField';
import DatePicker from '../components/DatePicker';
import { TextareaAutosize } from '@mui/base';
import { useState, useEffect } from 'react';
import axios from "axios"; 


function Searchpage() {

  const INITIAL_VALUES = {
    data: {
        id: 0,
    },


}

  return (
  

<div>
        <Container maxWidth="md">
            <div className='container' style={{
            display: 'flex', justifyContent:
                'center', alignItems: 'center', marginTop: '50px'
            }}>
            <Formik initialValues={{ ...INITIAL_VALUES }} onSubmit={values => {
                console.log(values)
                 
            }}>
    {props => (
        <Form>
            
            <Grid container spacing={3} width={'70vw'}>
            <h3>Data in this page</h3>
             
 
            <Grid item xs={12}>
                        <TextField
                            name="data.id"
                            label="id"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button color='primary' type="submit">Save</Button>
                    </Grid>
                </Grid>
            
        </Form>
    )}
</Formik>
</div>
</Container>

 

    </div>
  )
}

     

export default Searchpage