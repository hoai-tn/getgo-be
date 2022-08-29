import { Response } from 'express';
import { Request } from 'express';
const bcrypt = require("bcryptjs");
const User = require('../models/user')
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const existingsUser = await User.findOne({ email });
        if (!existingsUser)
            return res.status(404).json({ message: "User doesn't exits" })
        console.log(existingsUser);

        const isCorrectPassword = await bcrypt.compare(password, existingsUser.password);
        if (!isCorrectPassword)
            return res.status(400).json({ message: "Invalid credential" });
        return res.status(200).json({ data: existingsUser })
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "something went wrong" });
    }
}

export const signup = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    try {
        const existingsUser = await User.findOne({ email });

        if (existingsUser)
            return res.status(404).json({ message: "User already exist." })
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, name, password: hashedPassword })

        return res.status(200).json({ data: result })
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "something went wrong" });
    }

}