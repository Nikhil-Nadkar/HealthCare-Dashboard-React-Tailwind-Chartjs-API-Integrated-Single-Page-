import React from 'react'
// images
import threedots from '../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'

const PatientCard = ({img, name, gender, age, user, updateData}) => {
    return(
        <div onClick={() => updateData(user)} className='flex items-center justify-between py-4 hover:bg-[#D8FCF7]'>
            <div className='flex gap-3'>
                <div className='h-12 w-12'>
                    <img src={img}></img>
                </div>
                <div>
                    <h1 className='text-sm font-bold text-themeblack mb-1'>{name}</h1>
                    <h1 className='text-sm font-regular text-[#707070]'>{gender}, {age}</h1>
                </div>
            </div>
            <div>
                <img src={threedots}></img>
            </div>
        </div>
    )
}

export default PatientCard;

