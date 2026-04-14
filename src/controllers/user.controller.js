import  {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async(req , res) =>{
    res.status(200).json({
        message: "dekh bhai mein chal gaya tu badiya developer hai"
    })
})


export {registerUser}