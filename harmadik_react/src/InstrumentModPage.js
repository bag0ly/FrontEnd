import React, {useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

export function InstrumentModPage(props) {

    const param = useParams();
    const id = param.hangszerId;

    const navigate = useNavigate();
    const [instrument, setInstrument] = useState([]);
    const [Modname, setModname] = useState('');
    const [Modbrand, setModbrand] = useState('');
    const [Modprice, setModprice] = useState('');
    const [Modquantity, setModquantity] = useState('');
    const [Modimageurl, setModimageurl] = useState('');

    useEffect(() => {
        (async() => {
            try{
            const res = await fetch(`https://kodbazis.hu/api/instruments/${id}`, {credentials: 'include'});
            const hangszer = await res.json();
            setInstrument(hangszer);
            setModname(hangszer.name);
            setModbrand(hangszer.brand);
            setModprice(hangszer.price);
            setModquantity(hangszer.quantity);
            setModimageurl(hangszer.imageURL);
        } 
        catch(error){
            console.log(error);
        }
        })();
    },[id, Modbrand, Modname, Modprice, Modquantity, Modimageurl]);

    const modname = event =>{
        setModname(event.target.value);
    }
    const modbrand = event =>{
        setModname(event.target.value);
    }
    const modprice = event =>{
        setModname(event.target.value);
    }
    const modquantity = event =>{
        setModname(event.target.value);
    }
    const modimageurl = event =>{
        setModname(event.target.value);
    }
    return(
        <div className='p5 content bg-whitesmoke text-center'>
            <h2>Hangszer módosítás</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch(`https://kodbazis.hu/api/instruments${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name: e.target.elements.name.value,
                    brand: e.target.elements.brand.value,
                    price: e.target.elements.price.value,
                    quantity: e.target.elements.quantity.value,
                    imageURL: e.target.elements.imageURL.value,
                }),
        })
        .then(() => {
            navigate(`/`);
        })
        .catch(console.log)
        }}>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type='text' name='name' className='form-control' defaultValue={instrument.name} onChange={modname}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Brand: </label>
                    <div>
                        <input type='text' name='brand' className='form-control' defaultValue={instrument.brand} onChange={modbrand}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Ár: </label>
                    <div>
                        <input type='number' name='price' className='form-control' defaultValue={instrument.price} onChange={modprice}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> Darab: </label>
                    <div>
                        <input type='number' name='quantity' className='form-control' defaultValue={instrument.quantity} onChange={modquantity}/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label className='col-sm-3 col-form-label'> KépUrl: </label>
                    <div>
                        <input type='text' name='imageURL' className='form-control' defaultValue={instrument.imageURL} onChange={modimageurl}/>
                    </div>
            </div>
            <button type='submit' className='btn btn-success'>
                Kuldes
            </button>
        </form>
    </div>
    )
    
}