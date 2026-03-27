//Modules
import {
    TYPE_LOG
} from '../constants.js';

function logger312(log, type = TYPE_LOG)
{
    console[type](log);
}

export default logger312;