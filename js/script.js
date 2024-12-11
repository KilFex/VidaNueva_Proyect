
const audioData = {
    genesis: Array.from({ length: 50 }, (_, i) => ({
      title: `Génesis Capítulo ${i + 1}`,
      src: `./audio/genesis/capitulo_${i + 1}.mp3`,
    })),
    exodus: Array.from({ length: 40 }, (_, i) => ({
      title: `Éxodo Capítulo ${i + 1}`,
      src: `./audio/exodo/ExodoCapitulo${i + 1}.mp3`,
    })),
    levitico: Array.from({length: 27}, (_, i) => ({
      title: `Levitico Capitulo ${i +1}`,
      src: `./audio/leviticos/LeviticoCapitulo_${i + 1}.mp3`
    })),
    deuteronomio: Array.from({length: 34}, (_, i) => ({
      title: `Deuteronomio Capítulo ${i + 1}`,
      src: `./audio/deuteronomio/DeuteronomioCapitulo_${i + 1}.mp3`
    }))

  };
  
  
  const audioPlayer = document.getElementById("audioPlayer");
  const currentTrack = document.getElementById("currentTrack");
  

  const genesisList = document.getElementById("genesisList");
  const exodusList = document.getElementById("exodusList");
  const leviticoList = document.getElementById("leviticoList");
  const deuteronomioList = document.getElementById("deuteronomioList");
  const toggleGenesis = document.getElementById("toggleGenesis");
  const toggleExodus = document.getElementById("toggleExodus");
  const toggleLevitico = document.getElementById("toggleLevitico");
  const toggleDeuteronomio = document.getElementById("toggleDeuteronomio");
  
  let currentTrackIndex = -1;
  let currentBook = "genesis";
  
  
  function populateAudioList(book, container) {
    container.innerHTML = ""; 
    audioData[book].forEach((audio, index) => {
      const trackItem = document.createElement("div");
      trackItem.className = "track-item";
      trackItem.textContent = audio.title;
  
      trackItem.addEventListener("click", () => {
        currentBook = book;
        currentTrackIndex = index;
        playTrack(currentTrackIndex);
      });
  
      container.appendChild(trackItem);
    });
  }
  
  
  toggleGenesis.addEventListener("click", () => {
    genesisList.classList.toggle("hidden");
  });
  toggleExodus.addEventListener("click", () => {
    exodusList.classList.toggle("hidden");
  });
  toggleLevitico.addEventListener("click", () => {
    leviticoList.classList.toggle("hidden");
  });
  toggleDeuteronomio.addEventListener("click", () =>{
    deuteronomioList.classList.toggle("hidden");
  });
  

  function playTrack(index) {
    const bookAudios = audioData[currentBook];
    const audio = bookAudios[index];
    if (audio) {
      currentTrack.textContent = `Reproduciendo: ${audio.title}`;
      audioPlayer.src = audio.src;
      audioPlayer.play();
    }
  }
  
  audioPlayer.addEventListener("ended", () => {
    const bookAudios = audioData[currentBook];
    if (currentTrackIndex < bookAudios.length - 1) {
      currentTrackIndex++;
      playTrack(currentTrackIndex);
    } else {
      currentTrack.textContent = "Reproducción completada.";
    }
  });
  

  populateAudioList("genesis", genesisList);
  populateAudioList("exodus", exodusList);
  populateAudioList("levitico", leviticoList);
  populateAudioList("deuteronomio", deuteronomioList);
  