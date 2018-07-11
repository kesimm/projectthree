import React from 'react';
import { Link } from 'react-router-dom';


const Rules = () => (
  <div>
    <p>
    Take more boxes than your opponent. You move by connecting two dots with a line. When you place the last ‘wall’ of a single square (box), the box is yours. The players move in turn, but whenever a player takes a box (s)he must move again. The board game ends when all boxes have been taken. The player with the most boxes wins.

    </p>
    <button className="button is-primary back">
        <Link to="/"> Go Back </Link>
    </button>
  </div>
)

export default Rules
