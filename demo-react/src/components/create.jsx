import { useState } from 'react'
import axios from 'axios'
import React, {Component} from 'react'

function create() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [phoneNo, setPhone] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        phone_no: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = async () => {
        console.log(name, subject, phoneNo);

        const response = await fetch('http://10.43.25.96:5000/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            
          });
          const result = await response.json();
          console.log(JSON.stringify(formData));
          console.log(result);
    };

    return (
            <div>
                <form action="#" method="get">
                    <label>Name</label>
                    <input type="text" name="name" id="name" value={formData.name} placeholder="Enter Name" onChange={handleChange}
                        // onChange={(e) =>
                        //     setName(e.target.value)
                        // }
                    />

                    <label>Subject</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} placeholder="Enter Subject" onChange={handleChange}
                        // onChange={(e) =>
                        //     setSubject(e.target.value)
                        // }
                    />

                    <label >Phone No.</label>
                    <input type="phone" name="phone_no" id="phone_no" value={formData.phoneNo} placeholder="Enter Subject" onChange={handleChange}
                        // onChange={(e) =>
                        //     setSubject(e.target.value)
                        // }
                    />
                    
                    <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}> Submit </button>
                </form>

            </div>
    );
  }
  
  export default create