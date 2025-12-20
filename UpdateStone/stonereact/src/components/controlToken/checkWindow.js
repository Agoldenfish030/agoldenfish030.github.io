import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
window.addEventListener('load', ()=>{
    if(!sessionStorage.length){
        navigate('https://too-much-stone-to-do.vercel.app');
    }
});

window.addEventListener('beforeunload', async()=>{
    const state = sessionStorage.getItem('userState');
    const response = await fetch('https://toomuchstonestodo.onrender.com/userToken', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({state})
    });
});