import run from "./geminiApi.js";
import constants from "./utils/constants.js";
import helper from "./utils/helper.js";

const controller = async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await run(prompt);
        return helper.returnTrueResponse(
            req,
            res,
            constants.CONST_RESP_CODE_OK,
            response
        )
    } catch (error) {
        return helper.returnFalseResponse(req, res, constants.CONST_RESP_CODE_INTERNAL_SERVER_ERROR, error.message);
    }
};

export default controller;