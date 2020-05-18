import React from 'react';
import {useSelector} from 'react-redux';
import Footer from '../components/footer'


function Favorites(){
    const favorites = useSelector( state => state.userReducer.favorites)
    if(favorites.length){
        return(
        <>
        <div style={{height : '100vh'}}>
            <h1 style={{textAlign : 'center'}}>Your Favorites List</h1>
            <div className="container overflow-auto" style={{maxHeight : "80vh"}}>
                {favorites.map((value, index)=>{
                    return (
                        <div className="detail" key={index}>
                            <div className="card mt-5 mr-2" style={{width: "18rem", margin : 'auto', opacity : '90%', backgroundColor : "#fffefc"}}>
                                <div className="card-body">
                                    <img src={value.image} className="card-img-top ml-3 mt-2 mb-3" alt="" style={{borderRadius : '50%', width : '50%', textAlign : 'center'}}/>
                                    <hr></hr>
                                    <h4 className="card-title">Name : {value.name}</h4>
                                    <h5 className="card-title">Gender : {value.gender}</h5>
                                    {/* <h5 className="card-title">Age : {value.dob.age} Years</h5> */}
                                    <h5 className="card-title">Country : {value.country}</h5>
                                    <h5 className="card-title">Phone : {value.phone}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
        </>
    )} else {
        return(
            <>
            <div style={{height : '100vh'}}>
            <div className="container">
                {/* <h1 style={{textAlign : 'center', marginTop : '3%', color : 'black', opacity : '80%'}}>You Have No Favorite Volunteer</h1><br></br> */}
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div>
            <h1 style={{textAlign : 'center', marginTop : '3%', color : 'black', opacity : '80%'}}>You Have No Favorite Volunteer</h1><br></br>
            <h3 style={{textAlign : 'center', color : 'black', opacity : '80%'}}>Please Select From Home Page</h3><br></br>         
            </div>
            <Footer />
            </>
        )
    }
}

export default Favorites