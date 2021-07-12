import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import { Link } from "react-router-dom"
import SearchBar from '../components/SearchBar'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import Response from './response'
import Home from './Home'
import useGoogleSearch from './useGoogleSearch';
//import SearchFooter from './SearchFooter'
const SearchPage = () => {
    //eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue('');
    //live API
    const { data } = useGoogleSearch(term);
    //const data = Response;
    //console.log(term);
    try {
        if (term) {
            return (
                <div className='searchPage'>
                    <div className='searchPage__header'>

                        <Link to='/'>
                            <img className='searchPage__logo' src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=" " />
                        </Link>

                        <div className='searchPage__headerBody'>

                            <SearchBar hideButtons='true' terms={term} />
                            <br />
                            <div className='searchPage__options'>
                                <div className='searchPage__optionsLeft'>

                                    <div className='searchPage__option'>
                                        <SearchIcon />
                                        <Link to='/'> All</Link>
                                    </div>

                                    <div className='searchPage__option'>
                                        <DescriptionIcon />
                                        <Link to='/'> News</Link>
                                    </div>

                                    <div className='searchPage__option'>
                                        <InsertPhotoIcon />
                                        <Link to='/'> Images</Link>
                                    </div>

                                    <div className='searchPage__option'>
                                        <LocalOfferIcon />
                                        <Link to='/'> Shopping</Link>
                                    </div>

                                    <div className='searchPage__option'>
                                        <RoomIcon />
                                        <Link to='/'> Maps</Link>
                                    </div>

                                    <div className='searchPage__option'>
                                        <MoreVertIcon />

                                        <Link to='/'> More</Link>
                                    </div>

                                </div>
                                <div className='searchPage__optionsRight'>
                                    <div className='searchPage__option'>
                                        <Link to='/'> Tools</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {term && (
                        <div className='searchPage__results'>
                            <p className='searchPage__resultCount'>
                                About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds)
                            </p>
                            {
                                data?.items.map(item => (
                                    <div className='searchPage__result'>
                                        <a className='link' href={item.link}>
                                            {item.pagemap?.cse_image?.length > 0
                                                && item.pagemap?.cse_image[0]?.src && (
                                                    <img className='searchPage__resultImage'
                                                        src={item.pagemap?.cse_image?.length > 0
                                                            && item.pagemap?.cse_image[0]?.src}
                                                        alt=''
                                                    />
                                                )}
                                            {item.displayLink} <ArrowDropDownIcon className='downarrow' fontSize='medium' />
                                        </a>
                                        <a className='searchPage__resultTitle' href={item.link}>
                                            {item.title}
                                        </a>
                                        <p className='searchPage__resultSnippet' >
                                            {item.snippet}
                                        </p>
                                    </div>
                                ))}

                            

                        </div>
                        


                    )}


                </div>


            )
        }
        else {
            return (<Home />);
        }
    }
    catch (e) {
        return (
            <Home />

        );
    }
}

export default SearchPage
