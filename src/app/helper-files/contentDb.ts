import {Content} from "./content-interface";

export const contentList: Content[]=[
    {
        id: 1,
        author: "Brad Bennett",
        title: "Google wants you to turn your iPhone 13 into a Google phone",
        body: "Google has published a new blog post focused on turning your iPhone 13 series device into a Google-powered smartphone.\n" +
            "\n" +
            "If I were Apple CEO Tim Cook right now, I’d be firing interns or breaking weird Apple Pizza trays in the cafeteria over the blatant disrespect.\n" +
            "\n" +
            "The post comes from Google’s head of iOS, Luke Wroblewski, who by all accounts seems like a massive fan of Apple’s products based on his Twitter account, but somehow works for Google CEO Sundar Pichai’s house of AdSense.\n" +
            "\n" +
            "Right off the top, the article explains how Google offers several iOS widgets that show off Google Photos highlights, Google Fit updates, what’s playing on YouTube Music or a quick search on Google Maps. The real slap in the face, though, is that in this screenshot, Google placed Gmail and Google News on the homepage and used a default Apple wallpaper.\n" +
            "\n",
        imgUrl: "https://cdn.mobilesyrup.com/wp-content/uploads/2021/09/google-iphone-scaled.jpg",
        tags: ['Google', ' iPhone', ' Chrome'],
        type: 'News'
    },
    {
        id: 2,
        author: 'Darren MacDonald',
        title: '39 miners stuck underground at Vale\'s Totten Mine in Sudbury, Ont.',
        body: 'SUDBURY - A total of 39 people are stuck underground at Vale\'s Totten Mine in Sudbury, Ont., CTV News has confirmed.\n' +
            'Nick Larochelle, president of Steelworkers Local 6500, told CTV\'s Lyndsay Aelick there are 39 people still underground, including 30 Steelworkers.\n' +
            '\n' +
            'Larochelle said 39 miners went underground Sunday at 7 a.m. to begin their shifts. At 11:30 a.m., an incident occurred that caused damage to the shaft.\n' +
            '\n' +
            'Mine rescue is on site working to get people to the surface, he added, and at this time, there are no injuries.',
        imgUrl: 'https://northernontario.ctvnews.ca/content/dam/ctvnews/en/images/2017/10/19/vale-1-3640306-1632765385825.jpg',
        tags: ['SUDBURY', ' Underground'],
        type: 'News'
    },
    {
        id: 3,
        author: 'Danielle Eugenia Popov',
        title: 'TTC Buses, Streetcars And Stations Just Got A PRESTO Screen Upgrade That Will Load ‘8 Times Faster’ And Display New Information Like Your Remaining Balance',
        body: 'On Saturday, Toronto’s public transportation customers saw a new screen image on all PRESTO card readers on TTC buses and streetcars.\n' +
            '\n' +
            'These new screens plan to show more information regarding your PRESTO payment, including\n' +
            '-How much the customer paid.\n' +
            '-If they are transferring.\n' +
            '-Remaining balance.\n' +
            '-Whether they are paying with a monthly pass.\n' +
            '-If your card is declined, it will indicate the reason why (need to reload funds, if they have already tapped, if there are blocked funds).\n' +
            '-Child cards will emit a three-toned chime and a flashing yellow light.\n' +
            '-Fair Pass Discount Program fare will emit one beep instead of two.\n' +
            '-Machines will load eight times faster.\n' +
            '-Child cards will emit a three-toned chime and a flashing yellow light.',
        imgUrl: 'https://6ix.buzz/wp-content/uploads/2021/09/collage-2-2-780x470.jpg',
        tags: ['Toronto', ' Presto', ' TTC'],
        type: 'Cars'
    },
    {
        id: 4,
        author: 'Gordon Kelly',
        title: 'Google Issues Warning For 2 Billion Chrome Users',
        body: 'Chrome users beware, just days after I warned attacks on Google’s browser are increasing, another critical hack has been confirmed.\n' +
            'Google published the news in a new blog post, where it revealed Chrome’s 11th ‘zero day’ exploit of the year has been found (CVE-2021-37973) and it affects Linux, macOS and Windows users. A zero-day classification means hackers have been able to exploit the flaw before Google could release a fix, which makes it significantly more dangerous than most security flaws. Google confirmed this saying it “is aware that an exploit for CVE-2021-37973 exists in the wild”. ',
        imgUrl: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614f436c4aa4bede117a70e1%2FGoogle--Google-Chrome--Chrome-browser--Chrome-update--Chrome-privacy--Chrome%2F960x0.jpg%3Ffit%3Dscale',
        tags: ['Google', ' Chrome', ' Users'],
        type: 'News'
    },
    {
        id: 5,
        author: 'Codi Wilson',
        title: 'Ontario elementary school closed due to COVID-19 outbreak',
        body: 'TORONTO -- A Courtice elementary school has been shut down today following an outbreak of COVID-19.\n' +
            '\n' +
            'The Peterborough Victoria Northumberland and Clarington Catholic District School Board confirms that at least 11 cases have been tied to Monsignor Leo Cleary Catholic Elementary School since an outbreak was declared at the facility on Sept. 19.\n' +
            '\n' +
            '“Due to the ongoing level of COVID-19 activity within the school and the number of staff and students who have been dismissed, the Peterborough Victoria Northumberland and Clarington Catholic District School Board has made the decision in collaboration with DRHD (the Durham Region Health Department) to close the school to in-person learning effective immediately,” the board said in a letter sent to parents.',
        tags: ['School', ' Elementary', ' Covid'],
        type: 'News'
    },
];
