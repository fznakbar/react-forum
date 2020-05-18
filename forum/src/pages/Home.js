import React, { useEffect } from 'react';
import '../App.css';
import List from '../pages/List';
import { getUsers } from '../store/actions/userAction'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../components/footer'

function Home() {

    const dispatch = useDispatch()
    let list = useSelector(state => state.userReducer.users)
    
    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    if(!list.length){
        return(
            <div className="text-center" style={{marginTop : '20%', color : 'black'}}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <h1 style={{textAlign : 'center'}}>Loading, Please Wait</h1>
            </div>
        )
    } else {
        return(
            <>  
            <div style={{height : '100vh'}}>
                <hr style={{marginTop : '0'}}></hr>
                <h2 style={{marginTop : '0', textAlign : 'center'}}> List of Volunteer For Stopping Covid - 19</h2>
                <hr style={{marginBottom : '0'}}></hr>
                <div className="container overflow-auto" style={{maxHeight : "85vh"}}>
                    <List list={list}/>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Home