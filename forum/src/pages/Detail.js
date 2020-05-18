import React from 'react';
import {
    useParams,
    useLocation
} from 'react-router-dom'
import Footer from '../components/footer'


function Detail(){
    const location = useLocation()
    let { name } = useParams()
    let { data } = location.state

    return(
        <>
        <div className="detail" style={{height : '100vh'}}>
            <h2 className="mt-3">Details for {name}</h2>
            <div className="card mt-5" style={{width: "18rem", margin : 'auto', opacity : '90%', backgroundColor : "#787878"}}>
                <div className="card-body">
                    <img src={data.picture.large} className="card-img-top ml-3 mt-2 mb-3" alt="" style={{borderRadius : '50%', width : '50%', textAlign : 'center'}}/>
                    <hr></hr>
                    <p className="card-title" style={{color : 'white'}}>{data.name.title}. {data.name.first} {data.name.last}</p>
                    <p className="card-title">Gender : {data.gender}</p>
                    <p className="card-title">Age : {data.dob.age} Years</p>
                    <p className="card-title">Email : {data.email}</p>
                    <p className="card-title">Phone : {data.phone}</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Detail