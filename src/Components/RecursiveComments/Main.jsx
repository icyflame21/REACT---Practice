import React from "react";

import CommentData from "../../CommentsData";
import { RecursiveComment } from "./RecursiveComment";
export default function Main() {
  return (
    <>
      <RecursiveComment commentData={CommentData} />
    </>
  );
}
