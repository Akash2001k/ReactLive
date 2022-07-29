import React from "react";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="co" style={{ display: "flex" }}>
        <h1 style={{ padding:"2px 13px",color: "white", margin: "3% 3% 3%", fontWeight: "550",width:"25%",background:"rgba(0, 0, 0, 0.35)",borderRadius:"6px"}}>
          ABOUT US
        </h1>
        <a className="back" href="/"></a>
      </div>
      <h2 style={{ color: "white", margin: "0% 3% 0", fontWeight: "550" }}>
        Designers learn coding concepts
      </h2>
      <p style={{ color: "white", margin: "0.8% 3% 2% 3%" }}>
        Web designers had to hand off design specs and visual elements to
        developers who then turn those elements into code. But as Webflow turns
        designs into code, the designer can be the developer. There need not be
        handoff at all. Or developers can quickly check the output of the code.
        Such arrangements enable designers to get more done because they no
        longer have to wait on developers. And developers get their time back
        knowing that designers can handle some of the simpler issues.
      </p>
      <h2 style={{ color: "white", margin: "0% 3% 0", fontWeight: "550" }}>
        Web designer vs. web developer: What lies in the future
      </h2>
      <p style={{ color: "white", margin: "0.8% 3% 2% 3%" }}>
        Web designers had to hand off design specs and visual elements to
        developers who then turn those elements into code. But as Webflow turns
        designs into code, the designer can be the developer. There need not be
        handoff at all. Or developers can quickly check the output of the code.
        Such arrangements enable designers to get more done because they no
        longer have to wait on developers. And developers get their time back
        knowing that designers can handle some of the simpler issues.
        <br />
        And what if, eventually, the jobs of designers and developers converge,
        and we end up with a hybrid role of “builders”? Other disciplines could
        then be brought to the forefront of projects. For instance, a
        telepsychiatry app could have a psychiatrist in charge of the build,
        with builders supporting the plan. Or an economist could lead the
        development of a lending product with the help of builders. As no-code
        technology evolves, so will many professions. Nontechnical users will be
        able to self-service tasks that previously required specialists.
        Creating digital experiences will only continue to get easier, which is
        why curiosity and adaptability will continue to be a distinguishing
        skill among professionals in all fields. And in such an environment,
        designers will have to evolve as well.
      </p>
      <hr style={{color:"white"}}></hr>
      <div className="icon" >
      <a className="insta" href="/instagram.com"></a>
      <a className="fb" href="/facebook.com"></a>
      <a className="twit" href="/twitter.com"></a>
      </div>
    </div>
  );
}
