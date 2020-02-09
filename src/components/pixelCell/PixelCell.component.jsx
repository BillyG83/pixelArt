import React from 'react'
import './pixel-cell.styles.scss'

const PixelCell = ({ currentColor }) => {

    const cellClicked = (e) => {
        e.preventDefault()
        e.target.style.backgroundColor = `#${currentColor}`
    }

    return (
        <div className='pixel-cell' onClick={cellClicked}></div>
    )
}

export default PixelCell