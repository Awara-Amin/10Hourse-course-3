import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   // div or section or article all are alright Lovee
//   return (
//     <div>
//       <h1>Hi babay</h1>
//       <h2>Hi babay</h2>
//     </div>
//   );
// }

function Greeting() {
  // div or section or article all are alright Lovee
  return (
    <section>
      <h1>Hi babay</h1>
      <h2>Hi babay</h2>
    </section>
  );
}

//  or like that <> LOVE
// function Greeting() {
//   // div or section or article all are alright Lovee
//   return (
//     <>
//       <h1>Hi babay</h1>
//       <h2>Hi babay</h2>
//     </>
//   );
// }
//  this is another way
// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
