import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader";
import {AddComment} from "./AddComment/AddComment";
import {Comment} from "./Comment/Comment";
import {Divider} from 'semantic-ui-react';

function Comments({amountComments}) {
  
    return( 
      <div>
      <Divider className="comments-divider"/> 
        <CommentsHeader amountComments={amountComments}/>
        <AddComment />
        <Comment /><Comment /><Comment />
      </div>
    );
  }

  
export default Comments;