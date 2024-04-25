function change_text1(){
    document.getElementById("number").innerHTML="EP.01"
    document.getElementById("title").innerHTML="A Running Start..."
    document.getElementById("tag").innerHTML="/Communications/  (4th-year)"
    document.getElementById("description-text").innerHTML="Welcome to a coffee chat with your hosts, Tara and Jessica, as they navigate their senior year journey at Carnegie Mellon's School of Design. Join them in unraveling the concept of ongoingness, reflecting on the inception of this podcast, and sharing insights into their self-driven projects. They discuss the often solitary nature of being a designer amidst the complexities of today's world (tldr: design is lonely). If you're entrenched in the design community and find yourself in our vicinity, we invite you to join us on the podcast. Reach out to commastudio.contact@gmail.com for inquiries and potential collaborations."
    document.getElementById("references").innerHTML="idk"
}
function change_text2(){
    document.getElementById("number").innerHTML="EP.02"
    document.getElementById("title").innerHTML="Is Design an Argument?"
    document.getElementById("tag").innerHTML="/Communications/  (4th-year)"
    document.getElementById("description-text").innerHTML="Join us for an insightful conversation with Thien Le, a designer specializing in the environment track and boasting a double major in history. Currently, Thien is immersed in projects centered on archiving 'viral' moments from American awards shows into a tangible book, while also pioneering improved channels for communicating DEI issues within the School of Design. In this episode, we explore the fascinating intersection of history and design, delving into Thien's perspective of design as a powerful argument— a manifestation of values, a form of commentary, and a framing tool. We tackle the complexities of maintaining integrity to one's values while navigating the demands of entering the workforce and sustaining a livelihood."
    document.getElementById("references").innerHTML="idk"
}
function change_text3(){
    document.getElementById("number").innerHTML="EP.03"
    document.getElementById("title").innerHTML="Why Do You Know This, Sam?"
    document.getElementById("tag").innerHTML="/Communications/  (4th-year)"
    document.getElementById("description-text").innerHTML="Did you know that ambulances originated in Pittsburgh, jellyfish are the most efficient swimmers in the animal kingdom, and dolphins have a unique wiggly style? Join us as we delve into fascinating tidbits like these and more with communication designer and self-proclaimed mischief-maker, Samantha Rauch, on our design podcast. Sam shares her ever-expanding collection of intriguing facts that fuel her design journey. For her, design is the art of shaping how people interact with the world, a platform for playful exploration, absurdity, joy, and storytelling."  
    document.getElementById("references").innerHTML="idk"
}
function change_text4(){
    document.getElementById("number").innerHTML="EP.04"
    document.getElementById("title").innerHTML="Uncovering CMU's Lost Archives with Nancy."
    document.getElementById("tag").innerHTML="/Communications/  (4th-year)"
    document.getElementById("description-text").innerHTML="Join us on today's episode as we chat with Nancy Zuo, a student who carved a unique path through her five-year journey at our school, delving into business, HCI, Information Systems, Art, and ultimately finding her niche in the Modern Languages department where she created her own major. Together, we delve into intriguing topics, pondering the dominance of Asian women in UI/UX, the intersection of art and design, and the significance of archiving. Nancy's stint at the CMU Archives unearthed captivating insights, shedding light on forgotten aspects of our history such as past presidents, student activism, and zines. We explore how CMU's buildings, named after these presidents, serve as monumental markers of their legacies, reflecting their policies, values, and positions in a curious architectural phenomenon."
    document.getElementById("references").innerHTML="idk"
}
function change_text5(){
    document.getElementById("number").innerHTML="EP.05"
    document.getElementById("title").innerHTML="sam"
    document.getElementById("description-text").innerHTML='Our guest for today, Thien Le, is a designer in the environments track and has a double major in history. He is currently working on projects surrounding archiving "viral" moments of American awards shows in a printed book and developing better lines of communicating DEI issues in the School of Design. In this podcast we discuss the intersection of history and design, his views of design as an argument - a presentation of his values, a commentary, and a way of framing. We discuss the challenges around sticking to your values and wanting to implement changes while having to enter the workforce and make a living.'
    document.getElementById("references").innerHTML="idk"
}
function change_text6(){
    document.getElementById("number").innerHTML="EP.06"
    document.getElementById("title").innerHTML="gretchen"
    document.getElementById("description-text").innerHTML='Our guest for today, Thien Le, is a designer in the environments track and has a double major in history. He is currently working on projects surrounding archiving "viral" moments of American awards shows in a printed book and developing better lines of communicating DEI issues in the School of Design. In this podcast we discuss the intersection of history and design, his views of design as an argument - a presentation of his values, a commentary, and a way of framing. We discuss the challenges around sticking to your values and wanting to implement changes while having to enter the workforce and make a living.'
    document.getElementById("references").innerHTML="idk"
}
function change_text7(){
    document.getElementById("number").innerHTML="EP.07"
    document.getElementById("title").innerHTML="catherine"
    document.getElementById("description-text").innerHTML='Our guest for today, Thien Le, is a designer in the environments track and has a double major in history. He is currently working on projects surrounding archiving "viral" moments of American awards shows in a printed book and developing better lines of communicating DEI issues in the School of Design. In this podcast we discuss the intersection of history and design, his views of design as an argument - a presentation of his values, a commentary, and a way of framing. We discuss the challenges around sticking to your values and wanting to implement changes while having to enter the workforce and make a living.'
    document.getElementById("references").innerHTML="idk"
}
function change_text8(){
    document.getElementById("number").innerHTML="EP.08"
    document.getElementById("title").innerHTML="jacky"
    document.getElementById("description-text").innerHTML='Our guest for today, Thien Le, is a designer in the environments track and has a double major in history. He is currently working on projects surrounding archiving "viral" moments of American awards shows in a printed book and developing better lines of communicating DEI issues in the School of Design. In this podcast we discuss the intersection of history and design, his views of design as an argument - a presentation of his values, a commentary, and a way of framing. We discuss the challenges around sticking to your values and wanting to implement changes while having to enter the workforce and make a living.'
    document.getElementById("references").innerHTML="idk"
}
window.onSpotifyIframeApiReady = (IFrameAPI) => {
const element = document.getElementById('embed-iframe');
const options = {
    width: '100%',
    height: '160',
    uri: 'spotify:episode:6X1V3c2VaOnh0CHBpid4lW?utm'
};
const callback = (EmbedController) => {
    document.querySelectorAll('.episode').forEach(episode => {
        episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId)

        });
    })
};
IFrameAPI.createController(element, options, callback);
};

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
  
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};