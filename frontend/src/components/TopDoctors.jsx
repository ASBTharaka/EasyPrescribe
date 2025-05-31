import React from 'react'
import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={()=>navigate(`/appoinment/${item._id}`)}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md bg-white'
                    >
                        <img
                            className='bg-blue-50 w-full h-48 object-cover'
                            src={item.image}
                            alt={`${item.name}'s profile`}
                        />
                        <div className='p-4 space-y-2'>
                            <div className='flex items-center gap-2 text-sm text-green-600'>
                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                <p>Available</p>
                            </div>
                            <p className='text-lg font-semibold'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.speciality}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}}className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-all'>
                                More
                            </button>
        </div>
    )
}

export default TopDoctors
