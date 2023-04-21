const dbService=require("../../services/db.service")
const utilService=require("../../services/util.service")

module.exports={
    add,
    remove,
    get
}
async function add(favorite){
    try {
        var sqlCmd = `INSERT INTO favorites (\`key\`, \`localCity\`, \`weatherText\`, \`weatherIcon\`, \`temperature\`, \`_id\`)
        VALUES ('${favorite.key}', '${favorite.localCity}', '${favorite.weatherText}', '${favorite.weatherIcon}', '${favorite.temperature}', '${utilService.makeId(5)}')`;
        
        return await dbService.runSQL(sqlCmd)
    } catch (error) {
        console.log("favorite.service-cannot add favorite",error);
    }
}

async function remove(favoriteId){
    try {
        var query = `DELETE FROM favorites WHERE _id = '${favoriteId}'`;
        return await dbService.runSQL(query);
    } catch (error) {
        console.log("favorite.service-cannot remove favorite",error);
    }
}

async function get(){
    try {
        var query = `SELECT * FROM favorites`;

        return await dbService.runSQL(query)
    } catch (error) {
        console.log("favorites.service-cannot get favorites",error);
    }
}