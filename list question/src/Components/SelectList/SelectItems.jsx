import React, { useContext } from "react";
import { selectedList } from "./Context";
import SelectLists from "./SelectLists";

const SelectItems = () => {

    const lists = useContext(selectedList)

    return (
        <div>
            <h1>Selected Items</h1>
            {
                lists.selectList.length > 0 && (
                    lists.selectList.map(list => <SelectLists key={list.id} list={list} />)
                ) 
            }
        </div>
    );
}
 
export default SelectItems;

