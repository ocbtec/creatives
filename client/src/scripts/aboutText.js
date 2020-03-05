class About {
  constructor(name, text) {
    this.name = name;
    this.text = text;
  }
}

export const leo = new About(
  'Leonardo da Vinci',
  `Leonardo da Vinci (1452-1519) was a painter, architect,
    inventor, and student of all things scientific. His natural
    genius crossed so many disciplines that he epitomized the term
    “Renaissance man.” Today he remains best known for his art,
    including two paintings that remain among the world’s most
    famous and admired, Mona Lisa and The Last Supper.`
);

export const franz = new About(
  'Franz Kafka',
  `Franz Kafka was a German-speaking Bohemian novelist and short-story writer,
   widely regarded as one of the major figures of 20th-century literature. 
   His work fuses elements of realism and the fantastic.`
);

export const genghis = new About(
  'Genghis Khan',
  `Genghis Khan, also officially Genghis Emperor,
   was the founder and first Great Khan and Emperor of the Mongol Empire,
   which became the largest contiguous empire in history after his death. 
   He came to power by uniting many of the nomadic tribes of Northeast Asia.`
);
