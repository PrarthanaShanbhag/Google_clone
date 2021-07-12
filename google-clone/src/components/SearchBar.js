import React, { useState } from 'react'
import './SearchBar.css'
//import mic from '../images/mic.png'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../pages/StateProvider'
import {actionType} from '../pages/reducer'
import Tooltip from '@material-ui/core/Tooltip';


function SearchBar({ hideButtons = false,terms=''}) {
    
    
    //eslint-disable-next-line
    const [{}, dispatch] = useStateValue();
    const [inputstate, setInputstate] = useState(terms);
    //const [inputstate, setInputstate] = useState();
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        //search with input
     
        dispatch({
            type:actionType.SET_SEARCH_TERM,
            term:inputstate
        })
        history.push(`/search`);
        
    };
   //console.log(inputstate);
    return (
    
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={inputstate} onChange={(e) => { setInputstate(e.target.value)
                 }} />
                <Tooltip title='Search by voice'>
                   
                <MicIcon className='mic'/>
              
                </Tooltip>
            </div>
            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' variant='outlined' onClick={search}> Google Search </Button>
                  <a className='doodle' href='https://www.google.com/doodles'> <Button variant='outlined'> I'm Feeling Lucky </Button> </a> 
                </div>
            ) :
                (<div className='search__buttonsHidden'>
                    <Button type='submit' variant='outlined' onClick={search}> Google Search </Button>
                    <Button variant='outlined' >  I'm Feeling Lucky  </Button>
                </div>)}

        </form>
    
        


    )
}

export default SearchBar
