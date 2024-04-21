const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

function validateUsername(username) {
  const words = username.trim().toLowerCase().split(/\s+/);
  const disallowedWords = ["blue", "green", "yellow", "pink", "orange", "purple", "red", "brown", "black", "gray"];
  
  for (const word of words) {
    if (disallowedWords.includes(word)) {
      return false;
    }
  }

  return true;
}

module.exports = { auth, validateUsername };
