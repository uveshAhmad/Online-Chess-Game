// exports.getRegisterPage = (req, res) => {
//     if(req.cookies.token){
//          return res.render("/")
//     }
//     return res.redirect("auth/register"  , {authorized:false})
// }
//     exports.getLoginPage = (req, res) => {
//         if(req.cookies.token){
//             return res.redirect("/")
//         }
    
//         res.render("auth/login" , {authorized:false})
//     }

//     exports.getLobbyPage = (req, res) => {
//         if(!req.cookies.token){
//             return res.redirect("/login")
//         }
    
//         res.render("lobby" ,  {authorized:true});
//     }
    
//     exports.getGamesPage=(req , res)=>{
//         if(!req.cookies.token){
//             return res.render("/login")
//         }
//         res.render("games",  {authorized:true})
//     }

//     exports.getRoomPage = (req , res)=>{
//         if(!req.cookies.token){
//             return res.render("/login")
//         }
//         res.render("room",  {authorized:true})
//     }



exports.getRegisterPage = (req, res) => {
    if (req.cookies.token) {
        return res.redirect("/");
    }
    // Pass the authorized status as part of your response data.
    res.render("auth/register", { authorized: false });
}

exports.getLoginPage = (req, res) => {
    if (req.cookies.token) {
        return res.redirect("/");
    }
    // Pass the authorized status as part of your response data.
    res.render("auth/login", { authorized: false });
}

exports.getLobbyPage = (req, res) => {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    // Pass the authorized status as part of your response data.
    res.render("lobby", { authorized: true });
}

exports.getGamesPage = (req, res) => {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    // Pass the authorized status as part of your response data.
    res.render("games", { authorized: true });
}

exports.getRoomPage = (req, res) => {
    if (!req.cookies.token) {
        return res.redirect("/login");
    }
    // Pass the authorized status as part of your response data.
    res.render("room", { authorized: true });
}

exports.getStatsPage = (req, res) => {
    if(!req.cookies.token){
        return res.redirect("/login")
    }

    res.render("stats", {authorized: true});
} 
exports.getPlayedGamesPage = (req, res) => {
    if(!req.cookies.token){
        return res.redirect("/login")
    }

    res.render("stats/playedGames", {authorized: true});
} 


exports.getProfilePage = (req, res) => {
    if(!req.cookies.token){
        return res.redirect("/login")
    }

    res.render("profile", {authorized: true});
}
