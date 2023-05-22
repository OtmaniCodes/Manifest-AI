import axiosHttpClient from './http-client';

class AIQuestionsSingleton {
  static instance;

  AiQuestions = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-ai-questions');
      console.log('AiQuestions DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.AiQuestions;
        console.log(res)
        const AiQuestions = res;
        this.AiQuestions = AiQuestions.map((rawAIQuestion, i) => {
          return {
            question: rawAIQuestion.question,
            descriptions: rawAIQuestion.descriptions.split('_')
            .map((r) => r.toString().trim()),
            image: rawAIQuestion.image==null?null:`${import.meta.env.VITE_SERVER_URL}/storage/${rawAIQuestion.image}` ,
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!AIQuestionsSingleton.instance) {
        AIQuestionsSingleton.instance = new AIQuestionsSingleton();
    }
    return AIQuestionsSingleton.instance;
  }
}

const aiQuestionsSingleton = AIQuestionsSingleton.getInstance();

export default aiQuestionsSingleton;
