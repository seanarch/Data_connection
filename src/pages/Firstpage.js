import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'reactstrap';
import { Container, Grid, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import TextField from '../components/TextField/TextField';
import DatePicker from '../components/DatePicker';
import { TextareaAutosize } from '@mui/base';
import { useState, useEffect } from 'react';
import axios from "axios"; 

 

function Firstpage() {
    // enteredID can be the params that passed from the previous page
    const enteredID = 2;
    const [APIData, setAPIData] = useState([]);
     

    useEffect(() => {
      axios.get(`http://localhost:3010/patients`, { params:{id:enteredID}})
        .then((response) => {
            setAPIData(response.data)
        })
    }, [])

    // const selectedData = APIData.filter((enteredID) => {

    // })

    const INITIAL_VALUES = {
        info: {
            id: 1,
            date: "2000-10-10", 
            comments: "Test comments",
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
                console.log(APIData) 
            }}>
    {props => (
        <Form>
            
            <Grid container spacing={3} width={'70vw'}>
            <h3>Date</h3>
            <Grid item xs={12}>
                    <DatePicker
                            fullWidth
                            name="info.date"
                            label="Date"
                        />
                    </Grid>

                     

            <h3>Comments</h3>
            <Grid item xs={12}>
                        <TextField
                            name="info.comments"
                            label="Comments"
                        />
                    </Grid>
            
            <h3>ID </h3>
            <Grid item xs={12}>
                        <TextField
                            name="info.id"
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

export default Firstpage;