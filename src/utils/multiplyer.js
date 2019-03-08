import { get } from 'lodash';

/**
 * Multiplyer
 * @param {Number} a 
 * @param {Number} b
 * @return {Number}
 */
export const multiplyer = (a, b) => a * b;


export const first = (arr) => get(arr, '0', null);