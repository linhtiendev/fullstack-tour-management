import jwt from "jsonwebtoken";

// hàm xác minh token
const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    // check quyền hạn
    if (!token) {
        return res
            .status(401)
            .json({ success: false, message: "You're not authorize" });
    }

    // if token is exist then verify the token (xác minh token tồn tại)
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res
                .status(401)
                .json({ success: false, message: "Token is invalid" });
        }
        req.user = user;
        next(); // don't forget to call next
    });
};

// hàm xác thực user
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === "admin") {
            next();
        } else {
            res.status(401).json({
                success: false,
                message: "You're not authenticated",
            });
        }
    });
};

// hàm xác minh, ủy quyền admin
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === "admin") {
            next();
        } else {
            res.status(401).json({
                success: false,
                message: "You're not authorize",
            });
        }
    });
};
