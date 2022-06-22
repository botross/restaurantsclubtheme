import React from 'react'
import RestaurantsIcon2 from "../Assets/icon2.png"
import { FaPhoneAlt } from "react-icons/fa"
function Footer() {
    return (
        <div className='flex flex-col items-center py-8 bg-[#00B27A] -mt-8'>
            <div className='flex flex-row sm:flex-col items-center '>
                <div className='flex flex-col w-1/4 sm:w-full py-10 sm:py-5 sm:pl-5 pl-10 gap-y-10 sm:order-last'>
                    <div className='w-[80%]'>
                        <img src={RestaurantsIcon2} alt="logo" />
                    </div>
                    <p className='text-white text-xl sm:text-lg pop500'>Restaurants Club è una SaaS di AiGot S.r.l.
                        Sede Legale: Via Visconti di Modrone 38 - 20122 Milano
                        Sede Operativa: Via Oberdan 14 -
                        56127 Pisa</p>
                </div>
                <div className='flex flex-col w-1/4 sm:w-full py-10 pl-10 gap-y-5'>
                    <p className='text-white pop700 text-2xl'>Prodotto e Risorse</p>
                    <p className='text-white pop500 text-lg'>Il Prodotto</p>
                    <p className='text-white pop500 text-lg'>Prezzi</p>
                    <p className='text-white pop500 text-lg'>Academy</p>
                    <p className='text-white pop500 text-lg'>FAQ</p>
                    <p className='text-white pop500 text-lg'>Scopri quanto sei digitale</p>
                </div>
                <div className='flex flex-col w-1/4 sm:w-full py-10 pl-10 gap-y-5'>
                    <p className='text-white pop700 text-2xl'>Assistenza</p>
                    <p className='text-white pop500 text-lg'>Parla con l’assistenza</p>
                    <p className='text-white pop500 text-lg'>Richiedi una demo gratuita</p>
                    <p className='text-white pop500 text-lg'>Richiedi una consulenza gratuita</p>
                    <p className='text-white pop500 text-lg'>Privacy Policy</p>
                    <p className='text-white pop500 text-lg'>Terms and Conditions</p>
                </div>
                <div className='flex flex-col w-1/4 sm:w-full sm:-order-1 py-10 pl-10 gap-y-5'>
                    <div className='flex flex-col h-fit'>
                        <p className='pop700 text-3xl text-white'>Ufficio vendite</p>
                        <p className='pop700 text-3xl flex flex-row items-center gap-x-2 text-white'> <FaPhoneAlt color="white" size={20} /> 377 5673745 </p>
                    </div>
                    <p className='text-white pop500 text-lg'>Disponibile dal Lunedì al Venerdì</p>
                    <p className='text-white pop500 text-lg'>Dalle ore 10:00 alle ore 19:00</p>
                    <p className='text-white pop500 text-lg'>info@restaurants.club</p>
                </div>
            </div>
            <p className='text-white pop500 text-lg my-6 sm:my-3 sm:text-sm sm:p-4'>Codice fiscale, P. IVA: 11498080966 - Capitale Sociale: 110.000€ © 2022 AiGot SRL, tutti i diritti riservati</p>

        </div>
    )
}

export default Footer