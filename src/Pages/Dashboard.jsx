import React, {useState, useEffect} from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import Navbar from '../Components/Navbar'
import PatientCard from '../Components/PatientsCard'
import { data, defaults } from 'autoprefixer';

// images
import searchIcon from '../assets/search_FILL0_wght300_GRAD0_opsz24.svg'
import RespiratoryRate_img from '../assets/respiratory rate.svg'
import Temperature_img from '../assets/temperature.svg'
import HeartRate_img from '../assets/HeartBPM.svg'
import big_profile_img from '../assets/Layer 2@2x.png'
import InsuranceIcon from '../assets/InsuranceIcon.svg'
import MaleIcon from '../assets/MaleIcon.svg'
import FemaleIcon from '../assets/FemaleIcon.svg'
import PhoneIcon from '../assets/PhoneIcon.svg'
import BirthIcon from '../assets/BirthIcon.svg'
import download from '../assets/download.svg'
import { flushSync } from 'react-dom';
// images


export default function Dashboard() {
    const [personslist, setPersonslist] = useState([]); 
    const [selectedPerson, setselectedPerson] = useState();

    useEffect(()=>{
        const username = "coalition";
        const password = "skills-test";
        const credentials = btoa(`${username}:${password}`); 
        fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
            headers: {
            'Authorization': `Basic ${credentials}`, 
            },                                                                      
        })
        .then((res) => res.json())
        .then((data) => {setPersonslist(data);
            setselectedPerson(data[3]);
        })
        
    },[]);


    const handleUpdateData = (person) => {
        setselectedPerson(person); // Update the state with the selected patient's data
      };
     


    //chart property
    defaults.maintainAspectRatio = false;
    defaults.responsive = true;
    //chart property

if(selectedPerson){
    return (
        <div className='container'>
            <Navbar/>
            <div className='grid grid-cols-12 gap-8 m-[18px]'>
                {/* PatientList */}
                <div className='col-span-3 bg-white h-[1054px] rounded-2xl p-[20px] overflow-auto'>
                    <div className='flex justify-between mb-6'>
                        <h1 className='text-2xl font-extrabold'>Patients</h1>
                        <img src={searchIcon}></img>
                    </div>
                      
                    {
                        personslist.map((user, index) => (
                            <PatientCard key={index}
                                img = {user.profile_picture}
                                name = {user.name}
                                gender = {user.gender}
                                age = {user.age}
                                data = {setselectedPerson} 
                                user = {user}
                                updateData={handleUpdateData}
                                
                            />
    
                        ))
                    }
                    
                </div> 
                {/* PatientList */} 


                {/* Chart */}
                <div className='col-span-6 '>
                    <div className='w-full h-[673px]  bg-white rounded-2xl mb-8 p-[20px]'>
                    <h1 className='text-2xl font-extrabold mb-6'>Diagnosis History</h1>
    
                        <div className='w-full h-[320px]  bg-[#F4F0FE] rounded-2xl mb-4 p-4'>
                            
                            <Line className= 'font-manrope' data = {{
                                labels: selectedPerson.diagnosis_history.map((item)=>(item.month)),
                                datasets:[
                                {
                                    label: "systolic",
                                    data: selectedPerson.diagnosis_history.map((item)=>(item.blood_pressure.systolic.value)),
                                    backgroundColor: '#E66FD2',
                                    borderColor: '#E66FD2',
                                    color: "#072635"
                                },
                                {
                                    label: "diastolic",
                                    data: selectedPerson.diagnosis_history.map((item)=>(item.blood_pressure.diastolic.value)),
                                    backgroundColor: '#8C6FE6',
                                    borderColor: '#8C6FE6'
                                }
                                ]
                            }}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Blood Pressure',
                                            align : "start",
                                            font: {
                                                size: 18,
                                                weight: "normal",
                                                color: "#072635"
                                                
                                                }
                                            
                                        }
                                    },
                                    elements: {
                                        line: {
                                            tension: 0.5,
                                        }
                                    }
                                }}
                            />
                        </div>
    
                        <div className='flex gap-[21px]'>
                            <div className='w-[228px] h-[242px] bg-[#E0F3FA] rounded-xl p-4 flex flex-col justify-between'>
                                <div className='h-24 w-24'>
                                    <img src={RespiratoryRate_img}></img>
                                </div>
                                <div>
                                    <h1 className='text-base font-medium text-themeblack'>Respiratory Rate</h1>
                                    <h1 className='text-[30px] font-extrabold text-themeblack'>{selectedPerson.diagnosis_history[0].respiratory_rate.value} bpm</h1>
    
                                </div>
                                <h1 className='text-sm font-regular text-themeblack'>{selectedPerson.diagnosis_history[0].respiratory_rate.levels}</h1>
    
                            </div>
    
                            <div className='w-[228px] h-[242px] bg-[#FFE6E9] rounded-xl p-4 flex flex-col justify-between'>
                                <div className='h-24 w-24'>
                                    <img src={Temperature_img}></img>
                                </div>
                                <div>
                                    <h1 className='text-base font-medium text-themeblack'>Temperature</h1>
                                    <h1 className='text-[30px] font-extrabold text-themeblack'>{selectedPerson.diagnosis_history[0].temperature.value}°F</h1>
                                </div>
                                <h1 className='text-sm font-regular text-themeblack'>{selectedPerson.diagnosis_history[0].temperature.levels}</h1>
    
                            </div>
    
                            <div className='w-[228px] h-[242px]  bg-[#FFE6F1] rounded-xl p-4 flex flex-col justify-between'>
                                <div className='h-24 w-24'>
                                    <img src={HeartRate_img}></img>
                                </div>
                                <div>
                                    <h1 className='text-base font-medium text-themeblack'>Heart Rate</h1>
                                    <h1 className='text-[30px] font-extrabold text-themeblack'>{selectedPerson.diagnosis_history[0].heart_rate.value} bpm</h1>
                                </div>
                                <h1 className='text-sm font-regular text-themeblack'>{selectedPerson.diagnosis_history[0].heart_rate.levels}</h1>
    
                            </div>
                        </div>  
                    </div>
                    {/* Chart */}

                            
                    {/* Diagnostic List */}        
                    <div className='w-full h-[349px]  bg-white rounded-2xl'>
                        <div className="w-full mx-auto p-[20px]">
                        <h1 className='text-2xl font-extrabold mb-[40px] font-themeblack'>Diagnostic List</h1>
                        <div className='h-[200px] overflow-auto'>
                            <table className="min-w-full table-auto bg-white rounded-3xl">
                                <thead>
                                <tr className="bg-gray-100  rounded-full">
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Problem/Diagnosis</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                </tr>
                                </thead>
                                <tbody> 
                                    {
                                    selectedPerson.diagnostic_list.map((item,index) =>(
                                        <tr className="border-b border-[#F6F7F8] hover:bg-gray-50">
                                        <td className="py-4 px-4 text-sm text-gray-800">{item.name}</td>
                                        <td className="py-4 px-4 text-sm text-gray-600">{item.description}</td>
                                        <td className="py-4 px-4 text-sm text-gray-600">{item.status}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        </div>
                            
                    </div>
                    
                </div>
                 {/* Diagnostic List */}       


                {/* profile_details */}                     
                <div className='col-span-3'>
                    <div className='w-full h-auto  bg-white rounded-2xl mb-8 p-[20px]'>
                        <div className='flex flex-col gap-6 justify-center items-center mb-8'>
                            <img className='h-[200px] w-[200px]' src={selectedPerson.profile_picture}></img>
                            <h1 className='text-2xl font-extrabold font-themeblack'>{selectedPerson.name}</h1>
                        </div>
                        

                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4'>
                                <img src={BirthIcon}></img>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-medium font-themeblack'>Date Of Birth</h1>
                                    <h1 className='text-sm font-bold font-themeblack'>{selectedPerson.date_of_birth}</h1>
                                </div>
                            </div>
                            {
                                
                            }
                            <div className='flex gap-4'>
                                {
                                    (selectedPerson.gender === "Male") ? (<img src={MaleIcon}></img>) : (<img src={FemaleIcon}></img>)
                                }
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-medium font-themeblack'>Gender</h1>
                                    <h1 className='text-sm font-bold font-themeblack'>{selectedPerson.gender}</h1>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <img src={PhoneIcon}></img>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-medium font-themeblack'>Contact Info.</h1>
                                    <h1 className='text-sm font-bold font-themeblack'>{selectedPerson.phone_number}</h1>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <img src={PhoneIcon}></img>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-medium font-themeblack'>Emergency Contacts</h1>
                                    <h1 className='text-sm font-bold font-themeblack'>{selectedPerson.emergency_contact}</h1>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <img src={InsuranceIcon}></img>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm font-medium font-themeblack'>Insurance Provider</h1>
                                    <h1 className='text-sm font-bold font-themeblack'>{selectedPerson.insurance_type}</h1>
                                </div>
                            </div>     
                        </div>

                        <div className='flex items-center mt-8'>
                            <button className='bg-[#01F0D0] text-sm font-bold font-themeblack px-12 py-3 rounded-full mx-auto'>Show All Information</button>
                        </div>
                            
                        
                    </div>
                    {/* profile_details */}  


                    {/* Lab Results */}  
                    <div className='w-full h-[310px]  bg-white rounded-2xl p-[20px]'>
                        <h1 className='text-2xl font-extrabold mb-4 font-themeblack'>Lab Results</h1>
                        <div className='h-[220px] overflow-auto'>
                            {
                                selectedPerson.lab_results.map((item,index) =>(
                                    <div className='flex justify-between items-center py-3'>
                                        <h1 className='text-sm font-regular font-themeblack'>{item}</h1>
                                        <img src={download}></img>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    {/* Lab Results */} 


                </div>
    
                
    
            </div>
        </div>
      )
    }
    
}