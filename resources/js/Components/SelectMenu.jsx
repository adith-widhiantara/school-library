import React from 'react'

const SelectMenu = ({ options, onChange, defaultValue }) => {
    return (
        <select
            className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            onChange={onChange}
            defaultValue={defaultValue}
        >
            <option disabled value="">
                Open this select menu
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default SelectMenu
