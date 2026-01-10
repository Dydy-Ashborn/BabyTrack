// js/utils/constants.js

export const ITEMS_PER_PAGE = 10;
export const WARDROBE_ITEMS_PER_PAGE = 20;

export const SIZE_ORDER = [
    'Naissance', 
    '1 mois', 
    '3 mois', 
    '6 mois', 
    '9 mois', 
    '12 mois', 
    '18 mois', 
    '2 ans', 
    '3 ans'
];

export const SIZE_CONFIG = {
    'Naissance': { emoji: '👶', gradient: 'from-blue-400 to-blue-500', bgLight: 'bg-blue-50' },
    '1 mois': { emoji: '🍼', gradient: 'from-cyan-400 to-cyan-500', bgLight: 'bg-cyan-50' },
    '3 mois': { emoji: '🌸', gradient: 'from-teal-400 to-teal-500', bgLight: 'bg-teal-50' },
    '6 mois': { emoji: '🎈', gradient: 'from-green-400 to-green-500', bgLight: 'bg-green-50' },
    '9 mois': { emoji: '🌟', gradient: 'from-yellow-400 to-yellow-500', bgLight: 'bg-yellow-50' },
    '12 mois': { emoji: '🎂', gradient: 'from-orange-400 to-orange-500', bgLight: 'bg-orange-50' },
    '18 mois': { emoji: '🚀', gradient: 'from-red-400 to-red-500', bgLight: 'bg-red-50' },
    '2 ans': { emoji: '🎪', gradient: 'from-pink-400 to-pink-500', bgLight: 'bg-pink-50' },
    '3 ans': { emoji: '🎨', gradient: 'from-purple-400 to-purple-500', bgLight: 'bg-purple-50' }
};

export const TYPE_EMOJI = {
    'Body manche courte': '👕',
    'Body manche longue': '🧥',
    'Pyjama': '🌙',
    'Pantalon': '👖',
    'Pull': '🧶',
    'Gilet': '🦺',
    'Robe': '👗',
    'Gigoteuse': '💤',
    'Chaussettes': '🧦',
    'Bonnet': '🧢',
    'T-shirt manche courte': '👚',
    'T-shirt manche longue': '🎽',
    'Autre': '👔'
};

export const CATEGORY_CONFIG = {
    legumes: { 
        icon: '🥕', 
        gradient: 'from-green-400 to-emerald-500', 
        bgLight: 'bg-green-50', 
        border: 'border-green-300' 
    },
    fruits: { 
        icon: '🍎', 
        gradient: 'from-red-400 to-pink-500', 
        bgLight: 'bg-red-50', 
        border: 'border-red-300' 
    },
    viande: { 
        icon: '🍗', 
        gradient: 'from-purple-400 to-indigo-500', 
        bgLight: 'bg-purple-50', 
        border: 'border-purple-300' 
    },
    cereales: { 
        icon: '🌾', 
        gradient: 'from-yellow-400 to-amber-500', 
        bgLight: 'bg-yellow-50', 
        border: 'border-yellow-300' 
    }
};

export const REACTION_EMOJI = {
    adore: '😍',
    aime: '😊',
    neutre: '😐',
    bof: '😕',
    refuse: '😖'
};

export const REACTION_LABELS = {
    adore: 'Adoré',
    aime: 'Aimé',
    neutre: 'Neutre',
    bof: 'Bof',
    refuse: 'Refusé'
};