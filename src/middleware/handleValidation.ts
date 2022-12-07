import {Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'
import { nextTick } from 'process'

export const validate = (req:Request, Res:Response, next:NextFunction) =>{

    const errors = validationResult(req)

    if(errors.isEmpty()){
      return next()
    } 

    const extratectErrors: object[] = []

    errors.array().map((err) => extratectErrors.push({[err.param]: err.msg}))

    return Res.status(422).json({
        errors:extratectErrors,  
    })

}