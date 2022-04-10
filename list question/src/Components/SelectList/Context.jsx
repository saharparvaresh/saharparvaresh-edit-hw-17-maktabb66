
import React, { createContext, useState } from "react";
import AllItems from "./AllItems";
import Lists from "./AllList";
import SelectItems from "./SelectItems";


export const selectedList = createContext({});


const Context = (props) => {
    const [selectList, setSelectList] = useState([])

    const changeCheck = (Index) => {
        Lists.map(lists => {
            if (lists.id === Index + 1) {
                if (lists.check) {
                    lists.check = false;
                    setSelectList(selectList.filter(v => v.id !== Index + 1))
                } else {
                    lists.check = true
                    setSelectList([...selectList, lists])
                }
            }
        })
    }

    return (
        <selectedList.Provider value={{selectList, changeCheck}}>
            {props.children}
        </selectedList.Provider>
    );
}
 
export default Context;


