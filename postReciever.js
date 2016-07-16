
function postEater(req, res){

    console.log('Got POST req on', req.url);
    console.log(req.body);

    var skills = new SkillData(req.body);

    skills.save();

    res.end()

}


module.exports = postEater;