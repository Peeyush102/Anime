import React from "react";
import * as VscIcons from "react-icons/vsc";
function Loading() {
  return (
    <div>
      <VscIcons.VscLoading />
      {/* <img
        src={`https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg`}
      /> */}
      Loading...
    </div>
  );
}

export default Loading;
