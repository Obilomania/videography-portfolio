import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1> <a href="http://www.facebook.com.com" id="logo">WestClip</a></h1>
            <ul>
                <li><a href="http://www.facebook.com.com">About Us</a></li>
                <li><a href="http://www.facebook.com.com">Our Work</a></li>
                <li><a href="http://www.facebook.com.com">Contact Us</a></li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items:center;
padding: 1rem 10rem;
background: #282828;
a{
    color: white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style:none;
}
#logo{
    font-size:1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
    letter-spacing:2px;
    color:#23d997;
}
li{
    padding-left:10rem;
    position:relative;
}

`;

export default Nav;