import { useState, useEffect } from 'react';
export const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        let url = "./hhcare.json"
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setServices(data.Services))
    }, [])
    return [services, setServices]
}
