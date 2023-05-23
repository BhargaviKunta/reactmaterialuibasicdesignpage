

import * as React from 'react';

import Edu from './assets/edu.png';
import Header from './header';
import Text from './text'
import Footer from './footer';
import Image from './image';
import Content from './content';
import Blogs from './blogs';
import Search from './search'
function App() {
 
  return (
     <React.Fragment >      <Header/>
     <Text/>
      <Image/>
      <Content/>
      <Blogs />
      <Search/>
      <Footer />
      </React.Fragment>
  );
}


export default App;
