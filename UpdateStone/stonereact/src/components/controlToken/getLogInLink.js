const logInLink = async()=>{
    const response = await fetch("https://toomuchstonestodo.onrender.com/logInLink");
    const link = await response.json();
    window.location.href = link.reLink;
}

export default logInLink;