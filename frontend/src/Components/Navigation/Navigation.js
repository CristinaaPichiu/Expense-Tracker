import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import avatar3 from '../../img/avatar3.png'
import { menuItems } from '../../utils/menuItems'

function Navigation({ active, setActive }) {
    
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar3} alt="" />
                <div className="text">
                    <h2>Cristina</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    <FontAwesomeIcon icon={faSignOut} /> Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: rgba(34, 34, 96, 1);
            margin: 0; /* Evită marginul implicit pentru h2 */
        }
        p {
            color: rgba(34, 34, 96, .6);
            margin: 0; /* Evită marginul implicit pentru p */
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* Alinează cu textul de sus */
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            .svg-inline--fa {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
        .svg-inline--fa {
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;


export default Navigation
