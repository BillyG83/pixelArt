import React from 'react'
import PixelCell from '../pixelCell/PixelCell.component'
import { SketchPicker } from 'react-color';
import './pixel-area.styles.scss'

class PixelArea extends React.Component {

    constructor({projectInfo}) {
        super()

        this.state = {
            projectInfo: projectInfo,
            projectData: [],
            currentColor: '#000000'
        }
    }

    componentDidMount() {
        // get height and width from element ref currently set to 100% of parent
        const height = this.divElement.clientHeight
        const width = this.divElement.clientWidth
        // get the smallest value and assign to both so its always a perfect grid
        const smallest = height >= width ? width : height
        this.divElement.style.height = `${smallest}px`
        this.divElement.style.width = `${smallest}px`
        // make an object for each cell of the pixel art
        const pixelCells = Number(this.state.projectInfo.projectWidth) * Number(this.state.projectInfo.projectHeight)
        let pixelCellCollection = []
        for (let i = 0; i < pixelCells ; i++) {
            const cell = { key: i, value: 'ffffff'}
            pixelCellCollection.push(cell)
        }
        this.setState({ projectData: pixelCellCollection })
    }

    onColorPickChange = (color) => {
        document.querySelector('#jsColorFeedback').style.backgroundColor = color.hex
        this.setState({ currentColor: color.hex })
        console.log(color.hex);
    }

    render() {
        return (
            <div className='pixel-area'>
                <div className='pixel-area__title'>
                    <h1>{this.state.projectInfo.projectName}</h1>
                </div>
                
                <div className='pixel-area__container'>
                    <div 
                        className="pixel-area__grid" 
                        ref={ (divElement) => { this.divElement = divElement } }
                        style={{
                            gridTemplateColumns: `repeat(${Number(this.state.projectInfo.projectWidth)}, 1fr)`,
                            gridTemplateRows: `repeat($(Number(this.state.projectInfo.projectHeight)), 1fr)`
                        }}    
                    >
                    {
                        this.state.projectData.map((cell, i) => (
                            <PixelCell key={i} currentColor={this.state.currentColor} />
                        ))
                    }
                    </div>
                </div>

                <div className='pixel-area__picker'>
                    <label htmlFor="picker" aria-label="hidden">Pick a color</label>
                    <div id='jsColorFeedback' className='pixel-area__color-preview'>
                        <SketchPicker
                            color={ this.state.currentColor }
                            onChangeComplete={ this.onColorPickChange }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PixelArea