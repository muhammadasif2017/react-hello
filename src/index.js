import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

// function Hello() {
//   return <span>Hello</span>
// }

// function World() {
//   return <span>World</span>
// }

// function HelloWorld() {
//   return (
//     <div>
//       <Hello /> <World />
//     </div>
//   );
// }
// function NameCells() {
//   return (
//     <React.Fragment>
//       <td>First Name</td>
//       <td>Last Name</td>
//     </React.Fragment>
//   );
// }

// function ValidIndicator() {
//   const isValid = false;
//   return (
//     <span>{ isValid ? 'valid' : 'not valid'}</span>
//   )
// }

function ValidIndicator() {
  const isValid = false;
  return (
    <span>
      {/* here is a comment */}
      { isValid && 'valid'}
      { !isValid && 'not valid'}
    </span>
  )
}
ReactDOM.render(
  <ValidIndicator />, document.querySelector("#root")
  );
