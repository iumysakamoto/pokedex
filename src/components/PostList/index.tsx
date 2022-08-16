import React from "react";
import style from "./PostList.module.scss";

const PostList = () => {
  return (
    <>
      <div className="dv-line dv-margin-top-hdpi">
        <div className="dv-column">
          <p className="dv-bold">Iu Sakamoto</p>
        </div>
        <div className="dv-column dv-horizontal-align-right">
          <p className="dv-gray">04/08/2022</p>
        </div>
      </div>
      <p className={style.PostList}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos corrupti
        quia est aperiam odio voluptatum cupiditate asperiores quod praesentium
        sint.
      </p>
    </>
  );
};

export default PostList;
