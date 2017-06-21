var bio = {
    name: "Tushar Goel",
    role: "Senior Software Developer",
    contacts: {
        mobile: "+91 9999911111",
        email: "goeltushar23@gmail.com",
        github: "goeltushar23",
        twitter: "Goeltushar23",
        location: "Bangalore, India"
    },
    welcomeMessage: "It's not done until it is not LIVE!",
    skills: ["JavaScript", "React", "Python", "MongoDB"],
    biopic: "images/fry.jpg",
    display: function() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        var topContacts = $("#topContacts");
        var formattedContact;
        var formattedContacts = "";

        for (var key in this.contacts) {
            if (this.contacts.hasOwnProperty(key)) {
                formattedContact = HTMLcontactGeneric.replace("%contact%", key);
                formattedContact = formattedContact.replace("%data%", this.contacts[key]);

                formattedContacts += formattedContact;
            }
        }
        topContacts.append(formattedContacts);

        var header = $("#header");
        header.prepend(formattedHeaderRole);
        header.prepend(formattedHeaderName);
        header.append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);

        var skills = $("#skills");
        var formattedSkills = "";
        this.skills.forEach(function(skill) {
            formattedSkills += HTMLskills.replace("%data%", skill);
        });
        skills.append(formattedSkills);
    }
};


var work = {
    jobs: [{
        employer: "Myntra Designs Pvt Ltd",
        title: "Senior Software Developer",
        location: "Bangalore, India",
        dates: "Feb 2015 - June 2017",
        description: "Working on next generation Fashion Automation Tools. Fusing Data together with experience and generating completed automated fashion products. Helping Fashion Production Lifecyle to reduce from 9 month to 1 month. The Products are being sold at high margins."
    }, {
        employer: "Zomato",
        title: "Tech Lead",
        location: "Gurgaon, India",
        dates: "Nov 2013 - Dec 2014",
        description: "Designed ERP Systems, Business tools for restaurants. Mentoring and Leading team for new products. Zomato Collections."
    }],
    display: function() {
        var workExperience = $("#workExperience");
        var workEntry;
        var formattedEmployer, formattedTitle, formattedDates, formmattedLocation, formattedDescription;

        this.jobs.forEach(function(job) {
            workExperience.append(HTMLworkStart);
            workEntry = $(".work-entry:last");

            formattedEmployer = HTMLworkEmployer.replace(/%data%|#/g, job.employer);
            formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            formattedDates = HTMLworkDates.replace("%data%", job.dates);
            formmattedLocation = HTMLworkLocation.replace("%data%", job.location);
            formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            workEntry.append(formattedEmployer + formattedTitle, formattedDates, formmattedLocation, formattedDescription);
        });
    }
};


var project = {
    projects: [{
        title: "Next Generation Fashion Automation Tools",
        dates: "Feb 2015 - June 2017",
        description: "Automating Fashion with help of data and Machine Learning. This will be the first time in fashion industry that the clothes will be designed completely by machines using AI.",
        images: ["http://via.placeholder.com/300x150?text=Project+Image1", "http://via.placeholder.com/300x150?text=Project+Image2"]
    }],
    display: function() {
        var projects = $("#projects");
        var projectEntry;
        var formattedTitle, formattedDates, formattedDescription;
        var formattedImages = "";

        this.projects.forEach(function(project) {
            projects.append(HTMLprojectStart);
            projectEntry = $(".project-entry:last");

            formattedTitle = HTMLprojectTitle.replace(/%data%|#/g, project.title);
            formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            project.images.forEach(function(imageUrl) {
                formattedImages += HTMLprojectImage.replace("%data%", imageUrl);
            });

            projectEntry.append(formattedTitle, formattedDates, formattedDescription, formattedImages);
        });
    }
};


var education = {
    schools: [{
        name: "JIIT",
        location: "Noida, India",
        degree: "Bachelors in Technology",
        majors: "Computer Science",
        dates: "June 2008 - May 2012",
        url: "http://www.jiit.ac.in/"
    }, {
        name: "MPS",
        location: "Meerut, India",
        degree: "Higher Secondary",
        majors: "Information Technology",
        dates: "April 2007 - May 2008",
        url: "http://meerutpublicschool.edu.in/"
    }],
    onlineCourses: [{
        title: "Front End Nanodegree",
        school: "Udacity",
        dates: "June 2017",
        url: "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }, {
        title: "Algorithmic Toolbox",
        school: "Coursera",
        dates: "April 2017",
        url: "https://www.coursera.org/account/accomplishments/verify/F62FGUX39VPB"
    }],
    display: function() {
        var education = $("#education");
        var educationEntry;

        // Schools
        var formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor;
        this.schools.forEach(function(school) {
            education.append(HTMLschoolStart);
            educationEntry = $(".education-entry:last");

            formattedName = HTMLschoolName.replace(/%data%|#/g, school.name);
            formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

            educationEntry.append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        });

        // Online Courses
        var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL;
        education.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(onlineCourse) {
            education.append(HTMLschoolStart);
            educationEntry = $(".education-entry:last");

            formattedOnlineTitle = HTMLonlineTitle.replace(/%data%|#/g, onlineCourse.title);
            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);

            educationEntry.append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
        });

    }
};

var map = {
    display: function() {
        $("#mapDiv").append(googleMap);
    }
};

var letsConnect = {
    display: function() {
        var footerContacts = $("#footerContacts");
        var formattedContact;
        var formattedContacts = "";

        for (var key in bio.contacts) {
            if (bio.contacts.hasOwnProperty(key)) {
                formattedContact = HTMLcontactGeneric.replace("%contact%", key);
                formattedContact = formattedContact.replace("%data%", bio.contacts[key]);

                formattedContacts += formattedContact;
            }
        }
        footerContacts.append(formattedContacts);
    }
};


bio.display();
work.display();
project.display();
education.display();
map.display();
letsConnect.display();
