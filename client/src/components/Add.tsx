import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function Add() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState(0);
    const [postalCode, setPostalCode] = useState(0);
    const [city, setCity] = useState("");
    const [startTime, setStartTime] = useState("");
    const [specificDate, setSpecificDate] = useState("");
    const [weekday, setWeekday] = useState("");
    const [period, setPeriod] = useState("");
    const [occurence, setOccurence] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSubmit = (input: React.FormEvent<HTMLFormElement>) => {
        input.preventDefault();
        axios.post('/event/add', {title, description})
        .then(response => response.data)
        .catch(error => error)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setTitle(input.target.value)}
                />

                <label>Description</label>
                <input 
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setDescription(input.target.value)}
                />

                <label>Categories</label>
                <input 
                
                />
                <label>Upload event Picture</label>

                <label>Street name</label>
                <input
                type="text"
                id="street"
                name="street"
                value={street}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setStreet(input.target.value)}
                />

                <label>House number</label>
                <input
                type="number"
                id="houseNumber"
                name="houseNumber"
                value={houseNumber}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setHouseNumber(input.target.value)}
                />

                <label>Postal Code</label>
                <input
                type="number"
                id="postalCode"
                name="postalCode"
                value={postalCode}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setPostalCode(input.target.value)}
                />

                <label>City</label>
                <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setCity(input.target.value)}
                />

                <label>Start time</label>
                <input
                type="time"
                id="startTime"
                name="startTime"
                value={startTime}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setStartTime(input.target.value)}
                />

                <label>Duration</label>
                <input
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setDuration(input.target.value)}
                />

                <label>Specific date</label>
                <input
                type="date"
                id="specificDate"
                name="specificDate"
                value={specificDate}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setSpecificDate(input.target.value)}
                />

                <label>How often does it happen?</label>
                <input
                type="text"
                id="period"
                name="period"
                value={period}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setPeriod(input.target.value)}
                />

                <label>When does it happen?</label>
                <input
                type="text"
                id="weekday"
                name="weekday"
                value={weekday}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setWeekday(input.target.value)}
                />

                <label>How many times does it happen?</label>
                <input
                type="number"
                id="occurence"
                name="occurence"
                value={occurence}
                onChange={(input: React.ChangeEvent<HTMLInputElement>) => setOccurence(input.target.value)}
                />

                <button type="submit">Add Event</button>
            </form>
        </div>
    )
}
