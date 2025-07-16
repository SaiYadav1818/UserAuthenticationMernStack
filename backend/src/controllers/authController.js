import user from "../model/user.js"
import bcrypt from "bcrypt";

export const register=async (req,res)=>{
    try{
const {email,password}=req.body
console.log("🧾 Received body:", req.body);
const exisiting =await user.findOne({email});
if(exisiting){
    res.status(400).json({msg:"email in use"})
}
const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const userr = new user({ email, passwordHash: hash });
    await userr.save();
if (!email || !password) {
  return res.status(400).json({ msg: "Email and password are required" });
}

   res.status(201).json({ message: "Registered successfully" });

    }
    catch(err){
       console.error(err);
    res.status(500).json({ message: `server error ${err}` });
    }
    
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ ok: false, msg: "Email and password are required" });
    }
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ ok: false, msg: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ ok: false, msg: "Invalid email or password" });
    }
    res.status(200).json({ ok: true, msg: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, msg: `Server error: ${err}` });
  }
};
