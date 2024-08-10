import React from 'react';

const Improvements = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-white">Improvements</h1>
      <div className="row mt-5">
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: '#B7B7B7',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body" style={{ color: 'black' }}>
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>Enhanced Facilities</h2>
              <p>Our improved facilities now include the latest in fitness technology, ensuring that you have access to the best equipment available. Experience a more dynamic workout environment designed to elevate your fitness journey.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: '#B7B7B7',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body" style={{ color: 'black' }}>
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>Personalized Training Programs</h2>
              <p>Take advantage of our newly designed personalized training programs tailored to meet your specific fitness goals. Our experienced trainers will work with you to create a regimen that maximizes your potential and keeps you motivated.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card border-white rounded-0"
            style={{
              backgroundColor: '#B7B7B7',
              border: '1px solid white',
              height: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div className="card-body" style={{ color: 'black' }}>
              <h2 className="card-title" style={{ fontSize: 25, marginBottom: 20 }}>Wellness and Nutrition Support</h2>
              <p>As part of our commitment to holistic health, we now offer enhanced wellness and nutrition support. Access workshops and one-on-one consultations to learn how to nourish your body and mind for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvements;
