import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Components/taskone.css'
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';


function DataFetching() {
    const [posts, setPost] = useState([])
    const [id, setId] = useState(1)
    // const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    // const handleClick = () => {
    //     setIdFromButtonClick(id)
    // }


    useEffect(() => {
        axios
           .get(`https://jsonplaceholder.typicode.com/users`)
           .then(res => {
               console.log(res)
               setPost(res.data)
           })
           .catch(err => {
               console.log(err)

           })
    }, [])
    return (
        <div className="divbg" style={{marginLeft:"30px"}}>
            {/* <input type="text" value={id} onChange={e => setId(e.target.value)}/> */}
            {/* <button type="bitton" onClick={handleClick} >Fetch Post</button> */}
            {/* <div>{posts.title}</div> */}
            <thead>
                <tr>
                <th scope="col" style={{width: "10%"}}>ID <UnfoldMoreIcon/></th>
                <th scope="col" style={{width: "40%"}}>Preview</th>
                <th scope="col" style={{width: "15%"}}>Type</th>
                <th scope="col" style={{width: "15%"}}>Language</th>
                <th scope="col" style={{width: "20%"}}>Status</th>
                <th scope="col" style={{width: "10%"}}></th>
                </tr>
            </thead>
                {posts.map(post => (
                        <table className="table table-borderless">
                            <tbody className="tabledetails">
                                <tr>
                                <div style={{padding: "15px 8px"}}>
                                <th scope="row" style={{width: "10%"}}>{post.id}</th>
                                <td style={{width: "40%"}}>{post.username}</td>
                                <td style={{width: "15%"}}>{post.email}</td>
                                <td style={{width: "15%"}}>{post.name}</td>
                                <td style={{width: "20%"}}><ToggleOnIcon className="toggleicon"/></td>
                                <td style={{width: "10%"}}><CreateOutlinedIcon className="writeicon"/></td>
                                </div>
                                </tr>
                                
                            </tbody>
                        </table>
                        
                        
                    ))
                }


            <div>
                </div>
            
        </div>
    )
}

export default DataFetching
