const env = 'development';
export const isProduction = env === 'production';
export const apiEndpoint = env ? 'http://localhost:3000' : 'https://';
