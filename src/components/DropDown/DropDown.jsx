import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../icons/Icons";
import { useEffect, useRef } from "react";

const Dropdown = ({ options, onSelect, label }) => {



    const [isOpen, setIsOpen] = useState(false);


    const dropdownRef = useRef(null);



    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);




    return (
        <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
                {label}
                <Arrow />
            </button>
            {isOpen && (
                <ul className="dropdown__list">
                    {options.map((option, index) => (
                        <Link to={option.link}>
                            <li
                                key={index}
                                className="dropdown__item"
                                onClick={() => handleSelect(option.title)}

                            >
                                {option.title}
                            </li>
                            <div className="border"></div>
                        </Link>
                        
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
