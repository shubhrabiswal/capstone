import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../images/golden-retri.png';
import img2 from '../../images/golden2.jpg'
import golden from './golden'
import './PetZone.css'

const PetZone1 = () => {
    return (
        <div className="row mainBody">
             <div className="col-md-5 col-xs-3">
            <div className = "dogs">
            <div className = "dog1">
                <p> Heyyy there!!!!!! </p>
                <p> If you you are thinking of owning a dog as pet and are confused with what breed of 
                    dog you want, then you are at the right place. Browse through the below details and find 
                    out some interesting facts about your next best pet friend. </p>  

                <h6> Golden Retriever</h6>
                <Link to = '/golden' > 
                <img className = "img1" src = { img2 } alt=""/>
                </Link>
                <p className = "text1">
                    Group: Sporting Group<br/>
                    Height: 20–24 inches <br/>
                    Weight: 55–75 pounds (25–35 kg) <br/>
                    Life Expectancy: 12 – 15 years <br/>
                    Temperament: Friendly, Intelligent, Devoted <br/>
                    </p>
            </div>
            <div className = "dog2">
                <h6> Golden Retriever</h6>
                <Link to = '/golden' > 
                <img className = "img1" src = { img2 } alt=""/>
                </Link>
                <p className = "text1">
                    Group: Sporting Group<br/>
                    Height: 20–24 inches <br/>
                    Weight: 55–75 pounds (25–35 kg) <br/>
                    Life Expectancy: 12 – 15 years <br/>
                    Temperament: Friendly, Intelligent, Devoted <br/>
                    </p>
            </div>
        </div>
        </div> 
        </div>
    )
}

export default PetZone1
