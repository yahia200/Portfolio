import React from "react";
function ConnectCard({name , l, type}) {

  const card = type === "mail" ? <a href={"https://" + l} target="_blank" className="mx-auto flex">
  <div>
  <p className="text-4xl text-center text-ctp-red">{name}</p>
  <p className="text-3xl text-center text-ctp-text">{l}</p>
  </div>
</a>
:
<a target="_blank" className="mx-auto flex">
  <div>
  <p className="text-4xl text-center text-ctp-red">{name}</p>
  <p className="text-3xl text-center text-ctp-text">{l}</p>
  </div>
</a>

  return (
    <div className="bg-ctp-base w-[30vw] rounded-xl py-5 flex m-32">
      {card}
    </div>
  );
}

export default ConnectCard;
