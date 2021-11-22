module.exports = class ProjectsController{
    static async CreateProjectPostController(req, res, next){
        try {
            console.log(req.files);
        } catch (error) {
            next(error)
        }
    }
}