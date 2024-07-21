const logout = async(req,res)=>{
    res.status(200).json({message:"Logout successful"})
}

module.exports = logout