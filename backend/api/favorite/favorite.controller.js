const favoriteService=require("./favorite.service")

module.exports={
    addFavorite,
    removeFavorite,
    getFavorites
}

async function addFavorite(req,res){
    try {
        const favorite=req.body
        const newFavorite=await favoriteService.add(favorite)
        res.json(newFavorite)
    } catch (error) {
        console.log("favorite.controller-cannot add favorite",error);
        res.send(error)
    }
}

async function removeFavorite(req,res){
    try {
        const favoriteId=req.params.favoriteId
        const removeFavorite=await favoriteService.remove(favoriteId)
        res.json(removeFavorite)
    } catch (error) {
        console.log("favorite.controller-cannot delete favorite",error);
        res.send(error)
    }
}

async function getFavorites(req,res){
    try {
        const allFavorites=await favoriteService.get()
        res.json(allFavorites)
    } catch (error) {
        console.log("favorite.controller-cannot get favorites",error);
        res.send(error)
    }
}