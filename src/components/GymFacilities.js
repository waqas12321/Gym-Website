import React from 'react';

const GymFacilities = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-white">GYM<span style={{ color: '#b7b7b7' }}> FACILITIES</span></h1>
      <div className="row mt-5">
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body text-white">
              <h1 style={{ fontSize: 25, marginBottom: 20 }}>Cardio Area</h1>
              <p>Our cardio area features state-of-the-art treadmills, elliptical machines, stationary bikes, and rowing machines, all designed for an effective, low-impact workout. Whether you're burning calories or boosting endurance, these machines offer a smooth and comfortable experience tailored to your fitness goals.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body text-white">
              <h1 style={{ fontSize: 25, marginBottom: 20 }}>Strength Training Zone</h1>
              <p>Our strength training zone offers a wide range of equipment, including free weights, machines, and cable stations, perfect for building muscle and enhancing overall strength. Whether you're targeting specific muscle groups or seeking a full-body workout, our equipment.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body text-white">
              <h1 style={{ fontSize: 25, marginBottom: 20 }}>Locker Rooms and Amenities</h1>
              <p>Our spacious locker rooms are equipped with secure lockers, showers, and comfortable changing areas, providing you with a clean and private space to refresh before or after your workout. Designed with your convenience in mind, these facilities ensure a stress-free.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymFacilities;


