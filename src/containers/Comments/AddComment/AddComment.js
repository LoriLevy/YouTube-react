/* file: src/containers/Comments/AddComment/AddComment.js */
import React from "react";
import "./AddComment.scss";
import { Form, Image, TextArea } from "semantic-ui-react";

export function AddComment() {
  return (
    <div className="add-comment">
      <Image className="user-image" src="http://via.placeholder.com/48x48" circular/>
      <Form>
        <Form.TextArea control={TextArea} placeholder="Add your comment" />
      </Form>
    </div>
  );
}
