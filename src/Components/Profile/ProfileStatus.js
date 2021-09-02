import React from "react"


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMod = () => {
        this.setState({
            editMode: true

        })
    }
    DeActivateEditMod  = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusCange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMod}>{this.props.status || 'No status'}</span>
                    </div>
                   :
                    <div>
                      <input onChange={this.onStatusCange} autoFocus={true} onBlur={this.DeActivateEditMod} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
