import React, {useState} from 'react';
import axios from "axios";


function AddAlbum(){

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
              <div><h1>Add New Album</h1></div>

            <form onSubmit = { sendData } >

            {/* <div className="">
                <label for="id" className="form-label">Staff Member ID</label>
                <input type="text" className="" id="id" placeholder="Enter Staff Member ID" 
                onChange={(e) => {
                    setStaffId(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                }}/>
                </div> */}

                <div className="">
                    <label className="form-label">Select Category</label>
                    <input type="text" className="" placeholder="Select Category" 
                    onChange={(e) => {
                        setCategory(e.target.value);//typing category(value) assign to category state through the setName function(setter) 
                    }}/>
                </div>
            
                <div className="">
                    <label  className="form-label">Groom's Name</label>
                    <input type="text" className=""  placeholder="Type Groom's Name"
                    onChange={(e) => {
                        setGroomName(e.target.value);
                    }}/>
                </div>

                <div className="">
                    <label  className="form-label">Bride's Name</label>
                    <input type="text" className="" placeholder="Type Bride's Name"
                    onChange={(e) => {
                        setBrideName(e.target.value);
                    }}/>
                </div>

    
                <div className="">
                    <label  className="form-label">Phone</label>
                    <input type="text" className="" placeholder='Type Your Phone Number'
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}/>
                </div>

                <div className="">
                    <label  className="form-label">Used Tool(s)</label>
                    <input type="text" className="" id="date" 
                    onChange={(e) => {
                        setTool(e.target.value);
                    }}/>
                </div>

                <div className="">
                    <label  className="form-label">Select Date</label>
                    <input type="text" className="" 
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}/>
                </div>

                <div className="">
                    <label  className="form-label">Description</label>
                    <input type="text" className="" id="phone" placeholder="Type or Paste your description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}/>
                </div>

                <div className="">
                    <label className="form-label">Upload Image</label>
                    <input type="text" className="" id="coverImg" placeholder="Upload the cover Image"
                    onChange={(e) => {
                        setCoverImg(e.target.value);
                    }}/>
                </div>

        
                <div className="">
                    <label className="form-label">Upload Images</label>
                    <input type="email" className="" id="email" aria-describedby="emailHelp" placeholder="Upload Multiple immahws"
                    onChange={(e) => {
                        setImg(e.target.value);
                    }}/>
                    <div id="emailHelp" className="form-text"></div>
                </div>


                {/* <div className="">
                <label for="validationCustom03" class="form-label">Password</label>
                <input type="text" class="" id="validationCustom03" required placeholder="..........." 
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <div class="invalid-feedback">
                </div>
                </div> */}

                
                <button type="submit" className="btn btn-primary">Add Staff Member</button>
            </form>

        </div>

    )

                //emplement Upload 4to and upload education qualifications pdf
    
}

export default AddAlbum;