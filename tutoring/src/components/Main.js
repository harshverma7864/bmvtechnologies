import React, { useContext, useState } from 'react'

const Main = () => {




    const [note, setNote] = useState({ se1: "", se2: "", se3: "" })

    const handleBook = async (e) => {
        e.preventDefault();
        const host = "http://localhost:5000";
        var url1 = note.se1;
        var url2 = note.se2;
        var url3 = note.se3;
        console.log(url1, url2, url3);
        const response = await fetch(`${host}/api`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url1, url2, url3 }),
        });
        const result = await response.json();
        console.log(result);
    }
    //to get value in input tags
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }



    return (
        <>
            <div className="container my-4 py-4">
                <h5>select your 3 preferred slots </h5>
                <div className="container">


                    <select onChange={onChange} name='se1' value={note.se1} class="form-select" aria-label="Default select example" placeholder='Select timing'>
                        <option value="9-10">9am to 10am</option>
                        <option value="10-11">10am to 11am</option>
                        <option value="11-12">11am to 12am</option>
                        <option value="12-13">12am to 1pm</option>
                        <option value="13-14">1pm to 2pm</option>
                        <option value="14-15">2pm to 3pm</option>
                        <option value="15-16">3pm to 4pm</option>
                        <option value="16-17">4pm to 5pm</option>

                    </select>


                    <hr />

                    <select onChange={onChange} value={note.se2} name='se2' class="form-select" aria-label="Default select example" placeholder='Select timing'>
                        <option value="10-11">10am to 11am</option>
                        <option value="11-12">11am to 12am</option>
                        <option value="12-13">12am to 1pm</option>
                        <option value="13-14">1pm to 2pm</option>
                        <option value="14-15">2pm to 3pm</option>
                        <option value="15-16">3pm to 4pm</option>
                        <option value="16-17">4pm to 5pm</option>

                    </select>

                    <hr />
                    <select onChange={onChange} value={note.se3} name='se3' class="form-select" aria-label="Default select example" placeholder='Select timing'>
                        <option value="9-10">9am to 10am</option>
                        <option value="10-11">10am to 11am</option>
                        <option value="11-12">11am to 12am</option>
                        <option value="12-13">12am to 1pm</option>
                        <option value="13-14">1pm to 2pm</option>
                        <option value="14-15">2pm to 3pm</option>
                        <option value="15-16">3pm to 4pm</option>
                        <option value="16-17">4pm to 5pm</option>

                    </select>


                    <button className="btn btn-primary my-4" onClick={handleBook}>Book Slot</button>
                </div>
            </div>
        </>
    )
}

export default Main