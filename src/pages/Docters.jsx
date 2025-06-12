import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const specialities = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist"
  ];

  useEffect(() => {
    if (speciality) {
      const filtered = doctors.filter(
        (doc) =>
          doc.speciality.toLowerCase().trim() === speciality.toLowerCase().trim()
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality]);

  const handleSpecialityClick = (spec) => {
    const selected = spec.toLowerCase().trim();
    const current = speciality?.toLowerCase().trim();

    if (selected === current) {
      navigate('/doctors'); // reset filter
    } else {
      navigate(`/doctors/${encodeURIComponent(spec)}`);
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <p className="text-xl font-semibold mb-6 text-blue-700">
        Browse through the doctors' specialists.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Specialities Sidebar */}
        <div className="md:w-1/4 space-y-4 text-gray-700 font-medium">
          {specialities.map((spec, index) => {
            const isActive = speciality?.toLowerCase().trim() === spec.toLowerCase().trim();
            return (
              <p
                key={index}
                className={`cursor-pointer transition hover:text-blue-500 ${
                  isActive ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => handleSpecialityClick(spec)}
              >
                {spec}
              </p>
            );
          })}
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${doctor._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md bg-white"
              >
                <img
                  src={doctor.image}
                  alt={`${doctor.name}'s profile`}
                  className="bg-blue-50 w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p>Available</p>
                  </div>
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm text-gray-600">{doctor.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No doctors available for this specialty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
