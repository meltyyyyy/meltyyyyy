var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello There!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I am <strong>meltyyyyy</strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I am learning Computer Science<br>at <strong>Tohoku University</strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Machine Learning<br>Brain Machine Interface<br>are keywords for me!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Nice to see you guys!')
    .pauseFor(2000)
    .deleteAll()
    .start();