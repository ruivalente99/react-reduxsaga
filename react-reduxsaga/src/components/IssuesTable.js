import React, { Component } from "react";
import HeaderTable from "./HeaderTable";
import IssueCard from "./IssueCard";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

export default class IssuesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: props.issue,
      isOpen:false,
    };
  }

  render() {
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;

      if (!destination) {
        return;
      }
      // console.log(destination);
      // console.log(source);
      // console.log(draggableId);
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      console.log(this.state.issue);
    
      const issueDestination = this.state.issue[destination.droppableId-1].issues[destination.index]
      const issueSource = this.state.issue[source.droppableId-1].issues[source.index];
      const issueSwap = this.state.issue;
      console.log(issueSwap[destination.droppableId-1].issues[destination.index]);
      issueSwap[destination.droppableId-1].issues[destination.index] = issueSource;
      issueSwap[source.droppableId-1].issues[source.index] = issueDestination;
      console.log(issueSwap[destination.droppableId-1].issues[destination.index]);
      this.setState({issue:issueSwap});
      
    };

    var table = this.state.issue.map((status) => {
      return (
        
        <Droppable droppableId={status.id + 1}>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div key={status.id} className="table">
                <HeaderTable className="table-header" status={status.status} />
                <br />
                {status.issues.map((issue, index) => {
                  return (
                    <div className="table-issues" >
                      <IssueCard data={issue} index={index} />
                    </div>
                  );
                })}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        
      );
    });

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="tables-flex">{table}</div>;
      </DragDropContext>
    );
  }
}
