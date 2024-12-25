import React from 'react'

// images
import companyLogo from '../assets/TestLogo.svg'
import home from '../assets/home_FILL0_wght300_GRAD0_opsz24.svg'
import Patients from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import Schedule from '../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import Message from '../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import Transactions from '../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import Profilrpic from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import setting from '../assets/settings_FILL0_wght300_GRAD0_opsz24.svg'
import dots from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg'
// images


export default function 
() {
  return (
    <div className='h-[72px] bg-white m-[18px] rounded-[70px] px-8 flex items-center justify-between'>
        <div>
            <img src={companyLogo}></img>
        </div>

        <div>
            <ul className='flex items-center justify-center gap-14 text-sm font-bold text-themeblack'>
                <li className='flex items-center gap-2'><div>
                        <img src={home}></img>
                    </div>
                    Overview
                </li>
                <li className='flex items-center gap-2 bg-[#01F0D0] rounded-full py-3 px-4'><div>
                        <img src={Patients}></img>
                    </div>
                    Patients
                </li>
                <li className='flex items-center gap-2'><div>
                        <img src={Schedule}></img>
                    </div>
                    Schedule
                </li>
                <li className='flex items-center gap-2'><div>
                        <img src={Message}></img>
                    </div>
                    Message
                </li>
                <li className='flex items-center gap-2'><div>
                        <img src={Transactions}></img>
                    </div>
                    Transactions
                </li>
                
            
            </ul>
        </div>

        <div className='flex gap-3 items-center'>
            <div>
                <img src={Profilrpic}></img>
            </div>
            
            <div>
                <h1 className='text-sm font-bold text-themeblack'>Dr. Jose Simmons</h1>
                <h1 className='text-sm font-regular text-[#707070]'>General Practitioner</h1>
            </div>

            <div className='w-[1px] h-11 bg-[#EDEDED]'></div>

            <div>
                <img src={setting}></img>
            </div>

            <div>
                <img src={dots}></img>
            </div>
        </div>

    </div>
  )
}
