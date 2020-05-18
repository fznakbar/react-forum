import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addFavorite } from '../store/actions/userAction'
import { hideUser } from '../store/actions/userAction'

function List(props){
    const dispatch = useDispatch()

    const addFavorites = value => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Success add ${value.name.first} to your favorites`,
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(addFavorite({
            type: 'ADD_FAVORITES',
            payload : {
                name : value.name.first,
                image : value.picture.large,
                gender : value.gender,
                phone : value.phone,
                country : value.location.country
            }
        }))
    }

    return (
        <>
            {props.list.map((value, index) => {
            return (
                <div className="card m-1 d-flex" key={index} style={{height : '30%', width : '30%', backgroundColor : '#787878', color : 'white'}}>
                    <img src={value.picture.large} className="card-img-top ml-3 mt-2" alt="" style={{borderRadius : '50%', width : '50%'}}/>
                    <p className="card-title pr-2" style={{marginTop : '5px'}}>Name  : {value.name.first} {value.name.last}</p>
                    <p className="card-text pr-2">Address : {value.location.city}, {value.location.state}, {value.location.country}</p>
                    <div>
                        {/* <button className="btn btn-info p1 mr-1 mb-2" onClick={() => props.hidePeople(value.name.first)}>Hide</button> */}
                        <button className="btn btn-info p1 mr-1 mb-2" onClick={() => dispatch(hideUser(value.name.first))}>Hide</button>
                        <Link className="btn btn-warning p1 mr-1 mb-2" to={{pathname : `/detail/${value.name.first}`, state : {data : value}}}>Detail</Link>
                        <button className="btn btn-success p1 mr-2 mb-2" onClick={() => addFavorites(value)}>Add To Favorites</button>
                    </div>
                </div>
            )
            })}
        </>
    )
}

export default List