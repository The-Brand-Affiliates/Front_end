import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profilenew.css"
import img from '../../img/image.png'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar-edit';

function Pdetail(){

    const[dialogs, setDialogs] = useState(false);
    const [Crop, setCrop] = useState(false);

    const onCrop = (view) =>{
        setCrop(view)
    }
    const onClose = (view) =>{
        setCrop(view)
    }

    return (
        <>
            <div className="details rounded-2 p-5">
                <div className="row imgalign">
                    <div className="col">
                        <div className="m-2">
                            <a href="#" className=" " >
                                <img src={img} 
                                alt="profile"
                                onClose={onClose}
                                onCrop= {onCrop} 
                                className='img logo'
                                onClick={() => setDialogs(true)}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col rightcol">
                        <div className="col">
                            <p className="tittle">Brand Name</p>
                            <input type="text" className="form-control" placeholder="Brand Name"/>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        <p className="tittle">Contact Name</p>
                        <input type="text" className="form-control" placeholder="Contact Name"/>
                    </div>
                    <div className="col rightcol">
                        <p className="tittle">Phone Number</p>
                        <input type="mobile" className="form-control" placeholder="Mobile Number"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="tittle">Email</p>
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="col rightcol">
                        <p className="tittle">Standard Discount(%)</p>
                        <input type="text" className="form-control" placeholder="Discount"/>
                    </div>   
                </div>

                <div className="row">
                </div>

                <div className="save">
                    <button className="btn-2 rounded-2"> Save</button>  
                </div>

            </div>
        </>
        
    )
}

export default Pdetail;
