import React, {useState} from 'react';
import axios from "axios";
import '../Styles/UpdateAlbumStyle.css'

import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

import FormBackground from "../Assets/Add-form-background.png";


function UpdateAlbum(){

        //const [albumId,setAlbumId] = useState("");
        const [category,setCategory] = useState("");
        const [groomName,setGroomName] = useState("");
        const [brideName,setBrideName] = useState("");
        const [phone,setPhone] = useState("");
        const [tool,setTool] = useState("");
        const [date,setDate] = useState("");
        const [description,setDescription] = useState("");
        const [coverImg,setCoverImg] = useState("");
        const [img,setImg] = useState("");
        
        

        // category,
        // groomName,
        // brideName,
        // phone,
        // tool,
        // date,
        // description,
        // coverImg,
        // img
        

        function sendData(e){
            e.preventDefault();//prevent submit 's normal behaviror
            //alert("insert");

            const newAlbum = {
                //albumId,
                category,
                groomName,
                brideName,
                phone,
                tool,
                date,
                description,
                coverImg,
                img,    
                
            }
            
            console.log(newAlbum)

            //pass the parameters to backend
            axios.post("http://localhost:8070/staff/add" , newAlbum).then(() => {
                alert("Album Added")
               
                //setAlbumId("");
                setCategory("");
                setGroomName("");
                setBrideName("");
                setPhone("");
                setTool("");
                setDate("");
                setDescription("");
                setCoverImg("");
                setImg("");

            }).catch((err) => {
                alert(err)
            })
        }



    return(

      
        <div className= 'container'>
              <div><h1>UPDATE ALBUM...</h1></div>

              <div>
                  <a href='#'>
                      <p>My Portfolio {'>'} Weddings {'>'} Update Album</p>
                  </a>
              </div>

        <div className='Form-Background' style={{ backgroundImage: `url(${FormBackground})` }}>

            <form className="Add-Form  col-md-8" onSubmit = { sendData } >

                <label  className="Select-Category" style={{ color: "white" , size: "14px"}}>Select Category</label>
                <MDBDropdown group className='shadow-0'>
                    <MDBDropdownToggle color='link' required >Select Category</MDBDropdownToggle>
                    <MDBDropdownMenu
                        onChange={(e) => {
                            setCategory(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                        }}>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Weddings</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Birthdays</MDBDropdownLink>
                     </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Couple</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Family</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Model</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">Nature</MDBDropdownLink>
                    </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>

                <MDBInput 
                    label={"Groom's Name"} 
                    type='text'
                    className='input'
                    placeholder="Type Groom's Name..." 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast 
                    required
                    onChange={(e) => {
                        setGroomName(e.target.value);
                     }} 
                />
                   

                <MDBInput 
                    label={"Bride's Name" }
                    type='text' 
                    className='input' 
                    placeholder="Type Bride's Name..." 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast 
                    required
                    onChange={(e) => {
                        setBrideName(e.target.value);
                    }}
                />

        
                <MDBInput 
                    label='Phone' 
                    type='number' 
                    className='input' 
                    placeholder="Type Phone Number..." 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast 
                    required
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                />

                <MDBInput 
                    label='Used Tool(s)' 
                    type='text' 
                    className='input' 
                    placeholder="Type Used Tool(s)..." 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast
                    required 
                    onChange={(e) => {
                        setTool(e.target.value);
                    }}
                />

                
                {/* <label  className="Select-Date col-md-2" style={{ color: "white" , size: "14px"}}>Date</label>
                <MDBDropdown group className='shadow-0'>
                    <MDBDropdownToggle color='link' >Select Month</MDBDropdownToggle>
                    <MDBDropdownMenu
                        onChange={(e) => {
                            setDate(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                    }}>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">January</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">February</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">March</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">April</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">May</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">June</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">July</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">August</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">September</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">October</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">November</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">December</MDBDropdownLink>
                    </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>

                <MDBInput 
                    label='Date' 
                    type='number' 
                    className='input col-md-2' 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                />

                <MDBInput 
                    label='Year' 
                    type='number' 
                    className='input col-md-2' 
                    style={{size:'14px'}}
                    size="lg"
                    id='formWhite' contrast 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                /> */}
         
                <MDBTextArea 
                    label='Description' 
                    id='formWhite' contrast 
                    className='input col-md-8' 
                    placeholder="Description" 
                    style={{size:'14px'}}
                    size="lg"
                    rows={4} 
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />

                <label  className="Image-Upload" style={{ color: "white" , size: "14px"}}>Upload Cover Image</label>      
                <MDBInputGroup
                        label='Upload Image' 
                        className='mb-3 col-md-8'
                        size='lg'
                        textAfter='Upload'
                        textTag='label' 
                        placeholder="Upload the cover Image" 
                        style={{size:'14px'}}
                        textProps={{ htmlFor: 'inputGroupFile02' }}
                        required
                >
                <input className='form-control' type='file' id='inputGroupFile02' 
                        onChange={(e) => {
                            setCoverImg(e.target.value);
                        }}
                />
                </MDBInputGroup>

                <label  className="Image-Upload" style={{ color: "white" , size: "14px"}}>Upload Images</label>
                <MDBInputGroup
                        label='Upload Image' 
                        className='mb-3 col-md-8'
                        size='lg'
                        textAfter='Upload'
                        textTag='label' 
                        placeholder="Upload the cover Image" 
                        style={{size:'14px'}}
                        textProps={{ htmlFor: 'inputGroupFile02' }}
                >
                <input className='form-control' type='file' id='inputGroupFile02' 
                        onChange={(e) => {
                            setImg(e.target.value);
                        }}
                />
                </MDBInputGroup>

                <MDBBtn className="Add-btn col-md-12"><h5>Add Staff Member</h5></MDBBtn>
            </form>
        </div>



        </div>

    )

                //emplement Upload 4to and upload education qualifications pdf
    
}

export default UpdateAlbum;