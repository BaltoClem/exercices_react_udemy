import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Tutorials = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <div className='container'>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill custom-icon flex-shrink-0 me-2" style={{ width: '20px', height: '20px' }} viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.980-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <div>
                    An example alert with an icon
                </div>
            </div>
        </div>
    )
}

export default Tutorials;