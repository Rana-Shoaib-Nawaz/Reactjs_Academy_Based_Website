import React from 'react'

export default function Ics() {
    return (
        <div className="container">
            <h1 className='life'><strong>I.C.S</strong></h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li> <a href="/"><img src="https://thumbs.dreamstime.com/b/artificial-intelligence-ai-research-robot-cyborg-development-future-people-living-digital-data-mining-machine-learning-171270756.jpg" className="img-fluid" alt="..." /></a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <h2> <li className='cont'>Students are taught the basic education of Computer Science and Software Development in ICS. This degree provides strong ground for graduating in CS and IT. It trains our students in essential knowledge and expertise in Computers which is a pre-requisite </li></h2>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <h1 className='color my-4'>Compulsory Subjects</h1>
                    <ul className='list-styled'>
                        <strong><li>Urdu</li></strong><br />
                        <strong> <li>English</li></strong><br />
                        <strong> <li>Islamic Studies(Part-I)</li></strong><br />
                        <strong> <li>Pakistan Studies(Part-II)</li></strong><br />

                    </ul>
                </div>
                <div className='right'>
                    <div className='col'>

                        <h1 className='color my-4'>Elective Subjects</h1>
                        <ul className='list-styled'>
                            <p>Students can option any one of the following combinations.</p>
                            <strong><li>Physics-Mathematics-ComputerScience</li></strong><br />
                            <strong> <li>Statistics-Mathematics-ComputerScience</li></strong><br />
                            <strong> <li>Statistics-Economics-ComputerScience</li></strong><br />

                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}
