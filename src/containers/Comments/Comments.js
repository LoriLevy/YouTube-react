import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader";
import {AddComment} from "./AddComment/AddComment";
import {Comment} from "./Comment/Comment";
import {Divider} from 'semantic-ui-react';

export class Comments extends React.Component {
  render() {
    return( 
      <div>
      <Divider className="comments-divider"/> 
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment />
        <Comment /><Comment /><Comment />
      </div>
    );
  }
}