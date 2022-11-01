import morgan, {StreamOptions} from "morgan";
import config from 'config'
import logger from "../../config/logger";
import { Logger } from "winston";

const stream:StreamOptions = {
    write: (message) => logger.http(message)
        
    
}

const skip = ()=>{
  const env = config.get<string>('env') || 'development'

  return env !== "development"
}

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {stream, skip}
) 
   
export default morganMiddleware;