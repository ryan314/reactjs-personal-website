import Home from '../../index.js';
import './AboutRPGGame.css';
import rpgGame0 from '../../Images/rpgGame/rpgGame0.jpg';
import rpgGame1 from '../../Images/rpgGame/rpgGame1.jpg';
import rpgGame2 from '../../Images/rpgGame/rpgGame2.jpg';
import rpgGame3 from '../../Images/rpgGame/rpgGame3.jpg';
import rpgGame4 from '../../Images/rpgGame/rpgGame4.jpg';
import rpgGame5 from '../../Images/rpgGame/rpgGame5.jpg';
import rpgGame6 from '../../Images/rpgGame/rpgGame6.jpg';
import rpgGame7 from '../../Images/rpgGame/rpgGame7.jpg';
import rpgGame8 from '../../Images/rpgGame/rpgGame8.jpg';
import rpgGame9 from '../../Images/rpgGame/rpgGame9.jpg';

import {
    useNavigate,
} from 'react-router-dom';

function AboutRPGGame() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='rpg-game-title'>RPG Game</div>

            <img className='rpg-game0-img' src={rpgGame0}></img>
            <img className='rpg-game1-img' src={rpgGame1}></img>
            <img className='rpg-game2-img' src={rpgGame2}></img>

            <div className='rpg-game-description'>
                Image 1: This is the home screen where the player has the option to choose whether to play, click on play
                (which provides the player with the game instructions) or to quit the game.
                <br/>
                <br/>
                Image 2: This is an image of land on which your character can traverse across to increase their statistics, 
                battle against enemies, and eventually battle against the final enemy.
                <br/>
                <br/>
                Image 3-8: These are images of enemies the player can battle against, as well as the animations once the 
                player decides to attack the enemy.
                <br/>
                <br/>
                Image 9-10: These are images of the character battling against the final enemy.
            </div>
        </div>
    );
}

export default AboutRPGGame;