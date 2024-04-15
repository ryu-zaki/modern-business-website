
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SectionTemp from './components/SectionTemp';
import Services from './components/Services';

/* Souce images on every section */
import desigNotes from '../src/components/imgs/design-notes.svg'
import space from '../src/components/imgs/space.svg';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';
import LoginPage from './components/SignupPage';

function App() {
  return (
    <div className='w-full overflow-hidden'>
     <NavBar />

     <Routes>

     <Route path='/' element={
      <>
        <HomePage />
     <article className='main-sec-con'>
     <SectionTemp 
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={desigNotes}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."} />

     <SectionTemp 
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={space}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."}
     />

     <Services />


     <SectionTemp 
       subTitle={"Mauris tempor interdium"} 
       btnText={"start today"} 
       title={"Proin condimentum diam"}
       sourceImg={desigNotes}  
       desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat elit non nulla tempor pellentesque. Donec pretium at augue eu varius. Aenean egestas commodo ante, at ullamcorper enim mattis nec. Pellentesque a augue metus. Vestibulum lobortis viverra fringilla. Aenean imperdiet massa nec eros porta vehicula. Nullam facilisis tincidunt sem et sodales. Cras consectetur at magna id congue. Integer dignissim tortor ut sem ornare mattis."}
     />

     </article>
      </>
     }
     
     />

     <Route path='signup' element={
      <LoginPage />
     } />
     
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
