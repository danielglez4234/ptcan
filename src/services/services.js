import axios from "axios";

const { REACT_APP_PTCAN_IP, REACT_APP_PTCAN_PORT } = process.env;
const urlPattern = `${REACT_APP_PTCAN_IP}:${REACT_APP_PTCAN_PORT}/scidb/rest`;

/**
 * Headers for the request
 */
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

/**
 * Get query with filters 
 * @async
 * @axios_type GET
 * @example http://calp-vwebrepo:8082/scidb/rest/reductions/download/453862
 */
export const getReductionResults = async (pagination, payload) => {
    const res = await axios.post(`${urlPattern}/reductions${pagination}`, payload, {headers: headers})
    return res.data
}

/**
 * Get query by id
 * @async
 * @axios_type GET
 * @param {number} id 
 * @example http://calp-vwebrepo:8082/scidb/rest/reductions/download/453862
 */
export const getResultJSONById = async (id) => {
    const res = await axios.get(`${urlPattern}/reductions/download/${id}`, {header: headers})
    return res.data
}