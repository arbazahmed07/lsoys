import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { id } = useParams(); // Get the profile id from the URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        setProfile(response.data);
      } catch (err) {
        setError("Error fetching profile details");
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{profile.user?.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{profile.user?.email}</h6>
          <p className="card-text">
            <strong>Location:</strong> {profile.location}
          </p>
          <p className="card-text">
            <strong>Travel Date:</strong>{" "}
            {new Date(profile.travelDate).toLocaleDateString()}
          </p>
          <p className="card-text">
            <strong>Gender:</strong> {profile.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
