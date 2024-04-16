
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
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={desigNotes}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."} />

     <SectionTemp 
      name={'discover'}
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={space}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."}
     />
     
     <Services name={"services"} />


     <SectionTemp 
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={desigNotes}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."}
     />

     </article>
    
     <LoginPage name="form" />
     <Footer />
    </div>
  );
}

export default App;
