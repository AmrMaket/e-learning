import '../../../base.css';
import './styles.css'

import Discussion from '../../../components/Discussion';
import GamesList from '../../../components/GamesList';
import { useState } from 'react';

const InteractiveLearning = () => {

    const [discussions, setDiscussions] = useState ([
        {title: 'UI/UX', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio repellendus dolorum natus qui recusandae, velit aut mollitia laboriosam fuga. Ut adipisci corporis in quasi provident iste maiores? Temporibus, adipisci?', author: 'Moth', id: 1},
        {title: 'English', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio repellendus dolorum natus qui recusandae, velit aut mollitia laboriosam fuga. Ut adipisci corporis in quasi provident iste maiores? Temporibus, adipisci?', author: 'Praying Mantis', id: 2},
    ]);

    const [games, setGames] = useState ([
        {title: 'Froggy Challenge', link: 'game URL', id: 1},
        {title: 'CSS Diner', link: 'game URL', id: 2},
    ]);

    return (
        <div className="interactive-learning-main-container flex justify-center padding-l">
            <div className="discussions-container flex flex-col align-center width-40">
                <Discussion discussions={discussions}/>
            </div>
            <div className="games-list-container flex flex-col align-center width-40">
                <GamesList games={games}/>
            </div>
        </div>
    );
}
 
export default InteractiveLearning;