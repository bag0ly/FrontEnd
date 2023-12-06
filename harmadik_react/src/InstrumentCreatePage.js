import {useNavigate} from 'react-router-dom'
export function InstrumentCreatePage()
{
    const navigate = useNavigate();
    return (
        <div className='p5 content bg-whitesmoke text-center'>
            <form
            onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                fetch(`https://kodbazis.hu/api/instruments`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        name: event.target.elements.name.value,
                        price: event.target.elements.price.value,
                        quantity: event.target.elements.quantity.value,
                        imageURL: event.target.elements.imageURL.value,
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
                            <input type='text' name='name' className='form-control'></input>
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> Ár: </label>
                        <div>
                            <input type='number' name='price' className='form-control'></input>
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> Darab: </label>
                        <div>
                            <input type='number' name='quantity' className='form-control'></input>
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> KépUrl: </label>
                        <div>
                            <input type='text' name='imageURL' className='form-control'></input>
                        </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
} 