// js/utils/formatters.js

export const formatSleepDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
        return `${hours}h${mins.toString().padStart(2, '0')}`;
    } else {
        return `${mins}min`;
    }
};

export const formatDuration = (minutes) => {
    if (!minutes) return '0min';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0 && mins > 0) {
        return `${hours}h${mins}min`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else {
        return `${mins}min`;
    }
};

export const calculateAge = (birthDate) => {
    if (!birthDate) return null;
    
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
};

export const formatAge = (birthDate) => {
    const age = calculateAge(birthDate);
    if (!age) return '';
    
    if (age.years > 0) {
        return `${age.years} an${age.years > 1 ? 's' : ''} et ${age.months} mois`;
    } else if (age.months > 0) {
        return `${age.months} mois et ${age.days} jour${age.days > 1 ? 's' : ''}`;
    } else {
        return `${age.days} jour${age.days > 1 ? 's' : ''}`;
    }
};