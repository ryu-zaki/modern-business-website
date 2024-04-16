
import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SectionTemp from './components/SectionTemp';
import Services from './components/Services';

/* Souce images on every section */
import desigNotes from '../src/components/imgs/design-notes.svg'
import space from '../src/components/imgs/space.svg';
import Footer from './components/Footer';
import LoginPage from './components/SignupPage';
import { scroller, Element } from 'react-scroll';
import CapsuleNav from './components/CapsuleNav';

function App() {

  const [capsuleVisible, setCapsuleVisible] = React.useState(false);
  const navBarRef = React.createRef(null);

  const scrollForm = () => {
    scroller.scrollTo('form', {
      duration: 1000,
      smooth: 'easeInOutQuart',
      offset: 50
    })
  }

  

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCapsuleVisible(false)
        } else {
          setCapsuleVisible(true)
        }
      })
    })

    observer.observe(navBarRef.current)

  }, [])

  return (
    <div className='w-full overflow-hidden'>
     <NavBar navBarRef={navBarRef} scrollForm={scrollForm} />
      <CapsuleNav setCapsuleVisible={setCapsuleVisible} capsuleVisible={capsuleVisible} />
      <Element name='home'></Element>  
      <HomePage />
     <article className='main-sec-con'>
     <SectionTemp 
       name={"about"}
       subTitle={"We create value and services"} 
       btnText={"explore"} 
       title={"J&Global Services"}
       sourceImg={desigNotes}  
       desc={"At J&Global Agency, we specialize in providing comprehensive web development solutions tailored to meet the unique needs of our clients. Our team of experienced developers and designers are committed to delivering high-quality, scalable, and user-friendly websites that drive results. Explore our range of services below:"} />

     <SectionTemp 
      name={'discover'}
       subTitle={"Explore our value"} 
       btnText={"explore"} 
       title={"Discover our agency"}
       sourceImg={space}  
       desc={"Understand the essence of J&Global Agency. Here, you'll uncover our unique approach to web development, blending cutting-edge technology with creative design to produce exceptional results. Explore our portfolio of successful case studies spanning various industries, and hear directly from our satisfied clients about their experiences with our services. Delve into the technologies we employ and meet our team of skilled developers, designers, and digital strategists dedicated to excellence. "}
     />
     
     <Services name={"services"} />


     <SectionTemp 
       subTitle={"What we see in the future"} 
       btnText={"read more"} 
       title={"Our Goals"}
       sourceImg={desigNotes}  
       desc={"Our core goals revolve around empowering businesses through innovative web solutions that drive growth and success. We prioritize client satisfaction by delivering tailored, high-quality web solutions that align with their objectives and enhance their online presence. Our commitment to continuous innovation ensures we stay ahead of technological advancements and design trends, providing cutting-edge services that set our clients apart from the competition."}
     />

     </article>
    
     <LoginPage name="form" />
     <Footer />
    </div>
  );
}

export default App;
