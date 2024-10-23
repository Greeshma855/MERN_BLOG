export const signup = async(req, res) =>
{
    const { username,email,password} = req.body;
    if(!username || !email || !password || username==="" || password===""|| email==="")
    {
        return
    }

    
    
    res.json({message: 'API is working!'});
    console.log(req.body);
}