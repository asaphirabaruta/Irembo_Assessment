import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    otherNames: '',
    surname: '',
    nationality: '',
    quantity: 0,
    productDesc:'',
    phoneNumber:'',
    email: '',
    location: '',
    weight:'',
    companyName:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/service', formData);
      console.log(response);
      if (response.status == 200) {
        console.log('Form data submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="container mt-3">
      <form className="was-validated" onSubmit={handleSubmit}>
      <div className="card">

        <div class="card-header">
          Business Owner Details
        </div>

        <div className='card-body'>
          <h6 className="card-title">Business Owner Details</h6>          
          <div className="row mb-3">
            <div className="col">
              <label class="form-label">Applicant citizenship</label>
              <select class="form-select" required>
                <option value="">Select citizenship</option>
                <option value="1">Rwandan</option>
                <option value="2">Foreigner</option>
              </select>
            </div> 
            <div className="col">
              <label class="form-label">Identification document number</label>
              <input type="text" class="form-control" id="IDN" />
            </div>
            <div className="col"></div>
            
          </div>

          <div className="row mb-3">
            <div className="col">
              <label class="form-label">Other names</label>
              <input type="text" class="form-control" id="otherNames" value={formData.otherNames} onChange={handleChange} required/>
            </div>
            <div className="col">
              <label class="form-label">Surname</label>
              <input type="text" class="form-control" id="surname" value={formData.surname} onChange={handleChange} required/>
            </div>
            <div className="col">
              <label class="form-label">Nationality</label>
              <input type="email" class="form-control" id="nationality" value={formData.nationality} onChange={handleChange} required/>
            </div>
            
          </div>

          <div className="row mb-3">
            <div className="col">
              <label class="form-label">Phone Number</label>
              <input type="phone" class="form-control" placeholder="Enter phone number" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            </div>
            <div className="col">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control" placeholder='Enter email address' id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="col"></div>
            
          </div>
          <h6 class="card-title">Business Owner Address</h6>
          <div class="row mb-3">
              <div className="col">
                <label class="form-label">Location</label>
                <input type="location" class="form-control" id="location" value={formData.location} onChange={handleChange} required/>
              </div>
              <div className="col"></div>
              <div className="col"></div>
          </div>
        </div>

      </div>

      {/* Card 2 */}

      <div className="card mt-3">

        <div class="card-header">
        Business Details
        </div>

        <div className='card-body'>
          <h6 class="card-title">Business Details</h6>          
          <div className="row mb-3">
            <div className="col">
              <label class="form-label">Business type</label>
              <select class="form-select" required>
                <option selected>Business Type</option>
                <option value="1">Retailer</option>
                <option value="2">Wholesale</option>
                <option value="3">Manufacturer</option>
              </select>
            </div>
            <div className="col">
              <label class="form-label">Company name</label>
              <input type="text" class="form-control" placeholder="Enter company name" id="companyName" value={formData.companyName} onChange={handleChange} required/>
            </div>
            <div className="col"></div>
          </div>

          <div className="row mb-3">
            <div className="col">
                <label class="form-label">TIN number</label>
                <input type="number" class="form-control" placeholder="Enter TIN number" id="TIN" value={formData.surname} onChange={handleChange}required />
            </div>
            <div className="col">
              <label class="form-label">Registration date</label>
              <input type="date" class="form-control" placeholder="Select date" value={formData.surname} onChange={handleChange} id="regDate" />
            </div>
            <div className="col"></div>
          </div>

          <h6 class="card-title">Business Address</h6>
          <div class="row mb-3">
            <div className="col">
              <label class="form-label">Location</label>
              <input type="location" class="form-control" placeholder="District: Enter district" id="district" value={formData.surname} onChange={handleChange} required/>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            
          </div>
        </div>
        
      </div>

      {/* Card 3 */}
      <div className="card mt-3">

        <div class="card-header">
        Product Information
        </div>

        <div className='card-body'>
          <h6 class="card-title">Importation details</h6>          
          <div class="row mb-3">
            <div className="col">
              <label class="form-label">Purpose of importation</label>
              <select class="form-select" required>
                <option selected>the purpose of importation</option>
                <option value="1">Direct sale</option>
                <option value="2">Personal use</option>
                <option value="3">Trial use</option>
                <option value="4">Other</option>
              </select>
            </div>
            <div className="col">
            <label class="form-label">Specify purpose of importation</label>
              <input type="text" class="form-control" id="purpose" value={formData.surname} onChange={handleChange} required/>
            </div>
            <div className="col"></div>           
              
          </div>
          <h6 class="card-title">Product details</h6>
          <div class="row mb-3">
            <div className="col">
              <label class="form-label">Product category</label>
              <select class="form-select" required>
                <option selected>product category</option>
                <option value="1">General purpose</option>
                <option value="2">Construction materials</option>
                <option value="3">Chemicals</option>
              </select>
            </div>
            <div className="col">
              <label class="form-label">Weight(kg)</label>
              <input type="number" class="form-control" id="weight" value={formData.weight} onChange={handleChange} />
            </div>
            <div className="col"></div>
            
          </div>

          <div class="row mb-3">
            <div className="col">
              <label class="form-label">Unit of measurement</label> 
              <select class="form-select" required>
                <option selected>Enter unit of measurement</option>
                <option value="1">Kgs</option>
                <option value="2">Tonnes</option>
              </select>
            </div>
            <div className="col">
              <label class="form-label">Quantity of product(s)</label>
              <input type="number" class="form-control" id="quantity" placeholder='Enter quantity' value={formData.quantity} onChange={handleChange} required/>
            </div>
            <div className="col"></div>
            
          </div>

          <div class="row mb-3">
            <div className="col-8">
              <label class="form-label">Description of products</label>
              <textarea class="form-control" id="productDesc" value={formData.productDesc} onChange={handleChange} required/>
              <div class="invalid-feedback">
                Please enter a message in the textarea.
              </div>
            </div>
            <div className="col"></div>
            
          </div>
        </div>
        
      </div>

      <input className="btn btn-primary mt-3 mb-3" type='submit'/>
      </form>
    </div>
    
  );
}

export default App;
