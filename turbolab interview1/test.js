var input1 = [
    {
        node: {
            name: "Elliot Alderson",
            age: "26",
            qualification: "Btech",
            jobTitle: "UI Developer",
            collegeEducation: {
                edges: [
                    {
                        node: {
                            course: "Btech",
                            collegeName: "MITS",
                            year: "2017",
                        },
                    },
                ],
            },
            schoolEducation: {
                edges: [
                    {
                        node: {
                            course: "High School",
                            schoolName: "STPS",
                            year: "2013",
                        },
                    },
                ],
            },
        },
    },
    {
        node: {
            name: "Darlene Alderson",
            age: "32",
            qualification: "MBA",
            jobTitle: "HR Manager",
            collegeEducation: {
                edges: [
                    {
                        node: {
                            course: "MBA",
                            collegeName: "IIM",
                            year: "2018",
                        },
                    },
                ],
            },
            schoolEducation: {
                edges: [
                    {
                        node: {
                            course: "High School",
                            schoolName: "Nirmala High School",
                            year: "2010",
                        },
                    },
                ],
            },
        },
    },
];

var input2 = [
    {
        title: "Name",
        key: "name",
    },
    {
        title: "Age",
        key: "age",
    },
    {
        title: "Qualification",
        key: "qualification",
    },
    {
        title: "Job Title",
        key: "jobTitle",
    },
    {
        title: "College Education",
        key: "collegeEducation",
        children: [
            {
                title: "College",
                key: "education",
                children: [
                    {
                        title: "Course",
                        key: "collegeEducation",
                        dataKey: "course",
                    },
                    {
                        title: "College Name",
                        key: "collegeEducation",
                        dataKey: "collegeName",
                    },
                    {
                        title: " Year",
                        key: "collegeEducation",
                        dataKey: "year",
                    },
                ],
            },
        ],
    },
    {
        title: "School Education",
        key: "schoolEducation",
        children: [
            {
                title: "School",
                key: "education",
                children: [
                    {
                        title: "Course",
                        key: "schoolEducation",
                        dataKey: "course",
                    },
                    {
                        title: "School Name",
                        key: "schoolEducation",
                        dataKey: "schoolName",
                    },
                    {
                        title: "Year",
                        key: "schoolEducation",
                        dataKey: "year",
                    },
                ],
            },
        ],
    },
];

console.log(input1);
console.log(input2);

var result = [];


for(var i=0;i<input2.length;i++) {
    var newObj1 = {
        title: input2[i].title,
    };
    for(var j=0; j<input1.length; j++) {
        debugger
        newObj1["data"+j] = input1[j]["node"][input2[i].key];
    }
    result.push(newObj1);
}

console.log(result);