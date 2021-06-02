import React from 'react'
import './taskone.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DataFetching from '../DataFetching';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
function Taskone() {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

      const classes = useStyles();

    return (
        <div className="container-fluid bg">
            <div className="row">
                <div className="col-sm-2"> 
                        <div className="menu p-4 mr-5">
                            <button>Approved</button>
                            <button>In Review </button>
                            <button>Rejected</button>
                        </div> 
                    </div>  
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group mt-3">
                                <input 
                                    type="text" 
                                    id="Search" 
                                    placeholder="Search" 
                                    className="form-control"                     
                                />
                            </div>
                           
                        </div>
                   
                    <div className="col-sm-8 ">
                    <div className="refreshbtn mt-3">
                                <a>Click Refresh Button to get latest status.</a>
                                <button><span><RefreshIcon className="iconui"/></span>Refresh</button>
                                <button><span><AddCircleOutlineIcon className="iconui"/></span>New templates </button>
                            </div>
                    </div>
                    </div>
                        
               
                    <div className="row ">
                        <div className="col-sm-12 mt-5">

                            <DataFetching/>
                            
                            <div className={classes.root}>
                              <Pagination count={10} variant="outlined" shape="rounded" className="paginationright" />
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>
             
        </div>
    )
}

export default Taskone
