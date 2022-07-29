import React, { useState } from 'react'
import './ApplyNow.css';

export default function ApplyNow() {
    const [names, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [numeric, setNumeric] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [button, setButton] = useState('');
    return (
        <div>
            <form className='container'>
                <div className='kips my-5'>
                    <h1><strong>Kips Academy Inquiry Form</strong></h1>
                </div>
                <div className='row'>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li>
                                <div className="form-group">
                                    <label htmlFor="names"><strong>Name</strong>
                                        <br /><input href='https://docs.google.com/forms/d/e/1FAIpQLSdVGhhYAP25WhrJwRREPcfcZaYh8q3iOB1Fkesprg54rwFvug/viewform?usp=sf_link' type="text" id='names' name='names' value={names} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                                    </label>
                                </div>
                            </li>

                            <li>
                                <div className="form-group">
                                    <label htmlFor="Email"><strong>Email</strong>
                                        <br /><input type="text" id='Email' name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                                    </label>
                                </div>
                            </li>

                            <li>
                                <div className="form-group">
                                    <label htmlFor="numeric"><strong>Phone</strong>
                                        <br /><input type="numeric" id='numeric' name='numeric' value={numeric} onChange={(e) => setNumeric(e.target.value)} placeholder='Personal Mobile' />
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li>
                                <div className="form-group">
                                    <label htmlFor="date"><strong>Date Of Birth</strong>
                                        <br /><input type="date" id='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='DD-MM-YYYY' />
                                    </label>
                                </div>
                            </li>

                            <li>
                                <div className="form-group"><strong>Gender</strong>

                                    <select class="form-select" aria-label="Default select example" id='gender' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                        <option selected>Select the gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Intersex</option>
                                    </select>

                                </div>
                            </li>

                            <li>
                                <div className="form-group"><strong>Course</strong>
                                    <select class="form-select" aria-label="Default select example" id='course' name='course' value={course} onChange={(e) => setCourse(e.target.value)}>
                                        <option selected>Select The Course</option>
                                        <option value="1">9th Pre-Med</option>
                                        <option value="2">9th Pre-Eng</option>
                                        <option value="3">10th Pre-Med</option>
                                        <option value="4">10th Pre-Eng</option>
                                        <option value="5">F.SC Pre-Med</option>
                                        <option value="6">F.SC Pre-Eng</option>
                                        <option value="7">I.C.S</option>
                                        <option value="8">F.A</option>
                                        <option value="8">I.Com</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type='submit' id='button' name='button' value={button} onChange={(e) => setButton(e.target.value)}>Submit</button>
            </form>
        </div>

    )
}
