
import React, { Component } from 'react'
import PaginationHeader from '../../Component/Pagination/PaginationHeader';
import Table from '../../Component/Table/Table';
import {data} from './Data'

export class DataTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            totalItems:data.length,
            currentPage:1,
            itemPerPage:5,
            dataToShow:data.slice(0,5)
            
        }
  
       
    }

    onPageChange=(i)=>{
        this.onDataChange(i,this.state.itemPerPage)
           this.setState({currentPage:i})
    }

    onArrowChange=(change)=>{
        let totalPages=Math.ceil(this.state.totalItems / this.state.itemPerPage)
        if(change=="first"){
            this.onDataChange(1,this.state.itemPerPage)
            this.setState({currentPage:1 })
        }
        if(change=="prev"&&this.state.currentPage>1){
            this.onDataChange(this.state.currentPage-1,this.state.itemPerPage)
            this.setState({currentPage:this.state.currentPage-1 })
        }
        if(change=="next"&& this.state.currentPage<totalPages){
            this.onDataChange(this.state.currentPage+1,this.state.itemPerPage)
            this.setState({currentPage:this.state.currentPage+1 })
        }
        if(change=="last"){
            let lastindex=Math.ceil(this.state.totalItems / this.state.itemPerPage)
            this.onDataChange(lastindex,this.state.itemPerPage)
            this.setState({currentPage: lastindex})
        }
        
        
    }

    ondropdownChange=(item)=>{
        this.onDataChange(1,item)
        this.setState({itemPerPage:item,currentPage:1})
    }

    onInputChange=(current)=>{
       
        let totalPages=Math.ceil(this.state.totalItems / this.state.itemPerPage)
        console.log(current);
        if(current<=totalPages &&current>0){
            console.log("sahista"+current);
            this.onDataChange(current,this.state.itemPerPage)
            this.setState({currentPage:current})
        }
            
    }

    onDataChange = (currpage, itemperpage)=>{

        let startindex= (currpage-1)* itemperpage;
        let endIndex= (currpage-1)* itemperpage +  itemperpage;
        let sliceData= data.slice(startindex,endIndex);
        this.setState({dataToShow: sliceData});
    }

    render() {
        console.log(this.state.dataToShow)
        return (
            <div>
               <PaginationHeader 
                    totalItems={this.state.totalItems}
                    currentPage={this.state.currentPage}
                    itemPerPage={this.state.itemPerPage}
                    onPageChange={this.onPageChange}
                    onArrowChange={this.onArrowChange}
                    ondropdownChange={this.ondropdownChange}
                    onInputChange={this.onInputChange}
                    
                    
                />
                <Table itemsPerPage={this.state.itemPerPage} data={this.state.dataToShow}/>

            </div>
        )
    }
}

export default DataTable
