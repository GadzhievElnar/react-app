import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false, 
        status: this.props.status    
    }

    activateEditMode = () => {        
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {                
        this.setState({editMode: false});  
        debugger;
        this.props.updateStatus(this.state.status);     
    }    

    setStatus = (event) => {
        debugger;
        this.setState({status: event.target.value});
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status)
        {
            this.setState({status: this.props.status});
        }
        
        let a = this.state;
        let b = this.props;

        console.log('componentDidUpdate');
        //this.setState({status: this.state.status});
    }

    render() {console.log('render');
        return (
            
            <div>
                {this.state.editMode 
                  ?  <div>
                        <input onChange={this.setStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                  : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || '-------'}</span>
                    </div>
                }


            </div>
        );
    }

}

export default ProfileStatus;