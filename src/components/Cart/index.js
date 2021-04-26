import React, { useState } from 'react';
import styled from "styled-components";

const CartWrapper = styled.div`
    .btn{position:fixed;
    right:10px;
    bottom:10px;
    width:50px;
    height:50px;
    z-index:999;
    border-radius:50%;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;
    ::after{
        content:'❤';
        color:red;
        font-size:20px;
    }}
    .cart{
        position:fixed;
        z-index:999;
        right:10px;
        bottom:70px;
        width:${props => (props.active ? '300px' : 0)};
        height:${props => (props.active ? '500px' : 0)};
        border-radius:5px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 20%);
        background-color:white;
        cursor:auto;
        transition: height 0.3s;
        overflow:hidden;
        padding:${props => (props.active ? '5px' : 0)};
    }
`;

function Cart() {
    const [active, setActive] = useState(false)
    return (
        <CartWrapper active={active}>
            <div className='btn' onClick={() => setActive(!active)}>
            </div>
            <div className='cart'>item</div>
        </CartWrapper>
    )
}

export default Cart;