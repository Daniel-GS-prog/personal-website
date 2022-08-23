import React from 'react';
import './Card.css';
import GithubLogo from '../images/github.png';
import WebsiteLogot from '../images/website.png';

const Card = () => {
    return (
        <div className='card-display card-style'>
            <h1 className='title'>Salus:</h1>
            <hr></hr>
            <p className='description'> First steps of a social media platform where users 
            can connect with each other, send crypto transfers,
            and buy/sell NFTs.</p>
            <ul className='icons-list'>
                <li className='icon'><a href='https://salus-crypto.com/' target="_blank"> <img src={WebsiteLogot} /></a></li>
                <li className='icon'><a href="https://github.com/Daniel-GS-prog/react-eth-payments" target="_blank"><img src={GithubLogo}/></a></li>
            </ul>

        </div>
    );
}

export default Card;
