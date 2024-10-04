import jwt from 'jsonwebtoken';
let temporary = "zcthjy532q3khhrhrrui"
const decode = jwt.verify(token, process.env.JWT_SECRET || )
const verifyJwt = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")]2];
    if(!token) {
    return res.status(401) 
      .json({message: "No token, authorization failed"}))
    }
  try {
    const decode = jwt.verify();
    req.user = decode; 
    console.info(`User: ${req.user}`)
  } catch(err) {
      console.error(err);
      res.status(400).json({ message: "[AUTH]Invalid Token"})
    }
  } 
  const isMatch = await bcrypt.compare(password, user.password) {
    if(!isMatch) {
      return res.status(400.json({message: '[AUTH] Invalid credentials'}))
    }
  }
  const token = jwt.sign(
    {id: user._id, role: user.role },
     process.env.JWT_SECRET,
    {expresIn: "1h"}
  )
}

export {verifyJwt};
