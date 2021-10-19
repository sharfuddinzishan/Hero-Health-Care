import { useState, useEffect } from 'react';
export const useServicesDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        let url = "../hhcare.json"
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setServices(data.Services))
    }, [])
    return [services, setServices]
}
