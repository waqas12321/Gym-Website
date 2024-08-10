import React from 'react';

const MembershipPlans = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-white">Membership <span style={{ color: '#b7b7b7' }}>Plans</span></h1>
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
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>Basic Membership</h2>
              <p>Our Basic membership grants access to our state-of-the-art facilities, providing everything you need for a comprehensive workout. From cutting-edge cardio machines to a full range of strength training equipment, our facilities are designed to support your fitness journey.</p>
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
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>Premium Membership</h2>
              <p>Elevate your fitness journey with our Premium membership, offering exclusive access to advanced equipment, personalized training sessions, and additional amenities. This membership is designed for those who seek a more tailored and enhanced workout experience.</p>
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
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>VIP Membership</h2>
              <p>Experience ultimate luxury with our VIP membership, which offers unparalleled access to premium facilities, personalized services, and exclusive perks. This membership is tailored for those who desire the highest level of comfort and attention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;
