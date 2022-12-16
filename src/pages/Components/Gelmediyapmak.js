import React from 'react';

class Otrobotka extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }
    callAPI(){
        fetch('http://192.168.12.206:8000/verify/').then((response)=> response.json()
        ).then((gelmedi)=>{
           
            console.log(gelmedi)
            this.setState({list:gelmedi})
        })
     }    
    render(){
        let tb_data = this.state.list.map((item)=>{
            return(
               
               <tr key={item.id}>
                  <td>{item.student.name}</td>
                  <td>{item.subject.name}</td>
                  <td>
                     <button className={this.state.isActive? "btn btn-success":"btn btn-danger"} onClick={()=>this.setState({isActive:false}) }>{ this.state.isActive ? 'geldi':'gelmedi'}</button>
                  </td>
                  <td>
                     <button className={this.state.isActive? "btn btn-success":"btn btn-danger"} onClick={()=>this.setState({isActive:false}) }>{ this.state.isActive ? 'geldi':'gelmedi'}</button>
                  </td>
                  <td>
                     <button className={this.state.isActive? "btn btn-success":"btn btn-danger"} onClick={()=>this.setState({isActive:false}) }>{ this.state.isActive ? 'geldi':'gelmedi'}</button>
                  </td>
                </tr>
            )
        })     
    {
        return(
            <div className="HeaderText1 container">
               <h3 className="HeaderText1">Gelmediler</h3>
               
               <table className="table table-striped bg-[#F8F8FA]"> 
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dersi</th>                     
                        <th>Dekan</th>
                        <th>Mugallym</th>
                        <th>Kafedra</th>
                    </tr>
                   </thead>
                   <tbody >
                      {tb_data}  
                   </tbody>
               </table>
            </div>
        )
    }
   }
}

export default Otrobotka