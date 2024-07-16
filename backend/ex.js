import { YoutubeTranscript } from 'youtube-transcript';

const videoUrl = 'https://www.youtube.com/watch?v=V2SmAdyKhrg&ab_channel=Venom%27sTech';

// Function to perform simple frequency-based text summarization
const summarizeText = (text, sentenceCount = 5) => {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  const sentenceScores = sentences.map(sentence => {
    const words = sentence.split(' ');
    const wordFrequency = words.reduce((freq, word) => {
      freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {});
    return { sentence, score: words.reduce((sum, word) => sum + wordFrequency[word], 0) };
  });

  sentenceScores.sort((a, b) => b.score - a.score);
  return sentenceScores.slice(0, sentenceCount).map(item => item.sentence).join(' ');
};

YoutubeTranscript.fetchTranscript(videoUrl)
  .then(transcript => {
    // Extract the text from the transcript
    const transcriptText = transcript.map(item => item.text).join(' ');

    // Log the full transcript text
    console.log("Full Transcript:", transcriptText);
    // console.log("Full Transcript:", transcript);

    // Generate a summary using the simple summarization function
    // const summary = summarizeText(transcriptText);

    // Log the summary
    // console.log("Summary:", summary);
  })
  .catch(error => {
    console.error('Error fetching transcript:', error);
  });

