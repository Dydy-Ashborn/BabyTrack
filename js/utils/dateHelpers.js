// js/utils/dateHelpers.js

export const getDayStart = (date) => {
    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    return dayStart;
};

export const getDayEnd = (date) => {
    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999);
    return dayEnd;
};

export const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
};

export const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
};

export const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

export const formatDateTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

export const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });
};