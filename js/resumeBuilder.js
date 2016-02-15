/*
This is empty on purpose! Your code to build the resume will go here.
 */
//TODO: Make a timeline element using D3

var bio = {
    "name": "Michael Gilbertson",
    "role": "Web developer",
    "welcomeMessage": "Welcome to my resume!",
    "contacts": {
        "mobile": "703-343-3735",
        "email": "gilbertsonmg@gmail.com",
        "github": "mgg9xv",
        "twitter": "@MikeyFairPlay",
        "location": "Washington DC"
    },
    "picture": "images/my_picture.jpg",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery","Bootstrap"],
    "display": function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", bio.picture));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if(bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill){
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Accenture Federal Services",
            "title": "Software Developer",
            "location": "Washington DC",
            "dates": "September 2015 - Present",
            "description": "Building a national scheduling system for IN400 applicants"
        },
        {
            "employer": "Agilex Technologies",
            "title": "Software Developer",
            "location": "Chantilly VA",
            "dates": "June 2015 - August 2015",
            "description": "Developing software in an agile environment"
        },
        {
            "employer": "AARP",
            "title": "Audience Engagement Intern",
            "location": "Washington DC",
            "dates": "May 2014 - August 2014",
            "description": "My responsibilities included managing published content within AARP's CMS, developing new strategies for community engagement, and brainstorming ideas about how to increase overall site traffic."
        },
        {
            "employer": "AARP",
            "title": "Product Design Intern",
            "location": "Washington DC",
            "dates": "May 2013 - August 2013",
            "description": "My responsibilities included analyzing and evaluating the accessbility of AARP's website with multiple screen readers and browsers in accordance with WCAG 2.0."
        }
    ],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription= HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "Resume",
            "dates": "February 2016",
            "description": "",
            "images": []
        },
        {
            "title": "Portfolio",
            "dates": "February 2016",
            "description": "",
            "images": []
        }
    ],
    "display": function() {
        this.projects.forEach(function(project){
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(image){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
            });
        });
    }
};

var education = {
    "schools": [
        {
            "name": "University of Virginia",
            "location": "Charlottesville VA",
            "degree": "BS Computer Science",
            "major": "Computer Science",
            "minor": "Studio Art",
            "url": "http://www.virginia.edu",
            "dates": "August 2011 - May 2015"
        },
        {
            "name": "Yorktown High School",
            "location": "Arlington VA",
            "dates": "September 2007 - June 2011",
            "url": "http://www.apsva.us/Domain/2430"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "February 2016 - April 2016",
            "url": "http://www.udacity.com"
        }
    ],
    "display": function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = "";
            if(school.degree !== undefined) {
                formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            }
            $(".education-entry:last").append();$(".education-entry:last").append(formattedName + formattedDegree);
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            if(school.major !== undefined)$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
            $(".education-entry:last").append("<br>");
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course){
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    }
};

function displayWork() {
    bio.display();
    work.display();
    projects.display();
    education.display();
}

displayWork();

$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});


function locationizer(work_obj){
    var locations = [];
    work_obj.jobs.forEach(function(job){
        locations.push(job.location);
    });
    return locations;
}

function inName(name) {
    var names = name.trim().split(" ");
    names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1, names[0].length);
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
