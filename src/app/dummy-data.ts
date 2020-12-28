import {Project, Course, Jobs, Volunteer} from './types';

export const projectLists: Project[] = [{
    id: '1',
    name: 'My Portfolio',
    description: 'my personal website',
  completed: 2020,
    image: "portfolio.jpg",
}, {
    id: '2',
    name: 'Sheridan-EDGE',
    description: 'attendance tracking Ipad App',
  completed: 2020,
    image: "sheridan.jpeg",
}, {
  id: '3',
  name: 'MyNavi',
  description: 'a map iOS application',
  completed: 2020,
  image: "map.jpeg",
},{
  id: '3',
  name: 'Expense Tracker',
  description: 'Dollar tracker android mobile app',
  completed: 2020,
  image: "expense.jpg",
}, {
  id: '4',
  name: 'E-commerce ',
  description: 'an e-commerce asp.net web app',
  completed: 2020,
  image: "commerce.png",
}, {
  id: '5',
  name: 'Covid-19',
  description: 'covid data iOS application',
  completed: 2020,
  image: "covid.jpg",
},{
  id: '6',
  name: 'Photo Gallary',
  description: 'an iOS mobile application',
  completed: 2020,
  image: "gallery.jpg",
}, {
  id: '7',
  name: 'My Portfolio',
  description: 'a react web application',
  completed: 2020,
  image: "react.png",
}, {
  id: '8',
  name: 'Event Tracker Application',
  description: 'a java spring boot web application',
  completed: 2020,
  image: "events.jpg",
}];

export const courseLists: Course[] = [{
    id: '1',
    name: 'Java',
    description: 'Programing Language',
  completed: 2019,
  image: "java.png",
}, {
  id: '2',
  name: 'Swift',
  description: 'Programing Language',
  completed: 2020,
  image: "swift.jpg",
}, {
  id: '3',
  name: 'Kotlin',
  description: 'Programing Language',
  completed: 2020,
  image: "kotlin.png",
},{
  id: '4',
  name: 'Big Data',
  description: 'Programing Language',
  completed: 2019,
  image: "Hadoop.png",
}, {
  id: '5',
  name: 'Operating System',
  description: 'Programing Language',
  completed: 2020,
  image: "os.jpg",
}, {
  id: '6',
  name: 'Statistics',
  description: 'Programing Language',
  completed: 2020,
  image: "kotlin.png",
},{
  id: '4',
  name: 'Big Data',
  description: 'Programing Language',
  completed: 2019,
  image: "Hadoop.png",
}, {
  id: '5',
  name: 'Operating System',
  description: 'Programing Language',
  completed: 2020,
  image: "os.jpg",
}, {
  id: '6',
  name: 'Statistics',
  description: 'Programing Language',
  completed: 2020,
  image: "statistics.jpg",
}, {
  id: '7',
  name: 'Data Structure and Algorithm',
  description: 'Data Structure',
  completed: 2019,
  image: "algorithm.jpg",
}, {
  id: '8',
  name: 'ASP.Net',
  description: 'Programing Language',
  completed: 2019,
  image: "asp.png",
}, {
  id: '9',
  name: 'RDBMS',
  description: 'SQL Language',
  completed: 2019,
  image: "rdbms.jpg",
}, {
  id: '10',
  name: 'Angular',
  description: 'A Framework',
  completed: 2018,
  image: "angular.png",
}, {
  id: '11',
  name: 'Network Security',
  description: 'Networking',
  completed: 2020,
  image: "network_security.png",
}, {
  id: '12',
  name: 'Project Management',
  description: 'Management Tool',
  completed: 2019,
  image: "kotlin.png",
}, {
  id: '13',
  name: 'Flutter',
  description: 'A cross platform',
  completed: 2020,
  image: "flutter.png",
}];
export const jobLists: Jobs[] = [{
  id: '1',
  company: 'PointClickCare',
  job_title: 'Software Engineer',
  job_description: `Developed features in Secure Conversation Mobile app using dart, flutter, Swift and Kotlin
• Hands-on experience on iOS and Android Mobile Application, scrum board, Jira, Confluence,
Zeplin, agile methodology, testRail, SourceTree, GitHub, Bitbucket, Intellij, Xcode,
Android Studio, Visual Studio Code etc
• Created test cases on widget tests, unit tests and automation test
• Developed an automation test report using python, javaScript, JQuery, Bootstrap, CSS
• Worked closely with other developers, UX designers, business and systems analysts
• Troubleshot and debugged the existing code to solve the bug
• Practised Scrum/Agile development methodologies
• Learned Flutter and dart with utmost enthusiasm and implemented it in feature developments and writing test cases in mobile application
• Investigated third party libraries and other alternatives while developing features in the app
• Documented new findings and solution for the future use in the company’s confluence page
• Collaborated knowledge and ides with dynamic and innovative senior software engineers to improve and optimize the existing software/application.
• Communicated effectively and professionally in all forms of communication with different layers of team members`,
  start_year:2020,
  start_month: "May",
  end_year: 2020,
  end_month: "August",
  image: "pointclickcare.png",

}, {
  id: '2',
  company: 'Royal Bank of Canada',
  job_title: "Developer",
  job_description: `• Identified bottlenecks or errors or end-to-end transaction level details in application across all tiers and database
• Prepared script for server, app and app specific function to test the health of the application and networks or servers.
• Created dashboards for the team to boost performance and efficiency in tracking down the malfunction of the application by 40%
• Traced all the traffic between a device and the Internet (data requests such as HTTP headers or the GET and POST methods of form-data and response information including HTTP headers and body), test mobile apps and validate their functionality by using Charles Proxy
• Collaborate with team members in designing architectural and functional diagram for team projects using Jira, Slack, Spark, Lucidchart and Confluence
• Used SQL Queries efficiently to find client specific data by filtering time specific criteria and group in log files in database
• Assisted in release of multiple apple and google apps for RBC`,
  start_year:2019,
  start_month: "September",
  end_year: 2019,
  end_month: "December",
  image: "rbc.jpg",

}, {
  id: '3',
  company: 'Royal Bank of Canada',
  job_title: "Developer",
  job_description: ` Identified bottlenecks or errors or end-to-end transaction level details in application across all tiers and database
• Prepared script for server, app and app specific function to test the health of the application and networks or servers.
• Created dashboards for the team to boost performance and efficiency in tracking down the malfunction of the application by 40%
• Traced all the traffic between a device and the Internet (data requests such as HTTP headers or the GET and POST methods of form-data and response information including HTTP headers and body), test mobile apps and validate their functionality by using Charles Proxy
• Collaborate with team members in designing architectural and functional diagram for team projects using Jira, Slack, Spark, Lucidchart and Confluence
• Used SQL Queries efficiently to find client specific data by filtering time specific criteria and group in log files in database
• Assisted in release of multiple apple and google apps for RBC`,
  start_year: 2021,
  start_month: "January",
  end_year: 2020,
  end_month: "April",
  image: "rbc.jpg",

},{
  id: '4',
  company: 'Sheridan College',
  job_title: "PAL Leader",
  job_description: "dummy record",
  start_year: 2020,
  start_month: "September",
  end_year: 2020,
  image: "sheridan.jpg",
  end_month: "December",

}, {
  id: '5',
  company: 'Royal Bank of Canada',
  job_title: 'RBC Student Ambassdor',
  job_description: `• Identified bottlenecks or errors or end-to-end transaction level details in application across all tiers and database
• Prepared script for server, app and app specific function to test the health of the application and networks or servers.
• Created dashboards for the team to boost performance and efficiency in tracking down the malfunction of the application by 40%
• Traced all the traffic between a device and the Internet (data requests such as HTTP headers or the GET and POST methods of form-data and response information including HTTP headers and body), test mobile apps and validate their functionality by using Charles Proxy
• Collaborate with team members in designing architectural and functional diagram for team projects using Jira, Slack, Spark, Lucidchart and Confluence
• Used SQL Queries efficiently to find client specific data by filtering time specific criteria and group in log files in database
• Assisted in release of multiple apple and google apps for RBC`,
  start_year:2019,
  start_month: "September",
  end_year: 2019,
  end_month: "December",
  image: "rbc.jpg",

}];
export const volunteerLists: Volunteer[] = [{
  id:'1',
  organization: 'RBC',
  event:'Hackathon',
  description: '',
  start_year: 2019,
  end_year: 2020,
  start_month: "September",
  end_month: "December",
  image:'rbc.jpg',

},{
  id:'2',
  organization: 'Canadian Tire',
  event:'Hackathon',
  description: '',
  start_year: 2019,
  end_year: 2020,
  start_month: "September",
  end_month: "December",
  image:'canadian_tire.jpeg',

},{
  id:'3',
  organization: 'RBC',
  event:'Hackathon',
  description: '',
  start_year: 2019,
  end_year: 2020,
  start_month: "September",
  end_month: "December",
  image:'rbc.jpg',

},{
  id:'4',
  organization: 'Canada Learing Code',
  event:'Facilitaion in Centential Seconday School',
  description: '',
  start_year: 2019,
  end_year: 2020,
  start_month: "September",
  end_month: "December",
  image:'canada_code.png',

}];
