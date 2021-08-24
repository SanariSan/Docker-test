const asyncHandle = (mw) => (req, res, next) => mw(req, res, next).catch((e) => next(e));

export { asyncHandle };
