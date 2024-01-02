import {useNavigate} from 'react-router-dom'
export function PizzaCreatePage()
{
    const navigate = useNavigate();
    return (
        <div className='p5 content bg-whitesmoke text-center'>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch(`https://pizza.kando-dev.eu/Pizza`, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        name: e.target.elements.name.value,
                        isGlutenFree: e.target.elements.brand.value,
                        kepURL: e.target.elements.price.value,
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
                    <label className='col-sm-3 col-form-label'> Gluténmentes?: </label>
                        <div>
                            <input type ="radio" name="isGlutenFree" className='form-control'>Igen</input>
                            &nbsp;
                            <input type ="radio" name="isGlutenFree" className='form-control'>Nem</input>
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label className='col-sm-3 col-form-label'> KépUrl: </label>
                        <div>
                            <input type='text' name='kepURL' className='form-control'></input>
                        </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
} 