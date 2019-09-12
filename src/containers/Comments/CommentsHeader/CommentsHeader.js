import React from "react";
import "./CommentsHeades.scss";
import { Button, Icon } from "semantic-ui-react";

export function CommentsHeader(props) {
  return (
    <div className="comments-header">
      <h4>{props.totalComments} Comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left" />
      </Button>
    </div>
  );
}
