import React from 'react';
import Footer from '../components/footer';
import Head from '../components/heading';
import Hero from '../components/hero';




class Home extends React.Component{


    render(){
        return(
            <div>
                <Head />
                <Hero />
                <Footer />
            </div>
            
        )
    };
}


export default Home;