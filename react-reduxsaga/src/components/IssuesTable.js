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
      isOpen: false,
    };
  }

  render() {
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
      if (!destination) {
        return;
      }
      if (destination.droppableId != source.droppableId) {
        console.log(
          "Moving between different columns doesnt work properly, yet"
        );
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
      const starredProjects = Object.assign([], this.state.issue);
      const sauce =
        this.state.issue[source.droppableId - 1].issues[source.index];
      //console.log(sauce);
      starredProjects[destination.droppableId - 1].issues.splice(
        source.index,
        1
      );
      starredProjects[destination.droppableId - 1].issues.splice(
        destination.index,
        0,
        sauce
      );
      if (destination.droppableId - 1 != source.droppableId - 1) {
        starredProjects[source.droppableId - 1].issues.splice(source.index, 1);
      }
      this.setState({
        issue: starredProjects,
      });
    };

    var table = this.state.issue.map((status) => {
      return (
        <Droppable key={status.id + 1} droppableId={(status.id + 1).toString()}>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <div className="table">
                <HeaderTable className="table-header" status={status.status} />
                <br />
                {status.issues.map((issue, index) => {
                  return (
                    <div key={issue.key} className="table-issues">
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
        <div className="tables-flex">{table}</div>
      </DragDropContext>
    );
  }
}
