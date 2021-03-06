
export const projects = [
    {
        id: '5',
        name: 'Food Ordering App',
        demo: "https://garrettsfood.herokuapp.com/",
        repo: 'https://github.com/GarrettArhSmith/food-ordering',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express', "Token Authentication"],
        thumbnail: 'https://images.pexels.com/photos/5920631/pexels-photo-5920631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        content: [
            {
                tag: 'p',
                text: `The app is designed for use by three different kinds of users: admins (delivery business owners), restaurant owners, and customers. Admins have access to all the tools they need to run the business and manage users.`
            },
            {
                tag: 'p',
                text: `Restaurant owners can create, view and manage their restaurants. They can create different "menus" for each restaurant, and add new items to those menus. They can also see all the orders that have come in for that restaurant.`
            },
            {
                tag: 'p',
                text: `Customers can view all available restaurants, and select which items they want to add to their cart. Items from only one restaurant can be added at a time. They can view what's currently in their cart and submit the order.`
            },
        ]
    },
    {
        id: '6',
        name: 'Rock the Vote',
        demo: 'https://r-t-v.herokuapp.com/',
        repo: 'https://github.com/GarrettArhSmith/rock-the-vote',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express', "Token Authentication"],
        thumbnail: 'https://images.pexels.com/photos/6257070/pexels-photo-6257070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        content: [
            {
                tag: 'p',
                text: `Rock the vote is a platform for civic engagement. Users make posts, comment on those posts, and upvote and downvote both posts and comments. The platform focuses on political discussion and allows users to express their views and discuss different topics.`
            },
            {
                tag: 'p',
                text: `Though I built this as a V School assignment, I based the design and the voting system on reddit, and I think if I continued to work on the project, I would build it out as a reddit clone.`
            },
        ],
    },
    {
        id: '3',
        name: 'Weather App',
        demo: 'https://gsmithweather.surge.sh/',
        repo: 'https://github.com/GarrettArhSmith/assignments/tree/master/mod4/react/weather',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'React Router', 'REST API'],
        thumbnail: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        content: [
            {
                tag: 'p',
                text: `The weather app was an app I made for a V School assignment. I created the app using React and fetched weather data from an API with axios. React Router was used for routing.`
            },
            {
                tag: 'p',
                text: `Users can search for weather data by location, and see the current weather. You can also select different time frames for forecasts, and save locations to the sidebar for easy access. Saved locations are stored in local storage so that they persist through a refresh. The Hourly forecast includes the probability of precipitation and wind speed.`
            },
        ],
    },
    {
        id: '1',
        name: 'Instant Messaging App',
        demo: 'https://react-fire-chat.surge.sh/',
        repo: 'https://github.com/GarrettArhSmith/react-fire-chat',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'Firebase'],
        thumbnail: '/reactfirechat-thumbnail.jpg',
        content: [
            {
                tag: 'p',
                text: `This is an app I made to get an introduction to Firebase. I was working on an experience project after completing the V School curriculum, and we had decided to go with Firebase for the backend. As part of the V School curriculum we learned MongoDB and Express so I wasn't familiar with Firebase. I decided I needed some practice, and voilà! React-Fire-Chat was born.`
            },
            {
                tag: 'p',
                text: `The front-end of this app was (rather quickly) put together in React, and the back-end using Firebase, hence the url. While I love MongoDB and Express and all the freedoms you get with writing your own back-end, I thoroughly enjoyed using Firebase on this project. Everything was just so darn easy to set up, and Google authentication is a delight. I will definitely be revisiting Firebase in my future projects.`
            },
        ],
    },
    {
        id: '2',
        name: 'Student Progress Visualizations',
        demo: 'https://just-a-dashboard.herokuapp.com/',
        repo: 'https://github.com/GarrettArhSmith/dashboard',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'Airtable API'],
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        content: [
            {
                tag: 'h5',
                text: `Some Backstory...`
            },
            {
                tag: 'p',
                text: `The Student Progress Visualizations project is an unfinished and evolving project. It started as an internal tool at V School, the bootcamp I graduated from and worked as a TA for. The project evolved so much, at least as far as planning, it took a while for it to get anywhere. There's still not much to it, but I have plans to build out a full-fledged dashboard. I started the project myself with Material UI and designed it for TAs to better track students' progress through the course and keep standup attendance. Later, I joined with some fellow TAs and students to restart and make a bigger tool to be used for many positions behind the scenes at V School. So I built out the dashboard in Material UI again, and later decided to scratch MUI and design it from scratch. Eventually, it was decided to cut the V School project short to allow TAs to focus more attention on student interactions.`
            },
            {
                tag: 'p',
                text: `The dashboard in it's current state has an app bar, a collapsible side drawer, and the main content area featuring some cards that will likely showcase some data/charts. Some basic JWT authentication is in place, with a separate auth page for sign in and sign up. When the user is logged in, the app bar features the user's initials in a clean little bubble that will open an options dropdown when clicked. It's unclear to me what, if anything, this project will become, but I enjoy working on it.`
            },
        ],
    },
    {
        id: '4',
        name: 'Anonymous Forum',
        demo: 'https://group-forum.herokuapp.com',
        repo: 'https://github.com/GarrettArhSmith/group-forum',
        tech: ['HTML', 'CSS', 'Javascript', 'React', 'MongoDB', 'Express'],
        thumbnail: '/anonymousforum-thumbnail.jpeg',
        content: [
            {
                tag: 'p',
                text: `The anonymous forum was the first group project I worked on at V School. I worked on it with two other developers, and we decided to build a sort of forum. The project, however, was built before the curriculum introduced authentication. So we just built out the app as an anonymous forum where anyone can edit anything, and you don't know who posted what. Though the forum lacks that crucial feature, I still learned a lot while working on this project. It was my introduction to working with git on a team, and to MongoDB and Express.`
            },
            {
                tag: 'p',
                text: `The app has full CRUD functionality. There are three categories users can make posts in. Users can also edit and delete posts. My personal favorite feature is that posts maintain their whitespace when submit, allowing for the positioning of text and the ability to make some fun ascii art.`
            },
        ]
    },
]