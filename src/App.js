
import './App.css';
import React from 'react';
import RestaurantsIcon from "./Assets/icon.png"
import RestaurantsIcon2 from "./Assets/icon2.png"
import HerImage from "./Assets/hero.png"
import MotorCycleImage from "./Assets/MotorCycle.png"
import AcademyImagae from "./Assets/Acadmy.png"
import ChefImage from "./Assets/Chef.png"
import { FaPhoneAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsPersonCircle } from "react-icons/bs"
function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className=" w-full flex flex-col gap-y-8">
      <div className='h-[50px] w-full bg-[#114653] items-center justify-center flex ' >
        <p className='text-white lg:text-xl sm:text-[10px] lg:tracking-wide pop500'>fino a 500€ al mese di credito pubblicitario in omaggio nell’abbonamento</p>
      </div>

      <nav className=" flex flex-col duration-300 transition-all relative items-center lg:hidden justify-evenly  py-2 -mt-8">

        <div className="w-full relative flex items-center justify-between px-4 ">

          <button

            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu size={30} color="#00B27A" />
          </button>
          <div className=' w-1/2'>
            <img src={RestaurantsIcon} alt="logo" className='w-full h-full ' />
          </div>
          <BsPersonCircle size={30} color="#00B27A" />
        </div>
        <div
          className={
            "flex-grow flex-col mt-4 items-center  duration-300 transition-all" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col gap-y-3">
            <p className='pop500 '>Il prodotto</p>
            <p className='pop500'>Prezzi</p>
            <p className='pop500'>Risorse</p>
          </ul>
        </div>

      </nav>

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


      <div className='flex flex-row sm:flex-col sm:mb-10'>
        <div className='w-1/2 sm:w-full text-left flex flex-col sm:items-center sm:p-5 p-20 gap-y-6'>
          <p className='meso text-5xl text-[#00B27A]'>Raggiungi i tuoi clienti.<br /> Attraine di nuovi. </p>
          <p className='pop700 text-2xl text-black'>L'unica piattaforma di marketing studiata per<br /> la ristorazione </p>
          <p className='pop500 text-xl text-black'>Aumenta la tua visibilità su Google e Social Media con Restaurants Club. Un Click, 5 minuti e sei online. </p>
          <button className='w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
            <p className='pop500 text-black'>Richiedi la demo gratuita</p>
          </button>
          <p className='pop500 text-md underline text-black sm:text-sm'>Oppure ricevi un consiglio da un nostro esperto</p>
        </div>
        <div className='w-1/2 sm:w-full  flex items-center justify-center'>
          <img src={HerImage} alt="hero" className='h-[650px] sm:h-[250px]' />
        </div>
      </div>


      <div className="h-screen sm:h-fit sm:gap-y-7 sm:py-8 flex flex-col items-center justify-evenly bg-[#F6F6F4] ">
        <p className='text-[#FC6371] meso text-6xl sm:text-3xl'>I vantaggi</p>
        <p className='text-black pop500 text-xl sm:text-md sm:pop700 sm:text-center'>Fai crescere la tua attività grazie agli Strumenti di <br /> Marketing della piattaforma Restaurants Club.</p>
        <div className='flex flex-row sm:flex-col items-center w-full px-20'>
          <div className='flex flex-col w-1/3 sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2'>
            <img src={HerImage} alt="hero" className='h-[350px] sm:h-[200px] w-[90%] object-contain' />
            <p className='meso text-4xl text-[#114653]'>Attrai</p>
            <p className='pop500 text-xl text-center text-[#114653]'>Cattura l’attenzione su internet e fai<br /> conoscere la tua attività</p>
          </div>
          <div className='flex flex-col w-1/3 sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2'>
            <img src={HerImage} alt="hero" className='h-[350px] sm:h-[200px]  w-[90%] object-contain' />
            <p className='meso text-4xl text-[#114653]'>Converti</p>
            <p className='pop500 text-xl text-center text-[#114653]'>Porta nuovi clienti al tuo ristorante <br /> e aumenta il tuo fatturato</p>
          </div>
          <div className='flex flex-col w-1/3 sm:w-[95%] items-center justify-center gap-y-6 sm:gap-y-2'>
            <img src={HerImage} alt="hero" className='h-[350px] sm:h-[200px]  w-[90%] object-contain' />
            <p className='meso text-4xl text-[#114653]'>Fidelizza</p>
            <p className='pop500 text-xl text-center text-[#114653]'>Crea una base clienti fedele e<br /> affezionata con cui crescere</p>
          </div>
        </div>
        <button className='w-[25%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
          <p className='pop500 text-black'>Richiedi la demo gratuita</p>
        </button>
        <p className='pop500 text-md underline text-black sm:text-sm'>Oppure ricevi un consiglio da un nostro esperto</p>
      </div>


      <div className='flex flex-row  sm:flex-col-reverse'>
        <div className='w-1/2 sm:w-full text-left flex flex-col sm:p-5 p-20 gap-y-6'>
          <p className='meso text-6xl sm:text-3xl text-[#00B27A]'>Pacchetto “L’Espresso”</p>
          <p className='pop700 text-3xl sm:text-xl text-black'>Coinvolgi gli utenti nel Delivery</p>
          <div className='flex flex-row gap-x-4 items-start w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Ricevi più ordini a domicilio</span> direttamente dal TUO sito e dalla tua app: mai più commissioni! Con il Modulo Delivery gestisci gli ordini e il tuo rider.  </p>
          </div>
          <div className='flex flex-row gap-x-4 w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Stanco di ricevere recensioni negative per lunghi tempi di consegne? L’App Rider aiuta il tuo fattorino a trovare sempre<span className='pop700'> la strada più veloce </span></p>
          </div>
          <button className='w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
            <p className='pop500 text-black'>Ricevi ordini a domicilio</p>
          </button>
          <p className='pop500 text-md sm:text-sm underline text-black'>Oppure ricevi un consiglio da un nostro esperto</p>
        </div>
        <div className='w-1/2 sm:w-full flex items-center justify-center'>
          <img src={MotorCycleImage} alt="hero" className='h-[650px] sm:h-[300px]' />
        </div>
      </div>


      <div className='flex flex-row sm:flex-col'>
        <div className='w-1/2 sm:w-full flex items-center justify-center'>
          <img src={MotorCycleImage} alt="hero" className='h-[650px] sm:h-[300px]' />
        </div>
        <div className='w-1/2 sm:w-full text-left flex flex-col sm:p-5 p-20 gap-y-6'>
          <p className='meso text-6xl sm:text-3xl text-[#00B27A]'>Pacchetto “A Tavola”</p>
          <p className='pop700 text-3xl sm:text-xl text-black'>I tuoi tavoli sempre occupati</p>
          <div className='flex flex-row gap-x-4 w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Conosci il tuo cliente </span>tipo e aiutalo a venire al tuo ristorante: con il<span className='pop700'> Modulo di Prenotazioni </span> sul tuo sito è facile per lui e per te. Sempre senza commissioni.</p>
          </div>
          <div className='flex flex-row gap-x-4 w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'><span className='pop700'>Evita le disdette dell’ultimo minuto: </span>Evita le disdette dell’ultimo minuto: grazie al modulo di Notifiche Automatiche, ricorda al tuo cliente la sua prenotazione e<span className='pop700'> chiedi una recensione!</span></p>
          </div>

          <button className='w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
            <p className='pop500 text-black'>Ottieni più prenotazioni</p>
          </button>
          <p className='pop500 text-md sm:text-sm underline text-black'>Oppure ricevi un consiglio da un nostro esperto</p>
        </div>
      </div>


      <div className='flex flex-row sm:flex-col-reverse'>
        <div className='w-1/2 sm:w-full text-left flex flex-col sm:p-5 p-20 gap-y-6'>
          <p className='meso text-5xl sm:text-2xl text-[#00B27A] w-full'>Pacchetto “Il Viandante”</p>
          <p className='pop700 text-3xl sm:text-lg text-black'>Porta più persone a conoscere il<br /> tuo locale</p>
          <div className='flex flex-row gap-x-4 w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Non essere più <span className='pop700'>uno sconosciuto </span>  agli occhi dei passanti: ti scoprono online, <span className='pop700'>ti riconoscono  </span> non appena ti vedono e si fermano da te!</p>
          </div>
          <div className='flex flex-row gap-x-4 w-full'>
            <div className='w-5 h-5 sm:mt-2 sm:h-3 sm:w-3 rounded-full bg-[#FC6371]' />
            <p className='pop500 text-xl sm:text-lg text-black w-[90%]'>Essere nei <span className='pop700'>primi risultati su Google</span> ti permette di trasformare 1 utente su 4 in cliente. Con il Modulo Google My Business <span className='pop700'>scala le classifiche. </span></p>
          </div>
          <button className='w-[50%] sm:w-[75%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
            <p className='pop500 text-black'>Fatti conoscere</p>
          </button>
          <p className='pop500 text-md sm:text-sm underline text-black'>Oppure ricevi un consiglio da un nostro esperto</p>
        </div>
        <div className='w-1/2 sm:w-full flex items-center justify-center'>
          <img src={MotorCycleImage} alt="hero" className='h-[650px] sm:h-[300px]' />
        </div>
      </div>

      <div className='flex flex-row sm:flex-col bg-[#00B27A] h-fit'>
        <div className='w-1/2 sm:w-full sm:p-10 p-20  flex items-center justify-center'>
          <img src={AcademyImagae} alt="hero" className='h-[550px] sm:h-[250px]' />
        </div>
        <div className='w-1/2 sm:w-full text-left flex flex-col justify-evenly sm:p-5 p-20 gap-y-6'>
          <p className='meso text-5xl sm:text-2xl text-white w-full'>Academy</p>
          <p className='pop700 text-3xl sm:text-xl text-white'>Impara con Restaurants Club e fai <br /> crescere la tua attività</p>
          <p className='pop500 text-xl sm:text-md text-white w-[90%]'>Una serie di facili video tutorial per imparare a fare Marketing: impara ora a usare la piattaforma ed ottieni il certificato ufficiale a fine lezione!</p>
          <button className='w-[50%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
            <p className='pop500 text-black'>Fatti conoscere</p>
          </button>
          <p className='pop500 text-md sm:text-sm underline text-white'>Oppure ricevi un consiglio da un nostro esperto</p>
        </div>
      </div>


      <div className='flex flex-col'>
        <p className='meso text-6xl sm:text-2xl text-[#00B27A]  text-center'>La storia del ristorante “Il Canguro”</p>
        <div className='flex flex-row sm:flex-col '>
          <div className='w-2/3 sm:w-full text-left flex flex-col justify-center items-center sm:gap-y-6 gap-y-12'>
            <p className='pop500 text-3xl sm:text-xl w-2/3 text-center text-black'>"Ora è molto più semplice prenotare per i clienti. Le persone riconoscono il mio locale, vedono l'insegna e chiedono subito un tavolo." </p>
            <p className='pop500 text-md sm:text-sm  w-fit lg:ml-auto lg:mr-[10%] text-right text-black'>-Daniele, proprietario de “Il Canguro”</p>
            <div className='flex flex-row sm:gap-y-2 sm:flex-col items-center gap-x-20'>
              <div className='flex flex-col items-center gap-y-2'>
                <p className='text-[#00B27A] meso text-6xl'>+ 51 mila</p>
                <p className='text-black pop500 text-2xl sm:text-xl text-center'>utenti raggiunti tramite <br /> social media</p>
              </div>
              <div className='flex flex-col items-center gap-y-2'>
                <p className='text-[#00B27A] meso text-6xl'>+ 48,8%</p>
                <p className='text-black pop500 text-2xl sm:text-xl text-center'>richieste di indicazioni <br /> stradali su Google</p>
              </div>
            </div>
          </div>
          <div className='w-1/3 p-20 sm:p-5 sm:w-full flex items-center justify-center sm:-order-2'>
            <img src={ChefImage} alt="hero" className='h-[450px] sm:h-[350px]' />
          </div>
        </div>
      </div>



      <div className='flex flex-col items-center justify-center bg-[#FC6371] py-12 gap-y-8'>
        <p className='meso text-6xl sm:text-3xl text-white  text-center'>E allora? Mettiamo le mani in pasta!</p>
        <button className='w-[25%] sm:w-[50%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center '>
          <p className='pop500 text-black'>Fatti conoscere</p>
        </button>
        <p className='pop500 text-lg sm:text-sm underline text-white'>Oppure ricevi un consiglio da un nostro esperto</p>
      </div>


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

    </div>
  );
}

export default App;
