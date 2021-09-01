import React, { PureComponent } from "react";
import {Draggable} from 'react-beautiful-dnd';
export class IssueCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    return (
      <Draggable key={this.state.data.key} draggableId={this.state.data.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card">
              <div className="card-body">
                <h5>{this.state.data.key}</h5>
                <h6 className="mb-2 text-muted">
                  {this.state.data.fields.summary}
                </h6>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default IssueCard;
