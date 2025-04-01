import React, { useState, useEffect } from 'react';
import './ReportForm.css';

const ReportForm = () => {
    const [formData, setFormData] = useState({
        location: '',
        description: '',
    });
    const [userLocation, setUserLocation] = useState({
        latitude: null,
        longitude: null,
        area: '',
        city: '',
        country: '',
    });
    const [photos, setPhotos] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileUpload = (e) => {
        const files = e.target.files;
        setPhotos(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('location', formData.location);
        formDataToSend.append('description', formData.description);
        for (let i = 0; i < photos.length; i++) {
            formDataToSend.append('photos', photos[i]);
        }

        try {
            const response = await fetch('http://localhost:5000/reportRoutes', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Report submitted successfully');
                alert('Report submitted successfully');
            } else {
                console.error('Failed to submit report');
            }
        } catch (error) {
            console.error('Error submitting report:', error);
        }
    };

    const redirectToRoboflow = () => {
        window.location.href = 'http://localhost:5000/trash';
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const newUserLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };

                    if (
                        newUserLocation.latitude !== userLocation.latitude ||
                        newUserLocation.longitude !== userLocation.longitude
                    ) {
                        setUserLocation(newUserLocation);

                        const apiKey = 'n0RMtA9kB6L2DvLhegfjM5CPmUbquAjK'; // Replace with your TomTom API key
                        const apiUrl = `https://api.tomtom.com/search/2/reverseGeocode/${newUserLocation.latitude},${newUserLocation.longitude}.json?key=${apiKey}`;

                        try {
                            const response = await fetch(apiUrl);
                            const data = await response.json();

                            if (data.addresses && data.addresses.length > 0) {
                                setUserLocation({
                                    ...newUserLocation,
                                    area: data.addresses[0].address.freeformAddress,
                                    city: data.addresses[0].address.localName,
                                    country: data.addresses[0].address.countryCode,
                                });
                            }
                        } catch (error) {
                            console.error('Error fetching location:', error);
                        }
                    }
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                }
            );
        } else {
            console.error('Geolocation not supported');
        }
    }, [userLocation]);

    return (
        <div className="report-form">
            <h2>Report Illegal Garbage Dumping Site</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={userLocation.area}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="photos">Upload Photos</label>
                    <div className="file-input-container">
                        <label className="file-input-label" htmlFor="photos">
                            Choose File
                        </label>
                        <span className="file-input-name">
                            {photos.length > 0 ? `${photos.length} file(s) selected` : 'No files selected'}
                        </span>
                        <input
                            type="file"
                            name="photos"
                            id="photos"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </div>
                </div>
                <div className="button-group">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={redirectToRoboflow} className="roboflow-btn">
                        Use Roboflow
                    </button>
                </div>
            </form>
            
            {userLocation.latitude !== null && userLocation.longitude !== null && (
                <div className="user-location">
                    <h3>Your Current Location</h3>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                    <p>Area: {userLocation.area}</p>
                    <p>City: {userLocation.city}</p>
                    <p>Country: {userLocation.country}</p>
                </div>
            )}
        </div>
    );
};

export default ReportForm;
