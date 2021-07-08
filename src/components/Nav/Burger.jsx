import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 4rem;
  height: 3rem;
  position: fixed;
  top: 10px;
  right: 40px;
  z-index: 20;
  display: none;

  @media only screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 3rem;
    height: 0.4rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media only screen and (max-width: 767px) {
    width: 3rem;
    height: 2.5rem;
    top: 10px;
    right: 20px;

    div {
      width: 2.5rem;
      height: 0.4rem;
    }
  }

`;

export default function Burger() {
    const [open, setOpen] = useState(false);

    const linkClicked = () => {
        setOpen(false);
    }

    return (
        <>
        <StyledBurger open={open} onClick={() =>setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav handleClick={linkClicked} open={open}/>
        </>
    )
}
