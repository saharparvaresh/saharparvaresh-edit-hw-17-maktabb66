// import React, { createContext, useState } from "react";
// import Lists from "./Components/SelectList/AllList";
// import AllItems from "./Components/SelectList/AllItems";
// import SelectItems from "./Components/SelectList/SelectItems";



// export const selectedList = createContext([]);

// function App() {

//   const [selectList, setSelectList] = useState([])

//   const changeCheck = (Index) => {
//     Lists.map(lists => {
//       if (lists.id === Index + 1) {
//         if (lists.check) {
//           lists.check = false;
//           setSelectList(selectList.filter(v => v.id !== Index + 1))
//         } else {
//           lists.check = true
//           setSelectList([...selectList, lists])
//         }
//       }
//     })
//   }

//   return (

//     <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//       <AllItems changeCheck={changeCheck} />
//       <selectedList.Provider value={selectList}>
//         <SelectItems />
//       </selectedList.Provider>
//     </div>
//   )
// }


















import React from "react";
import AllItems from "./Components/SelectList/AllItems";
import Context from "./Components/SelectList/Context";
import SelectItems from "./Components/SelectList/SelectItems";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Context>
        <AllItems />
        <SelectItems />
      </Context>
    </div>
  )
}

export default App;



















// import React from "react";
// import axios from "axios";
// import Form from "./Components/Form/Form";

// function App() {
  
//   return (
//     <>
//       <Form />
//     </>
//   )
// }

// export default App;