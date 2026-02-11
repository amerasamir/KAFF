import React, { useEffect } from 'react';

const Notification = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="notification-toast animate__animated animate__fadeInRight"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 9999,
                background: 'rgba(231, 209, 146, 0.95)',
                color: '#0a0a0a',
                padding: '1rem 2rem',
                borderRadius: '0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                letterSpacing: '2px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                borderLeft: '4px solid #0a0a0a'
            }}>
            {message}
        </div>
    );
};

export default Notification;
