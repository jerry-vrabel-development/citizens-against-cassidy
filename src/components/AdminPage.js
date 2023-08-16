import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Adjust the path to your Supabase client setup

const AdminPage = () => {
  const navigate = useNavigate();

  // Function to check if the user has an admin role
  const isAdmin = () => {
    const user = supabase.auth.user();
    return user && user.role === 'admin';
  };

  // Redirect to the login page if the user is not an admin
  useEffect(() => {
    if (!isAdmin()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard. Here you can manage users, content, and more.</p>
      {/* Add any admin-specific features or links here */}
    </div>
  );
};

export default AdminPage;
