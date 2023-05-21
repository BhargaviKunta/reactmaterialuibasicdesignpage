

import * as React from 'react';

import Edu from './assets/edu.png';
import Header from './header';
import Footer from './footer';
import Image from './image';
import Content from './content';
import Blogs from './blogs';
import Search from './search'
function App() {
 
  return (
     <div >      <Header/>
      <Image/>
      <Content/>
      <Blogs />
      <Search/>
      <Footer />
      </div>
  );
}


export default App;
