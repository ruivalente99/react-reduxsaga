import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

function IssueDialog(props) {
  const { title, children, openDialog, setOpenDialog,data } = props;

  return (
    <Dialog open={openDialog}>
      <DialogTitle>
        <div className="dialog-title">
          <div style={{flexGrow:1}}>{title}</div>
          <button className="btn btn-danger" onClick={setOpenDialog}>X</button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="mb-2 text-muted">
        {props.data.fields.status.name}
                </div>
                <div>{props.data.fields.summary}</div>
                <br></br>
                <div>{props.data.fields.description}</div>
    </DialogContent>
    </Dialog>
  );
}

export default IssueDialog;
