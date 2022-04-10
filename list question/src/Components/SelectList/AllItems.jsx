import React, { useContext } from "react";
import Lists from "./AllList";
import PropTypes from 'prop-types';
import { selectedList } from "./Context";

const AllItems = () => {

    const changeCheckContext = useContext(selectedList)

    return (
        <div>
            <h1>All Items</h1>
            {
                Lists.map((list,Index) => {
                    return (
                        <div key={list.id} style={{fontSize : "18px", margin: "5px 0"}}>
                            <input type="checkbox" onChange={()=>changeCheckContext.changeCheck(Index)}/>
                            <span> {list.title} </span>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default AllItems;


AllItems.propTypes = {
    changeCheck: PropTypes.func,
}





