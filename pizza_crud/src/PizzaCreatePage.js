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
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: e.target.elements.name.value,
                        isGlutenFree: e.target.elements.isGlutenFree.value,
                        kepURL: e.target.elements.kepURL.value,
                    }),
            })
            .then(() => {
                navigate(`/`);
            })
            .catch(console.log)
            }}>
                <br/>
                <br/>
                <br/>
                <br/>   
                <div className='form-group row pb-3 w-50 text-center content bg-ivory'>
                    <label className='col-sm-3 col-form-label text-center content'> Név: </label>
                    <div className='col-sm-9'>
                        <input type='text' name='name' className='form-control mx-auto'></input>
                    </div>
                </div>

                <div className='form-group row pb-3 w-50 text-center content bg-ivory'>
                    <label className='col-sm-3 col-form-label text-center content'> KépUrl: </label>
                        <div className='col-sm-9'>
                            <input type='text' name='kepURL' className='form-control  mx-auto'></input>
                        </div>
                </div>
                <div>
                <label className='col-sm-3 col-form-label '> Gluténmentes?: </label>
                    <div className='inputs-center'>
                    <label>
                        <input type="radio" name="isGlutenFree" value="1" className='form-control' />
                        Igen
                    </label>
                    &nbsp;
                    <label>
                        <input type="radio" name="isGlutenFree" value="0" className='form-control' />
                        Nem
                    </label>
                    </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Kuldes
                </button>
            </form>
        </div>
    );
} 