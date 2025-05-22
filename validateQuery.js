export default function validateQuery(req, res, next) {
    let { minCredits, maxCredits } = req.query;

    const parsedMin = parseInt(minCredits);
    const parsedMax = parseInt(maxCredits);

    if (minCredits !== undefined && isNaN(parsedMin)) {
        return res.status(400).json({
            error: "minCredits must be a number."
        });
    }

    if (maxCredits !== undefined && isNaN(parsedMax)) {
        return res.status(400).json({
            error: "maxCredits must be a number."
        });
    }

    if (!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin > parsedMax) {
        return res.status(400).json({
            error: "minCredits cannot be greater than maxCredits."
        });
    }

    next();
}
