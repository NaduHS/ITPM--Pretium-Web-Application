import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody ,MDBBtn} from 'mdb-react-ui-kit';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

import '../Styles/PdfStyle.css';

export default function pdf() {
  return (
    <MDBTable className='caption-top'>
      <caption><h1>List of Events...</h1></caption>
      <MDBTableHead>
        <tr>
          <th scope='col'><b>Index</b></th>
          <th scope='col'><b>Category</b></th>
          <th scope='col'><b>Groom's Name</b></th>
          <th scope='col'><b>Bride's Name</b></th>
          <th scope='col'>Phone</th>
          <th scope='col'><b>Tool(s)</b></th>
          <th scope='col'><b>Date</b></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        {/* <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
      </MDBTableBody>

      <MDBBtn className="Download-btn col-md-12"><h5>Download Report</h5></MDBBtn>
    </MDBTable>

    
  );
}