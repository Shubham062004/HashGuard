import crypto from 'crypto';

/**
 * Generate SHA-256 hash from simple string or buffer
 * @param {Buffer|String} data 
 * @returns {String} hex hash
 */
export const generateSHA256Hash = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};
