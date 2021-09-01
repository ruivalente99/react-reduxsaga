import React, { PureComponent } from 'react'

export class HeaderTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          status: props.status,
        };
      }
    
    render() {
        return (
            <div key={this.state.id} className='table-header'>
                <div>{this.state.status}</div>
            </div>
        )
    }
}

export default HeaderTable
