"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';


const AppNavBar = (props) => {

    const [key, setKey] = useState("");
    const [cart, setCart] = useState(0)
    const [wish, setWish] = useState(0)

    useEffect(()=>{
        (async()=>{
            if(props.isLogin){
                let cartItems = (await(await fetch(`/api/cart/list`)).json())['data']
                setCart(cartItems.length)
            }

        })()
    },[])

    useEffect(()=>{
        (async()=>{
            if(props.isLogin){
                let wishItems = (await(await fetch(`/api/wish/list`)).json())['data']
                setWish(wishItems.length)
            }
        })()
    },[])

    return (
       <>
        <div className="container-fluid text-white p-2 bg-success">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-6">
                        <span>
                            <span className="f-12"><i className="bi bi-envelope"></i> Support@PlanB.com </span>
                            <span className="f-12 mx-2"><i className="bi bi-envelope"></i> 01774688159 </span>
                        </span>
                    </div>
                    <div className="col-md-6">
                        <span className="float-end">
                            <span className="bodySmal mx-2"><i className="bi bi-whatsapp"></i></span>
                            <span className="bodySmal mx-2"><i className="bi bi-youtube"></i></span>
                            <span className="bodySmal"><i className="bi bi-facebook"></i></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <Navbar collapseOnSelect expand="lg" className="bg-white sticky-top shadow-sm py-3">
            <Container>
                <NavbarBrand>
                    <img className="img-fluid" src="/images/plainb-logo.svg" alt="" width="96px" />
                </NavbarBrand>

                <NavbarToggle aria-controls="responsive-navbar-nav"/>

                <NavbarCollapse  id="responsive-navbar-nav">
                <Nav className="me-auto">
    
                    <Link className="btn ms-2 btn-light position-relative" href="/"> 
                        <i className="bi bi-house"></i> Home 
                    </Link>
                    <Link href={`${props.isLogin ? ("/user/cart"):("/user/login")}`} type="button" className="btn ms-2 btn-light position-relative">
                        <i className="bi text-dark bi-bag"></i> Cart 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{cart}</span>
                    </Link>
                    <Link href={`${props.isLogin ? ("/user/wish"):("/user/login")}`} type="button" className="btn ms-4 btn-light position-relative">
                        <i className="bi text-dark bi-heart"></i> Wish <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{wish}</span>
                    </Link>
                    <Link href={`${props.isLogin ? ("/user/order/list"):("/user/login")}`} type="button" className="btn ms-4 btn-light position-relative">
                        <i className="bi text-dark bi-truck"></i> Order 
                    </Link>         
                </Nav>
                <Nav>
                    <div className="input-group">
                        <input  onChange={(e)=>setKey(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <Link style={{pointerEvents:key.length===0?("none"):("")}}  href={`/product/by-search?keyword=${key}`} className={key.length===0?("btn btn-dark"):("btn btn-outline-dark")} type="submit">
                        <i className="bi bi-search"></i>
                        </Link>
                    </div>
                    <Link href="/cart" type="button" className="btn ms-2 btn-light position-relative">
                        <i className="bi text-dark bi-bag"></i>
                    </Link>
                    <Link href="/wish" type="button" className="btn ms-2 btn-light d-flex">
                        <i className="bi text-dark bi-heart"></i>
                    </Link>

                    {props.isLogin ?
                    ( <>
                        <Link type="button" className="btn ms-3 btn-success d-flex" href="/user/profile"><i className="bi bi-person"></i> </Link> 
                        <Link type="button" className="btn ms-3 btn-success d-flex" href="/api/user/logout">Logout</Link> 
                        </>
                    )
                    :( <Link type="button" className="btn ms-3 btn-success d-flex" href="/user/login">LogIn</Link>)
                    }
                    
                    
                </Nav>
                </NavbarCollapse>
                
            </Container>
        </Navbar>
       </>
    );
};

export default AppNavBar;



/* 


<Navbar.Toggle  />

<Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
    
        <Link className="btn ms-2 btn-light position-relative" href="/"> 
        <i className="bi bi-house"></i> Home </Link>
        <Link href="/cart" type="button" className="btn ms-2 btn-light position-relative">
        <i className="bi text-dark bi-bag"></i> Cart <span className="position-absolute top-0 start-100
        translate-middle badge rounded-pill bg-success">0</span>
        </Link>
        <Link href="/wish" type="button" className="btn ms-4 btn-light position-relative">
        <i className="bi text-dark bi-heart"></i> Wish <span className="position-absolute top-0 start-100
        translate-middle badge rounded-pill bg-warning">0</span>
        </Link>
        <Link href="/orders" type="button" className="btn ms-4 btn-light position-relative">
        <i className="bi text-dark bi-truck"></i> Order </Link>         
    </Nav>
    <Nav>
        <div className="input-group">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
        width: height:
        Footer
        </div>
        <Link href="/cart" type="button" className="btn ms-2 btn-light position-relative">
        <i className="bi text-dark bi-bag"></i>
        </Link>
        <Link href="/wish" type="button" className="btn ms-2 btn-light d-flex">
        <i className="bi text-dark bi-heart"></i>
        </Link>
        <Link type="button" className="btn ms-3 btn-success d-flex" href="/profile">Profile</Link>
        <Link type="button" className="btn ms-3 btn-success d-flex" href="/profile">Logout</Link>
    </Nav>
</Navbar.Collapse> */