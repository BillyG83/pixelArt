import React from 'react'
import SetUpForm from '../setupForm/SetupForm.component'
import PixelArea from '../pixelArea/PixelArea.component'

class Canvas extends React.Component {

    constructor() {
        super()
        this.state = {
            setupReady: false,
            projectInfo: {
                projectName: 'your project',
                projectWidth: 0,
                projectHeight: 0
            }
        }
    }

    checkInputValues = (e) => {
        e.preventDefault()

        switch (true) {
            case this.state.projectInfo.projectName === 'your project':
                alert('Please give your project a name')
                break
            case this.state.projectInfo.projectHeight === 0:
                alert('How many pixels high should your project be?')
                break
            case this.state.projectInfo.projectWidth === 0:
                alert('How many pixels wide should your project be?')
                break
            default :
                this.updateStateProp(e.target.id)
        }
    }

    updateStateProp(e) {        
        if (e === 'submit') {
            this.setState({ setupReady: true })
        } else {
            let projectInfoCopy = JSON.parse(JSON.stringify(this.state.projectInfo))
            projectInfoCopy[e.target.id] = e.target.value
            this.setState({ projectInfo: projectInfoCopy })
        }
    }

    render() {
        return (
            this.state.setupReady ?
            <PixelArea projectInfo={this.state.projectInfo} />
            :
            <SetUpForm 
                updateStateProp={this.updateStateProp.bind(this)}
                checkInputValues={this.checkInputValues}
                projectInfo={this.state.projectInfo}
            />
        )
    }   
}

export default Canvas;