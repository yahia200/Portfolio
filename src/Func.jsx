import React from "react";
import "highlight.js/styles/github.css";
// Very important to import the css file. In next.js, put the following line in `_app.js` instead.
import "highlight.js/styles/tokyo-night-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import onion from "../onion.jpeg";

const Func = () => {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <div className="application mt-20 ml-20  w-fit flex font-bold">
      <div className="mx-auto px-5 py-8 bg-ctp-base rounded-full">
        <h className="text-5xl pt-5 text-ctp-mauve">void </h>
        <h className="text-5xl pt-5 text-ctp-blue">Init</h>
        <h className="text-5xl pt-5 text-ctp-text">(</h>
        <h className="text-5xl pt-5 text-ctp-peach">Image </h>
        <h className="text-5xl pt-5 text-ctp-red">onion</h>
        <h className="text-5xl pt-5 text-ctp-text">, </h>
        <h className="text-5xl pt-5 text-ctp-peach">Name </h>
        <h className="text-5xl pt-5 text-ctp-red">&quot;YAHIA ELGHONIEMY&quot;</h>
        <h className="text-5xl pt-5 text-ctp-text">);</h>
      </div>
<button type="button" className="bg-ctp-green h-fit my-auto p-2 text-4xl rounded-lg text-ctp-base">RUN</button>
      {/*<img src={onion} className="size-72 ml-20 rounded-full col-span-1" />
      <div className="grid tracking-wide text-ctp-green col-span-3 pl-11 space-y-0 h-0 pt-16">
        <h className="font-family-Roboto text-5xl  font-bold ">YAHIA</h>
        <h className="font-family-Roboto text-9xl  font-bold">ELGHONIEMY</h>
      </div>*/}
    </div>
  );
};

export default Func;
