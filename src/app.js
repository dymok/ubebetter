/**
 * Created by Dymok on 8/15/15.
 */
$(document).ready(function() {

    var levelEl = $('#skill-level');
    levelEl.html(createOptions(Skill.getPossibleLevels()));

    $('#new-skill').submit(function() {

        var $this = $(this);
        var nameEl = $this.find('#skill-name');

        var skillName = nameEl.val();

        var newSkill = new Skill();
        newSkill.setName(skillName);
        newSkill.setLevel(levelEl.val().trim());

        skills.push(newSkill);

        renderSkills();


        nameEl.val('');
        levelEl.val('');
        return false;
    });

    skills = [];
    var skill1 = new Skill();

    skills.push(skill1);

    skill1.setName('Hey Bro');
    skill1.setLevel('new');

    skill1.addAttachment(new Attachment('Brothers band'));




    var skill2 = new Skill();

    skills.push(skill2);

    skill2.setName('Sister');
    skill2.setLevel('new');

    skill2.addAttachment(new Attachment('hey ho'));

    console.log(skills);
});

function renderSkills() {

    var html = '<ul>';

    for (var i = 0; i < skills.length; i++) {
        var sk = skills[i];

        html += '<li>' + sk.name + 'on - ' + sk.level + '</li>';
    }

    html += '</ul>';

    $('.skills-list').html(html);
}

function createOptions(array){
    var string;
    array.forEach(function(elem){
        string += '<option>' + elem + '</option>';
    });
    return string;
}