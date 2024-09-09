import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import Draggable from "react-draggable";

// TextEditor Component
export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onEditorStateChange = (editorState) => {
    if (this._isMounted) {
      this.setState({
        editorState,
      });
    }
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        {/* Static Toolbar */}
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        
        {/* Draggable Input Field */}
        <Draggable>
          <div className="draggable-editor">
            <Editor
              editorState={editorState}
              toolbarHidden={true} // Hide toolbar for the draggable editor field
              editorClassName="draggable-editor-class"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
        </Draggable>
      </div>
    );
  }
}
