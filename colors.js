export const COLORS = {
    primaryBlue: '#6CA2F1', // Header/Card background
    cardGradientStart: '#6CA2F1',
    cardGradientEnd: '#6CA2F1',
    textDark: '#212121',
    textLight: '#757575',
    successBg: '#E8F5E9',
    successText: '#2E7D32',
    pendingBg: '#FFF3E0',
    pendingText: '#EF6C00',
    failedBg: '#FFEBEE',
    failedText: '#C62828',
    white: '#FFFFFF',
    border: '#E0E0E0',
    navBarIcon: '#000',
    dateText: '#212121'
};

export const STATUS_CONFIG = {
    Satisfactory: { bg: COLORS.successBg, text: COLORS.successText, bar: '#4CAF50' },
    Pending: { bg: COLORS.pendingBg, text: COLORS.pendingText, bar: '#FF9800' },
    Failed: { bg: COLORS.failedBg, text: COLORS.failedText, bar: '#F44336' },
};
