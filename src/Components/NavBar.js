import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsPersonCircle } from "react-icons/bs"
import RestaurantsIcon from "../Assets/icon.png"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function NavBar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    return (
        <>
            <div className="flex flex-row duration-300 transition-all w-full justify-between items-center lg:hidden justify-evenly  py-2 -mt-8">
                <button
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <GiHamburgerMenu size={30} color="#00B27A" />
                </button>

                <div className=' w-2/3'>
                    <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' />
                </div>
                <BsPersonCircle size={30} color="#00B27A" />

                <nav>
                    <section className="MOBILE-MENU flex lg:hidden">


                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                            <div className='w-full flex flex-row items-center justify-evenly absolute top-0 mt-8'>
                                <BsPersonCircle size={30} color="#00B27A" />
                                <div className=' w-2/3'>
                                    <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' />
                                </div>
                                <div
                                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#00B27A"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                            <ul className="w-full h-full items-center mt-[25%] flex flex-col">
                                <List
                                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"

                                >
                                    <ListItemButton onClick={handleClick2} xs={{ fontWeight: "600" , color:"green" }}>

                                        <ListItemText primary="Il prodotto" className='font-bold' />
                                        {open2 ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open2} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>

                                                <ListItemText primary="Pacchetto L’Espresso" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>

                                                <ListItemText primary="Pacchetto A Tavola" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>

                                                <ListItemText primary="Pacchetto A Tavola" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                    <ListItemButton>
                                        <ListItemText primary="Prezzi" />
                                    </ListItemButton>
                                    <ListItemButton onClick={handleClick}>

                                        <ListItemText primary="Risorse" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Quiz" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Academy" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Case Study" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="FAQ" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Parla con noi :+39 377 5673745" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </List>
                            </ul>
                        </div>
                    </section>


                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
            <div className='flex flex-row justify-around items-center px-8 -mt-6 sm:hidden' >
                <div className='flex flex-row items-center gap-x-4 w-1/3 mr-8'>
                    <p className='pop500'>Il prodotto</p>
                    <p className='pop500'>Prezzi</p>
                    <p className='pop500'>Risorse</p>
                </div>
                <div className=' w-1/3'>
                    <img src={RestaurantsIcon} alt="logo" />
                </div>
                <div className='flex flex-row h-fit items-center gap-x-6'>
                    <div className='flex flex-col h-fit'>
                        <p className='pop700 text-md'>Ufficio vendite</p>
                        <p className='pop700 text-md flex flex-row items-center gap-x-2'> <FaPhoneAlt color="black" size={20} /> 377 5673745 </p>
                    </div>
                    <button className='w-[120px] h-10 border-[3px] border-black items-center flex justify-center '>
                        <p className='pop500'>Accedi</p>
                    </button>
                    <button className='w-[180px] h-10 border-[3px] bg-[#00B27A] border-black items-center flex justify-center '>
                        <p className='pop500 text-white'>Demo Gratuita</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar