
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



class Gatnashyk extends React.Component {
    constructor(props){
        super(props)
         this.state={
            isActive:true,
            list:[]
         }
         this.callAPI = this.callAPI.bind(this)
         this.callAPI();
    }
    callAPI(){
        fetch('http://192.168.12.91:8000/gelmedi/').then((response)=> response.json()
        ).then((gelmedi)=>{
           
            console.log(gelmedi)
            this.setState({list:gelmedi})
        })
     }    
    render(){
        let tb_data = this.state.list.map((item)=>{
         return(
            
            <tr key={item.id}>
               <td>{item.id}</td>
               <td>{item.student.name}</td>
               <td>
                  <button className={this.state.isActive? "btn btn-success":"btn btn-danger"} onClick={()=>this.setState({isActive:false}) }>{ this.state.isActive ? 'geldi':'gelmedi'}</button>
               </td>
             </tr>
         )
     })     
     return(
            <div className="container  bg-[#DFEFFD]">
              
              <div className="Table1">
               <div className="row ">
                <p className="col-10"> Hello{this.state.list.student}</p>
                <p className="col-2">data</p>
              <div className="HeaderText ">Group number</div>
               </div> 
               <table className="table table-striped bg-[#F8F8FA]"> 
                   <thead> 
                    <tr>
                        <th>Order</th>
                        <th>Name</th>                     
                        <th>Status</th>
                    </tr>
                   </thead>
                   <tbody >
                        {tb_data}    
                </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Gatnashyk