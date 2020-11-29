import React, { Component } from 'react'
import './Pagination.css'

import Form from 'react-bootstrap/Form'
import PaginationComponent from '../PaginationComponent/PaginationComponent'

class PaginationHeader extends Component {

    constructor(props) {
        super(props)
    
    }
    
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          totalItems:50,
    //          currentPage:1,
            
    //     }
    //    this.itemPerPage=5;
       
    // }
    // onPageChange=(i)=>{
    //        this.setState({
    //           currentPage:i    
    //        })
    // }

    // onArrowChange=(change)=>{
    //     if(change=="first"){
    //         this.setState({currentPage:1 })
    //     }
    //     if(change=="prev"){
    //         this.setState({currentPage:this.state.currentPage-1 })
    //     }
    //     if(change=="next"){
    //         this.setState({currentPage:this.state.currentPage+1 })
    //     }
    //     if(change=="last"){
    //         this.setState({currentPage:Math.ceil(this.state.totalItems / this.itemPerPage) })
    //     }
        
        
    // }

    render() {
        console.log("-----------------------------")
        console.log(this.props.totalItems)
       let totalPages= Math.ceil(this.props.totalItems / this.props.itemPerPage)
        return (
            <div className="paging">
                <div>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked
                        />
                        Multi sort
                    </Form>
                    
                </div>
                <div className="clearFilters"><span>x</span> <span>Clear all filters</span></div>
        <div>Results 1 to 5 of {this.props.totalItems}</div>
                <div className="itemPerPage">Items per page<select onChange={(e)=>{e.preventDefault();this.props.ondropdownChange(e.target.value)}}><option value="5">5</option>
                <option value="10">10</option><option value="20">20</option></select></div>
                <div>
              <PaginationComponent totalItems={this.props.totalItems}
                    currentPage={this.props.currentPage}
                    itemPerPage={this.props.itemPerPage}
                    onPageChange={this.props.onPageChange}
                    onArrowChange={this.props.onArrowChange}
               />

                </div>
                <div className="goToPage">Go To Page<input type="text" 
                 onChange={(e)=>{this.props.onInputChange(e.target.value)}}>
                    </input>of {totalPages} </div>
                <span className="">Go {'>'}</span>
            </div>
    
        )
    }
}

export default PaginationHeader
