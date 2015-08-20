/**
 * Created by Dymok on 8/15/15.
 */
function Skill() {
    this.name = "";
    this.attachments = [];
    this.level = "";
    this.childrens = [];
    this.parents = [];
}

Skill.prototype.setName = function (newName) {
    this.name = newName;
};

Skill.prototype.addAttachment = function (newAttachment) {
    if (newAttachment instanceof Attachment) {
        this.attachments.push(newAttachment)
    }
};

Skill.getPossibleLevels = function(){
    return [
        'new','basic','intermediate','advanced','expert'
    ];
};

Skill.prototype.setLevel = function(level){
    var possibleLevels = Skill.getPossibleLevels();
    if(possibleLevels.indexOf(level) != -1)
        this.level = level;
    else
        this.level = "";
};

Skill.prototype.addChildren = function(childSkill){
    if(childSkill instanceof Skill )
        this.childrens.push(childSkill);
};

Skill.prototype.addParent = function(parentSkill){
    if(parentSkill instanceof Skill )
        this.parents.push(parentSkill);
};