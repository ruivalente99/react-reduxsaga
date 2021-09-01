import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIssues } from "../redux/actions/issues";
import IssuesTable from "./IssuesTable";
import { DragDropContext } from 'react-beautiful-dnd';
const IssuesList = () => {
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.issues.issues);
  /* const loading = useSelector((state) => state.issues.loading);
  const error = useSelector((state) => state.issues.error); */
  const statuses = ["To Do", "In Progress", "Done"];

  function getIssuesByStatus(statuses, issues) {
    var result = statuses.map((status,index) => {
      return {
        status: status,
        id: index,
        issues: issues.filter(
          (issue) => issue.fields.status.name === status // Logic
        ),
      };
    });

    return result;
  }

  const list = JSON.stringify(issues) !== JSON.stringify({}) && (
    <div>
      <h1>Issues</h1>
      <p></p>
      <IssuesTable issue={getIssuesByStatus(statuses, issues.issues)}/>
    </div>
  );


  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  return (
    <DragDropContext>
    <div className="container">
      {list}
    </div>
     </DragDropContext>
  );
};
export default IssuesList;
