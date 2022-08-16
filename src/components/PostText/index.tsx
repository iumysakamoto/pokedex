import React from "react";
import style from "./PostText.module.scss";

const PostText = () => {
  return (
    <textarea
      className={style.PostText}
      id="postagem"
      name="postagem"
      placeholder="O que você quer anotar?"
    ></textarea>
  );
};

export default PostText;
