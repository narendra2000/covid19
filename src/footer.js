
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    const dark={
        background:"black",
        color:"white"
    }
  return (
    <div>
    <div className="container">
    <footer>
    <table className="table">
    <thead className="thead-dark">
    <tr>
        <th scope="col">Number</th>
        <th scope="col">Toll Free Number</th>
        <th scope="col">Email</th>
        <th scope="col">Social</th>
    </tr>
    </thead>
<tbody >
        <tr className="dark">
            <td>+91-11-23978046</td>
            <td>1075</td>
            <td>ncov2019@gov.in</td>
            <td>Facebook-<a href="https://www.facebook.com/MoHFWIndia">https://www.facebook.com/MoHFWIndia</a><br></br>
            Twitter- <a href="https://twitter.com/MoHFW_INDIA">https://twitter.com/MoHFW_INDIA</a>
            </td>
            
        </tr>

</tbody>
</table>
    
    </footer>
    </div>
        
    </div>
  );
}

export default FooterPage;