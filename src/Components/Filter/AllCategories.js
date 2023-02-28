import Filter from "./Filter"



const AllCategories =()=>{
    return(
        <div className="categories">
            {/* <div className="question">
            <h2>What kind of sweets do you like to order?</h2>
            </div> */}
            <div className="choose">
          {['FAVORITES','CAKE','PIE','ICE-CREAM','CROISSANT','CREPE','ALL'].map (category=> <Filter key={category} category={category}/>)}
          </div>
        </div>
    )
}


export default AllCategories