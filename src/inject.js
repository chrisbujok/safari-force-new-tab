import { onForceBegin, onForceDown } from './listeners';

document.addEventListener('webkitmouseforcewillbegin', onForceBegin);
document.addEventListener('webkitmouseforcedown', onForceDown);
