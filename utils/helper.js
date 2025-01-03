import constants from './constants.js';

const returnTrueResponse = async (req, res, statusCode, message, arr, totalCounts) => {
    return res.status(statusCode).json({
        version: {
            current_version: constants.CONST_APP_VERSION,
            major_update: 0,
            minor_update: 0,
            message: "App is Up to Date"
        },
        success: 1,
        message: message,
        data: arr,
        totalCounts: totalCounts
    })
};

const returnFalseResponse = async (req, res, statusCode, message, arr, errorCode) => {
    return res.status(statusCode).json({
        version: {
            current_version: constants.CONST_APP_VERSION,
            major_update: 0,
            minor_update: 0,
            message: "App is Up to Date"
        },
        success: 0,
        message: message,
        data: arr,
        errorCode: errorCode
    })
};

let helper = {
    returnTrueResponse: returnTrueResponse,
    returnFalseResponse: returnFalseResponse
};

export default helper;