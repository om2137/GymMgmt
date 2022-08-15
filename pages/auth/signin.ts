import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie';
const axios = require('axios').default;

const KEY = 'secret'


export default function(req: NextApiRequest, res: NextApiResponse) {
    
    const { username, password } = req.body
    
    if(username === 'admin' && password === 'admin'){
        const token = sign(
        { 
            username : username,

         }, KEY);
         const seralised = serialize("OursiteJWT",token,{
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7,
            path: '/login',

         });
         res.setHeader('Set-Cookie', seralised);
         res.status(200).json({
                message: 'Login Successful',
         });
    }
    else{
        res.json({
            message: 'Login Failed',
        });
    }

}
