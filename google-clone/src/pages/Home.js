import React from 'react'
import './Home.css'
//import { Link } from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import SearchBar from "../components/SearchBar";
import SearchFooter from './SearchFooter';

function Home() {

    return (
     
            <div className='home'>

                <div className='home__header' >
                    <div className='home__headerLeft'>
                        {/*Link About
                        <Link to='about'>About</Link>

                        {/*Link store
                        <Link to='store'>Store</Link> */}
                    </div>
                    <div className='home__headerRight'>
                        {/*Link Gmail*/}
                        <a href='https://www.google.com/intl/en-GB/gmail/about/#'>Gmail</a>

                        {/*Link Images*/}
                        <a href='https://www.google.co.in/imghp'>Images</a>

                        {/*Link Google gallery*/}
                        <AppsIcon />

                        {/*Link Avtar*/}
                        <Avatar />
                    </div>

                </div>


                <div className='home__body' >
                    <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=" " />
                    <div className='home__inputContainer'>
                        {/*searchbar*/}
                        <SearchBar hideButtons={false} />
                    </div>
                    <div className='home__footers'>
                        <SearchFooter />
                    </div>
                </div>


            </div>
      
    )
}

export default Home
