$(document).ready(function(){
    /* All Qoutes In Array */
    const quotes = [{
        quote: `“Be yourself; everyone else is already taken.” <br>
        ― Oscar Wilde`,
        },
        {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me” <br>
        ― Marilyn Monroe`,
        },
        {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
        ― Bernard M. Baruch`,
        },
        {
        quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” <br>
        ― William W. Purkey`,
        },
        {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br>
        ― Dr. Seuss`,
        },
        {
        quote: `“Be the change that you wish to see in the world.” <br>
        ― Mahatma Gandhi`,
        },
        {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.” <br>
        ― Robert Frost`,
        },
        {
        quote: `“It is better to be hated for what you are than to be loved for what you are not.” <br>
        ― Andre Gide`,
        },
        {
        quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” <br>
        ― Ralph Waldo Emerson`,
        },
        {
        quote: `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” <br>
        ― H. Jackson Brown`,
        },
        {
        quote: `“You only live once, but if you do it right, once is enough.” <br>
        ― Mae West`,
        },
        {
        quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” <br>
        ― J.K. Rowling`,
        },
        {
        quote: `“A room without books is like a body without a soul.”<br>
        ― Marcus Tullius Cicero`,
        },
    ]

    /* Append Qoute In HTML Element When Click Button */
    $(".new-qoute").click(function(){
        let randomQoute = Math.floor(Math.random() * (quotes.length) )
        $(".parent-qoute").css("display", "block")
        document.getElementById("qouteDisplay").innerHTML = quotes[randomQoute].quote
        $(".remove").css("opacity","1")
    });

    /* Remove Qoute When Click On Remove Button*/
    $(".remove").click(function(){
        $(".parent-qoute").slideUp("slow");
        $(".remove").css("opacity","0")
    });

    /* Add Data Hours In Post */
    let date = new Date()
    let timeDate = document.getElementById("date")
    timeDate.innerHTML = `${date.getHours()}h`


    /* Dark Mood */
    const root_theme = document.querySelector(":root");
    $(".sun").click(function(){
        $(".moon").css("display","block");
        $(".sun").css("display","none");      
        $("body").addClass("dark").removeClass("light");
        root_theme.style.setProperty('--text-black', '#fff');
        root_theme.style.setProperty('--text-white', '#000');
        root_theme.style.setProperty('--hover-color', '#333');
    });
    $(".moon").click(function(){
        $(".sun").css("display","block");
        $(".moon").css("display","none");      
        $("body").addClass("light").removeClass("dark");  
        root_theme.style.setProperty('--text-black', '#000');
        root_theme.style.setProperty('--text-white', '#fff');
        root_theme.style.setProperty('--hover-color', '#eee');
    })

})