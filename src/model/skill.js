/**
 * Created by Dymok on 8/15/15.
 */
function Skill() {
    this.name = "";
    this.attachments = [];
}

Skill.prototype.setName = function (newName) {
    this.name = newName;
};

Skill.prototype.addAttachment = function (newAttachment) {
    if (newAttachment instanceof Attachment) {
        this.attachments.push(newAttachment)
    }
};