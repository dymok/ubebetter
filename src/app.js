/**
 * Created by Dymok on 8/15/15.
 */
$(document).ready(function() {

    $('#new-skill').submit(function() {

        var nameEl = $(this).find('#skill-name');
        var skillName =nameEl.val();

        var newSkill = new Skill();
        newSkill.setName(skillName);

        skills.push(newSkill);

        renderSkills();


        nameEl.val('');
        return false;
    });

    skills = [];
    var skill1 = new Skill();

    skills.push(skill1);

    skill1.setName('Hey Bro');

    skill1.addAttachment(new Attachment('Brothers band'));




    var skill2 = new Skill();

    skills.push(skill2);

    skill2.setName('Sister');

    skill2.addAttachment(new Attachment('hey ho'));

    console.log(skills);
});

function renderSkills() {

    var html = '<ul>';

    for (var i = 0; i < skills.length; i++) {
        var sk = skills[i];

        html += '<li>' + sk.name + '</li>';
    }

    html += '</ul>';

    $('.skills-list').html(html);
}