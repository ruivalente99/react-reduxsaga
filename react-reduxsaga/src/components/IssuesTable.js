import React, { PureComponent } from "react";
import HeaderTable from "./HeaderTable";
import IssueCard from "./IssueCard";
import {Droppable} from 'react-beautiful-dnd';
export default class IssuesTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      issue: props.issue,
    };
  }
  render() {
    const table = this.state.issue.map((status) => {
      return (
        <div key={status.id} className="table">
          <HeaderTable className="table-header" status={status.status} />
          <br />
          {status.issues.map((issue) => {
            return (
              <div className="table-issues">
                <IssueCard data={issue} />
              </div>
            );
          })}
        </div>
      );
    });

    return (
        <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            
          >
                <div className="tables-flex">
                    {table}
                </div>
                {provided.placeholder}
            </div>
          )}
        </Droppable>
    );
  }
}
