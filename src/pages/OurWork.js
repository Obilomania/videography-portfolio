import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";


const OurWork = () => {
    return (
        <Work>
           <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <img src={athlete} alt="athlete" />
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <img src={theracer} alt="The Racer" />
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <img src={goodtimes} alt="Goodtimes" />
            </Movie>
        </Work>
    )
}

const Work = styled.div`
min-height: 100vh;
overflow: hidden;
padding:5rem 10rem;
h2{
    padding:1 rem 0rem;
    font-weight:400;
}
`;
const Movie = styled.div`
padding-bottom:10rem;
.line{
    height:0.5rem;
    background: #cccccc;
    margin-bottom:3rem;
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}
`;


export default OurWork;