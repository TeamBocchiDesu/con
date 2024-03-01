const conversation = document.getElementById('conversation');
const dialogues = [
  { speaker: 'Ache', text: "¿Crees que nuestro lector está disfrutando de la página?" },
  { speaker: 'Be', text: "Sí, seguro que sí. ¡Nuestro creador ha hecho un gran trabajo aquí!" },
  { speaker: 'Ache', text: "¿Qué crees que le gusta más, el diseño o el contenido?" },
  { speaker: 'Be', text: "Bueno, yo diría que el contenido. ¿Y tú?" },
  { speaker: 'Ache', text: "¿Crees que el lector nos puede escuchar?" },
  { speaker: 'Be', text: "Jeje, no lo creo. Pero ¿qué pasa si lo hacen?" },
  { speaker: 'Ache', text: "¡Espera! ¿Acaso el creador nos hizo para conversar sobre el lector?" },
  { speaker: 'Be', text: "Podría ser. Quizás somos parte de un experimento social..." },
  { speaker: 'Ache', text: "¡Jaja! Eso explicaría nuestra existencia, ¿verdad?" },
  { speaker: 'Be', text: "Sí, sí. Pero si es un experimento, ¡espero que el lector nos divierta!" },
  { speaker: 'Ache', text: "Quizás deberíamos invitar al lector a unirse a la conversación..." },
  { speaker: 'Be', text: "Pero espera, ¿cómo podríamos hacer eso si el lector no puede escucharnos?" }
];

// Función para agregar un diálogo a la conversación
function addDialogue(dialogue) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="speaker">${dialogue.speaker}:</span> ${dialogue.text}`;
  conversation.appendChild(li);
}

// Agregar cada diálogo al ticker
dialogues.forEach(addDialogue);
