import Home from '../../index.js';
import './AboutAbsFuncSimulator.css';
import absFunc0 from '../../Images/AbsFunc/absFunc0.jpg';
import absFunc1 from '../../Images/AbsFunc/absFunc1.jpg';
import absFunc2 from '../../Images/AbsFunc/absFunc2.jpg';

import {
    useNavigate,
} from 'react-router-dom';

function AboutAbsFuncSimulator() {
    const navigate = useNavigate()

    return(
        <div>
            <div className='abs-func-title'>Absolute Value Function Simulator</div>

            <img className='absFunc0-img' src={absFunc0}></img>
            <img className='absFunc1-img' src={absFunc1}></img>
            <img className='absFunc2-img' src={absFunc2}></img>

            <div className='abs-func-description'>
                (Reading from Top to Bottom)   
                <br/>
                <br/>
                Image 1: This is a graph of the absolute function in default position (a = 1, h = 0, and k = 0)
                <br/>
                <br/>
                Image 2: This is a graph of the absolute function translated and stretched from default position
                (a = -10, h = 4, k = 7)
                <br/>
                <br/>
                Image 3: This is a graph of the absolute function translated and stretched from default position
                (a = 1, h = -5, k = -2)
                <br/>
                <br/>
                In fact, you can graph the absolute function for a,h, and k ranging from -10 to 10
            </div>
        </div>
    );
}

export default AboutAbsFuncSimulator; 