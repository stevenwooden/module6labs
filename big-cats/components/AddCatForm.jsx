import { useState } from "react";

function AddCatForm({onAddCat}){
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const handleSubmit = (e) =>{
        e.preventdefault();

        if (name.length < 1|| latinName.length <1)   {
            setSubmitResult('Each field must be filled out.');
        } else {
            onAddCat({name,latinName});
            setSubmitResult('Added to fields correctly');
            setName('');
            setLatinName('');
        }
    }

    return (
        <div className="AddCatForm">
                <form onSubmit={handleSubmit}>
                <label>Name :</label><br/>
                <input type="name" value={name} name="name" onChange={(e) => setName(e.target.value)}/>

                <label>Latin Name :</label><br/>
                <input type="latinName" value={latinName} name="latinName" onChange={(e) => setLatinName(e.target.value)}/>
                    <button>Add Big Cat</button>
                </form>
                {submitResult && <p>{submitResult}</p>}
        </div>
    )
}
export default AddCatForm;