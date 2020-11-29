import React, { useState, useEffect,useMemo } from 'react'
import './PaginationComponent.css'
import Pagination from 'react-bootstrap/Pagination'

function PaginationComponent({ totalItems, currentPage, itemPerPage,onPageChange,onArrowChange }) {


    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        if (totalItems > 0 && itemPerPage > 0) {
            setTotalPages(Math.ceil(totalItems / itemPerPage))
        }
    }, [totalItems, itemPerPage])

  

   const pagesItem= useMemo(() =>{
    let paginationItem = [];
    for (let i = 1; i <= totalPages; i++) {
     console.log("i am inside")
        console.log(currentPage)
        paginationItem.push(<Pagination.Item key ={i} active={i==currentPage} onClick={()=>{onPageChange(i)}}>
            {i}</Pagination.Item>)

    }
     return paginationItem
   } ,[totalPages,currentPage])

   

    return (
        <div>
            <Pagination>
                <Pagination.First onClick={()=>onArrowChange("first")}/>
                <Pagination.Prev onClick={()=>onArrowChange("prev")}/>
                {pagesItem}
                <Pagination.Next onClick={()=>onArrowChange("next")}/>
                <Pagination.Last onClick={()=>onArrowChange("last")} />
            </Pagination>
        </div>
    )
}

export default PaginationComponent
