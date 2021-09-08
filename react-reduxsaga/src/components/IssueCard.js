import React, { PureComponent } from "react";
import { Draggable } from "react-beautiful-dnd";
import IssueDialog from "./IssueDialog";
export class IssueCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      index: props.index,
      isOpen: false,
    };
  }

  render() {
    const closeDialog = () => {
      this.setState({ isOpen: false });
    };
    return (
      <Draggable draggableId={this.state.data.id} index={this.state.index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              className="card"
              onClick={() => this.setState({ isOpen: true })}
            >
              <div className="card-body">
                <h5>{this.state.data.key}</h5>
                <h6 className="mb-2 text-muted">
                  {this.state.data.fields.summary}
                </h6>
              </div>
            </div>
            {this.state.isOpen ? (
              <IssueDialog
                openDialog={this.state.isOpen}
                title={this.state.data.key}
                setOpenDialog={closeDialog}
                data={this.state.data}
              ></IssueDialog>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

export default IssueCard;
