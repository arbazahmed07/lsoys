import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [gender, setGender] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("https://lsoys-2ob7.onrender.com/api/profile/", {
        params: { location, travelDate, gender },
      });
      setProfiles(response.data);
    } catch (err) {
      setError("Error fetching profiles");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div
        className="bg-white rounded shadow-lg p-4 mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Find Travel Buddies</h3>
        <form onSubmit={handleSubmit}>
          {/* Location Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where do you want to go?"
            />
          </div>

          {/* Travel Dates Input */}
          <div className="mb-3">
            <label className="form-label fw-bold">Travel Dates</label>
            <input
              type="date"
              className="form-control"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>

          {/* Gender Dropdown */}
          <div className="mb-3">
            <label className="form-label fw-bold">Gender</label>
            <select
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Any Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary fw-bold py-2"
              disabled={loading}
            >
              <i className="bi bi-search me-2"></i>
              {loading ? "Finding..." : "Find Travel Buddies"}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {/* Display Profiles */}
        <div className="mt-4">
          {profiles.length > 0 ? (
            <div className="row">
              {profiles.map((profile) => (
                <div className="col-md-4 mb-4" key={profile._id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{profile.user?.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {profile.user?.email}
                      </h6>
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
              ))}
            </div>
          ) : (
            !loading && <div className="text-center mt-3">No profiles found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
