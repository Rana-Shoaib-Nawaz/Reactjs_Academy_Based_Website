import React, { useState } from 'react';
import './Gallery.css'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'https://www.tu-chemnitz.de/tu/aktuelles/2014/1392288802-5599-0.jpg',
        },
        {
            id: 2,
            imgSrc: 'https://www.optikamicroscopes.com/optikamicroscopes/wp-content/uploads/2017/02/B-380_01_BENEFITS.jpg',
        },
        {
            id: 3,
            imgSrc: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?cs=srgb&dl=pexels-pixabay-256455.jpg&fm=jpg',
        },
        {
            id: 4,
            imgSrc: 'https://www.shu.edu.pk/Postimg/7296_Python%20Workshop%20thumb.jpg',
        },
        {
            id: 5,
            imgSrc: 'https://simat.edu.pk/my_up/2020/03/3-2.jpg',
        },
        {
            id: 6,
            imgSrc: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F91aa4e7c-8484-11e9-9c90-e3a0a98b2f12.jpg?crop=2250%2C1266%2C0%2C117',
        },
        {
            id: 7,
            imgSrc: 'https://blog.savvas.com/wp-content/uploads/2021/03/Representing-Student-Identities-in-the-Classroom.png',
        },
        {
            id: 8,
            imgSrc: 'https://media.sciencephoto.com/f0/30/10/35/f0301035-800px-wm.jpg',
        },
        {
            id: 9,
            imgSrc: 'https://itu.edu.pk/wp-content/uploads/2021/04/banner.jpg',
        },

    ]
    const [model, setModel] = useState(false);
    const [tempingSrc, setTempingSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempingSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>

                <img src={tempingSrc} />
                <FaWindowClose onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} alt='' />
                        </div>
                    )
                })}

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li> <a href="/"><img src="https://media.istockphoto.com/photos/group-of-graduates-picture-id155033354?k=20&m=155033354&s=612x612&w=0&h=sU9DLURK4VgUL2dmjMgIXdaKwZoimXUecF5n4A-zGzA=" className="img-fluid" alt="..." /></a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <strong> <h2 className='color'>KIPS ACADEMY DERA GHAZI KHAN</h2></strong>
                        <ul className='list-unstyled'>
                            <li className='cont'>The learning rate of Dera Ghazi Khan is 80% and it is growing on regular basis, it displays the high tendency of education in the Dera Ghazi Khan Region. In recent years the growth rate of education in this region is showing the upward trend. In continuation to this, ‘Kips Academy Dera Ghazi Khan’ is working to be a shining example. We as an educational institute in Dera Ghazi khan are providing best education services for entire community located in that area. Honorable Chief Exective Kips Academy Prof.Abid Khan.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='offer'>
                    <h1>Programs Offered</h1>
                </div>
                <div className='row'>
                    <div className='col my-4'>
                        <h3 className='color'>Matric Programs</h3>
                        <ul className='list-styled'>
                            <strong><li>9th Pre-Med</li></strong>
                            <Link to='/MatricPreMed'><li className='color'>Read More</li><br /></Link>
                            <strong> <li>9th Pre-Eng</li></strong>
                            <Link to='/MatricPreEng'> <li className='color'>Read More</li><br /></Link>
                            <strong> <li>10th Pre-Med</li></strong>
                            <Link to='/MatricPreMed'> <li className='color'>Read More</li><br /></Link>
                            <strong> <li>10th Pre-Eng</li></strong>
                            <Link to='/MatricPreEng'><li className='color'>Read More</li></Link>
                        </ul>
                    </div>
                    <div className='right'>
                        <div className='col my-4'>

                            <h3 className='color'>Intermediate Programs</h3>
                            <ul className='list-styled'>
                                <strong> <li >F.SC Pre-Med</li></strong>
                                <Link to='/FscPreMed'><li className='color'>Read More</li><br /></Link>
                                <strong> <li>F.Sc Pre-Eng</li></strong>
                                <Link to='/FscPreEng'> <li className='color'>Read More</li><br /></Link>
                                <strong> <li>I.C.S</li></strong>
                                <Link to='/Ics'> <li className='color'>Read More</li><br /></Link>
                                <strong> <li>F.A</li></strong>
                                <Link to='/Fa'> <li className='color'>Read More</li><br /></Link>
                                <strong> <li>I.Com</li></strong>
                                <Link to='/Icom'> <li className='color'>Read More</li><br /></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )

}
export default Gallery