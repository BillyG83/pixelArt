import React from 'react'
import PixelCell from '../pixelCell/PixelCell.component'
import './pixel-area.styles.scss'

class PixelArea extends React.Component {

    constructor({projectInfo}) {
        super()

        this.state = {
            projectInfo: projectInfo,
            projectData: [],
            currentColor: '000000'
        }
    }

    componentDidMount() {
        const pixelCells = Number(this.state.projectInfo.projectWidth) * Number(this.state.projectInfo.projectHeight)
        let pixelCellCollection = []
        for (let i = 0; i < pixelCells ; i++) {
            const cell = { key: i, value: 'ffffff'}
            pixelCellCollection.push(cell)
        }
        this.setState({ projectData: pixelCellCollection })
    }

    render() {
        return (
            <div className='pixel-area'>
                <h2>{this.state.projectInfo.projectName}</h2>
                <div className="pixel-area__flex">
                {
                    this.state.projectData.map((cell, i) => (
                        <PixelCell key={i} currentColor={this.state.currentColor} />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default PixelArea