import React, { useState } from 'react';

// Define a UserProfileCard component
function UserProfile(props) {
  // Destructure the props object to get the user data
  const { name, email, bio } = props;

  // Initialize a state variable to track the "Show Details" button
  const [showDetails, setShowDetails] = useState(false);

  // Define a function to toggle the "Show Details" button
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Render the UserProfileCard component
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '20px',
        width: '300px',
        margin: '20px auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginTop: '0' }}>{name}</h2>
      <p style={{ fontSize: '16px' }}>Email: {email}</p>
      <button
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            //backgroundColor: '#4CAF50',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
        }}
        onClick={toggleDetails}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '10px',
          }}
        >
          <p style={{ fontSize: '16px' }}>Bio: {bio}</p>
        </div>
      )}
    </div>
  );
}

// Define a parent component to render the UserProfileCard
function UserProfileCard() {
  // Define some sample user data
  const userData = {
    name: 'Yusuf Yusuf Babatunde',
    email: 'john.doe@example.com',
    bio: 'This is a Ysuf Yusuf Babatunde bio.',
  };

  // Render the UserProfileCard component
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <h1>User Profile Card</h1>
      <UserProfile {...userData} />
    </div>
  );
}

// Export the UserProfileCard component
export default UserProfileCard;
