const User = require("../models/user.model");
const Message = require("../models/message.model");
const clouidnary = require("../lib/cloudinary");

const getUsersForSidebar = async (req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id :{$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar",error.message);
        res.status(500).json({message : "Internal server error"});
    }
}

const getMessages = async (req,res) => {
try {
    const {id:userToChatId} = req.params;

    const myId = req.user._id;

    const messages = await Message.find({
        $or : [
            {senderId : myId,receiverId:userToChatId},
            {senderId:userToChatId,receiverId:myId}
        ]
    });

    res.status(200).json(messages);
} catch (error) {
    console.log("Error in getMessages",error.message);
    res.status(500).json({message : "Internal server error"});
}
}

const sendMessage = async(req,res) =>{
    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;

        const senderId = req.user._id;

        let imageUrl;

        if(image){
            //upload to cloudinary if user sends an image
            const uploadResponse = await cloudinary.uploader.uplaod(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        });

        await newMessage.save();

        //todo : real time functioanlity here .socketio

        res.status(201).json(newMessage);
    } catch (error) {
        cosnole.log("Error in sendMessage contorller",error.message);
        res.status(500).json({message : "Internal server error"});
    }
}


module.exports = {getUsersForSidebar,getMessages,sendMessage};