const audios =[
    {title:"Capitulo 1", src:"./audio/capitulo_1.mp3"},
    {title:"Capitulo 2", src:"./audio/capitulo_2.mp3"},
    {title:"Capitulo 3", src:"./audio/capitulo_3.mp3"},
    {title:"Capitulo 4", src:"./audio/capitulo_4.mp3"},
    {title:"Capitulo 5", src:"./audio/capitulo_5.mp3"},
    {title:"Capitulo 6", src:"./audio/capitulo_6.mp3"},
    {title:"Capitulo 7", src:"./audio/capitulo_7.mp3"},
    {title:"Capitulo 8", src:"./audio/capitulo_8.mp3"},
    {title:"Capitulo 9", src:"./audio/capitulo_9.mp3"},
    {title:"Capitulo 10", src:"./audio/capitulo_10.mp3"},
    {title:"Capitulo 11", src:"./audio/capitulo_11.mp3"},
    {title:"Capitulo 12", src:"./audio/capitulo_12.mp3"},
    {title:"Capitulo 13", src:"./audio/capitulo_13.mp3"},
    {title:"Capitulo 14", src:"./audio/capitulo_14.mp3"},
    {title:"Capitulo 15", src:"./audio/capitulo_15.mp3"},
    {title:"Capitulo 16", src:"./audio/capitulo_16.mp3"},
    {title:"Capitulo 17", src:"./audio/capitulo_17.mp3"},
    {title:"Capitulo 18", src:"./audio/capitulo_18.mp3"},
    {title:"Capitulo 19", src:"./audio/capitulo_19.mp3"},
    {title:"Capitulo 20", src:"./audio/capitulo_20.mp3"},
    {title:"Capitulo 21", src:"./audio/capitulo_21.mp3"},
    {title:"Capitulo 22", src:"./audio/capitulo_22.mp3"},
    {title:"Capitulo 23", src:"./audio/capitulo_23.mp3"},
    {title:"Capitulo 24", src:"./audio/capitulo_24.mp3"},
    {title:"Capitulo 25", src:"./audio/capitulo_25.mp3"},
    {title:"Capitulo 26", src:"./audio/capitulo_26.mp3"},
    {title:"Capitulo 27", src:"./audio/capitulo_27.mp3"},
    {title:"Capitulo 28", src:"./audio/capitulo_28.mp3"},
    {title:"Capitulo 29", src:"./audio/capitulo_29.mp3"},
    {title:"Capitulo 30", src:"./audio/capitulo_30.mp3"},
    {title:"Capitulo 31", src:"./audio/capitulo_31.mp3"},
    {title:"Capitulo 32", src:"./audio/capitulo_32.mp3"},
    {title:"Capitulo 33", src:"./audio/capitulo_33.mp3"},
    {title:"Capitulo 34", src:"./audio/capitulo_34.mp3"},
    {title:"Capitulo 35", src:"./audio/capitulo_35.mp3"},
    {title:"Capitulo 36", src:"./audio/capitulo_36.mp3"},
    {title:"Capitulo 37", src:"./audio/capitulo_37.mp3"},
    {title:"Capitulo 38", src:"./audio/capitulo_38.mp3"},
    {title:"Capitulo 39", src:"./audio/capitulo_39.mp3"},
    {title:"Capitulo 40", src:"./audio/capitulo_40.mp3"},
    {title:"Capitulo 41", src:"./audio/capitulo_41.mp3"},
    {title:"Capitulo 42", src:"./audio/capitulo_42.mp3"},
    {title:"Capitulo 43", src:"./audio/capitulo_43.mp3"},
    {title:"Capitulo 44", src:"./audio/capitulo_44.mp3"},
    {title:"Capitulo 45", src:"./audio/capitulo_45.mp3"},
    {title:"Capitulo 46", src:"./audio/capitulo_46.mp3"},
    {title:"Capitulo 47", src:"./audio/capitulo_47.mp3"},
    {title:"Capitulo 48", src:"./audio/capitulo_48.mp3"},
    {title:"Capitulo 49", src:"./audio/capitulo_49.mp3"},
    {title:"Capitulo 50", src:"./audio/capitulo_50.mp3"},
];

const audioListContainer = document.getElementById('audioList');

audios.forEach(audio => {
     const audioContainer = document.createElement('div');
     audioContainer.className = 'audio-container';

    const audioTitle = document.createElement('p');
    audioTitle.textContent = audio.title;
    
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audio.src;

    audioContainer.appendChild(audioTitle);
    audioContainer.appendChild(audioElement);

    audioListContainer.appendChild(audioContainer);


});