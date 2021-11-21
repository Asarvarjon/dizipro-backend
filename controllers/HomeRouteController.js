module.exports = class HomeRouteController{
    static HomeGetController(req, res, next){
        
        try {
            res.json({
                "OK": true
            })
        } catch (error) {
            next(error)
        }
    }
}