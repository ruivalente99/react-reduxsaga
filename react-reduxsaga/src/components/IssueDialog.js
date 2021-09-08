import React, { Component } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

export default class IssueDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      openDialog: props.openDialog,
      setOpenDialog: props.setOpenDialog,
      title: props.title,
      isInEditMode: false,
    };
  }
  changeEditMode = () => {
    this.setState({ isInEditMode: true });
  };

  render() {
    return (
      <Dialog open={this.state.openDialog}>
        <DialogTitle>
          <div className="dialog-title">
            <div style={{ flexGrow: 1 }}>{this.state.title}</div>
            <button
              className="btn btn-danger"
              onClick={this.state.setOpenDialog}
            >
              X
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="mb-2 text-muted">
            {this.state.data.fields.status.name}
          </div>
          {this.state.isInEditMode ? (
            <div>
              <input
                onChange={(e) => this.setState({data:{
                  ...this.state.data,
                  fields:{
                    ...this.state.data.fields,
                    summary: e.target.value
                  }
                } })}
                className="input"
                type="text"
                defaultValue={this.state.data.fields.summary}
              ></input>
              <button onClick={()=>this.setState({ isInEditMode: false})} className='btn btn-primary'>Save</button>
            </div>
          ) : (
            <div onDoubleClick={this.changeEditMode}>
              {this.state.data.fields.summary}
            </div>
          )}

          <br></br>
          <div>{this.state.data.fields.description}</div>
        </DialogContent>
      </Dialog>
    );
  }
}
