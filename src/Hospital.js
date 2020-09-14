import React,{ useState ,Component }from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';
// import ReactDOM from "react-dom";

class Contact extends Component
{

    constructor()
    {
        super()
        this.state={
            loding:false,
            sum:{},
            reg:[],
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            this.setState({
            loading:false,sum:data.data.summary,reg:data.data.regional})
        // console.log("abc",this.state.cont);
    })
    }
    // componentDidMount(){
    //     this.setState({loading:true})
    //     fetch("https://api.rootnet.in/covid19-in/notifications")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         this.setState({
    //         loading:false,notf:data.data.notificationsy})
    //     console.log("abc",this.state.notf);
    // })
    // }
    // const attr = this.state.char.map(data => <div>{data.loc}</div>)
    //     const num = this.state.char.map(data => <div>{data.loc}</div>)
    render(){
        
        return(
            <div className="but">

            <div className="box2">
              <p className="total-customers">Rural hospitals</p>
              <br/>
              {this.state.sum.ruralHospitals}
            </div>
            <div className="box2">
              <p className="total-customers">Rural Beds</p>
              <br/>
              {this.state.sum.ruralBeds}
            </div>
            <div className="box2">
              <p className="total-customers">Urban hospitals</p>
              <br/>
              {this.state.sum.urbanHospitals}
            </div>
            <div className="box2">
              <p className="total-customers">Urban Beds</p>
              <br/>
              {this.state.sum.urbanBeds}
            </div>
            <div className="box2">
              <p className="total-customers">Total Hospitals</p>
              <br/>
              {this.state.sum.totalHospitals}
            </div>
            <div className="box2">
              <p className="total-customers">Total Beds</p>
              <br/>
              {this.state.sum.totalBeds}
            </div>
            
            
            <div className="container">
            
            <table className="table table-striped">
            <thead className="thead-dark">
        

            <tr>
                <th scope="col">S.No</th>
                <th scope="col">State Name</th>
                <th scope="col">Rural Hospitals</th>
                <th scope="col">Rural Beds</th>
                <th scope="col">Urban Hospitals</th>
                <th scope="col">Urban Beds</th>
                <th scope="col">Total Hospitals</th>
                <th scope="col">Total Beds(State Wise)</th>

            </tr>
        </thead>
        <tbody>
        {this.state.reg.map((data,index) => (<tr>
            <th scope="row">
                {index+1}
            </th>
            <td>
                {data.state}
            </td>
            <td>
                {data.ruralHospitals}
            </td>
            <td>
                {data.ruralBeds}
            </td>
            <td>
                {data.urbanHospitals}
            </td>
            <td>
                {data.urbanBeds}
            </td>
            <td>
                {data.totalHospitals}
            </td>
            <td>
                {data.totalBeds}
            </td>
        </tr>))}
        
        </tbody>
      </table>
           
      </div>
            </div>
          )
    }
        
}

 
export default Contact;