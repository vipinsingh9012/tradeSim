import { useEffect, useRef } from 'react';

const useWebSocket = (url, onMessage) => {
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        socketRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onMessage(data);
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socketRef.current.close();
        };
    }, [url, onMessage]);

    return socketRef.current;
};

export default useWebSocket;