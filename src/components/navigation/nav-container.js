import React from 'react'
import { NavLink } from 'react-router-dom';

export default function() {
  return (
    <div className="nav-wrapper">
        <div>
            <NavLink exact to="/">
                Me
            </NavLink>
        </div>

        <div>
            <NavLink exact to="/movies">
                Movies I Love
            </NavLink>
        </div>

        <div>
            <NavLink exact to="/music">
                Music
            </NavLink>
        </div>

        <div>
            <NavLink exact to="/tvshows">
                TV Shows
            </NavLink>
        </div>
    
    </div>
  )
}