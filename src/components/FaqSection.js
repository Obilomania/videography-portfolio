import React from "react";
import styled from "styled-components";

const FaqSection = () => {
    return (
        <Faq>
            <h2> Any Questions <span>FAQ</span></h2>
            <div className="faq-line"></div>
            <div className="question">
                <h4>How do i start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod nam quasi, minima atque vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod nam quasi, minima atque vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod nam quasi, minima atque vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Product do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod nam quasi, minima atque vitae.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
};

const Faq = styled.div`
    min-height: 90vh;
    display:block;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;

    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%
    }
    .question{
        padding: 3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding: 2rem 0rem;
    }
    p{
        padding: 1rem 0rem;
    }
`;

export default FaqSection;