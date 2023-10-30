const socket = io();
const fetchData = (url, callback) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong");
        }

        return res.json();
    })
    .then(callback)
    .catch(err)
}

socket.on("error", (errorMessage) => {
    window.location.href = "https://online-chess-game-production.up.railway.app/games?error=" + errorMessage
})
 
 

