import React from 'react'
import './SearchFooter.css'

const SearchFooter = () => {
    return (
        
            <div className='home__footer'>
                <div className='home__footerLeft'>
                    <a href='https://about.google/'>About</a>
                    <a href='https://ads.google.com/'>Advertising</a>
                    <a href='https://www.google.com/intl/en_in/business/'>Business</a>
                   {/* <a href='https://www.google.com/search/howsearchworks/?fg=1'>How Search works</a>
             */}   </div>
                <div className='home__footerRight'>
                    <a href='https://policies.google.com/privacy'>Privacy</a>
                    <a href='https://policies.google.com/terms'>Terms</a>
                   {/* <a href='https://www.google.com/preferences'>Settings</a>*/}

                </div>
            </div>
    
    )
}

export default SearchFooter
