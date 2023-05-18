var msg = new SpeechSynthesisUtterance();
var prompts = ["¿Cómo te llamas?",
    "¿De dónde eres?",
    "¿Cómo eres?",
    "¿Dónde vives?",
    "¿Cuántos años tienes?",
    "¿Qué te gusta hacer? ¿Qué no te gusta hacer?",
    "¿Quiénes son los miembros de tu familia?",
    "Describe una persona de tu familia y habla de qué le gusta hacer",
    "¿Qué tienes que hacer en casa? (los quehaceres)",
    "¿Cómo es tu día normal? (habla de tus clases)",
    "¿Cuál es tu clase favorita? ¿Quién es el/la profesor/a?",
    "¿Qué vas a hacer luego? ¿Qué quieres hacer luego?",
    "¿Qué hiciste durante el fin de semana?",
    "¿Qué llevaste a la escuela ayer?",
    "¿Qué comiste hoy?"
];

var nodupes = [];
for(var i = 0; i<prompts.length; i++){
    nodupes[i] = 0;
}
var j = 0;
function question() {
    if(j==14){
        alert('all questions answered');
    }
    var x = Math.floor((15) * Math.random());
    if(nodupes[x]==1){
        var x = Math.floor((14) * Math.random());
    }
    nodupes[x]==1
    msg.text = prompts[x];
    msg.volume = 1;
    msg.rate = 0.7;
    msg.lang = 'es';
    window.speechSynthesis.speak(msg);
    console.log(msg);
    j++;
}