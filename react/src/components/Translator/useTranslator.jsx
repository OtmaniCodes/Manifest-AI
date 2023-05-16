
// import { useState, useEffect } from "react";
// import { Configuration, OpenAIApi } from "openai";

// const useTranslator = (contentToTranslate, targetLanguage) => {
//   const [translatedArray, setTranslatedArray] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const configuration = new Configuration({
//     apiKey: "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" // Replace with your OpenAI API key
//   });
//   const openai = new OpenAIApi(configuration);

//   useEffect(() => {
//     translateContent();
//   }, [targetLanguage]);

//   const translateContent = async () => {
//     setIsLoading(true);
//     try {
//       const translatedArray = await Promise.all(
//         contentToTranslate.map(async (content) => {
//           const translatedTitle =
//             targetLanguage !== "original"
//               ? await translateText(content.title, targetLanguage)
//               : content.title;

//           const translatedDescriptions = await Promise.all(
//             content.descriptions.map(async (description) => {
//               const translatedDescription =
//                 targetLanguage !== "original"
//                   ? await translateText(description, targetLanguage)
//                   : description;
//               return translatedDescription;
//             })
//           );

//           return {
//             ...content,
//             title: translatedTitle,
//             descriptions: translatedDescriptions
//           };
//         })
//       );
//       setTranslatedArray(translatedArray);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Translation error:", error);
//       setIsLoading(false);
//     }
//   };

//   const translateText = async (text, targetLanguage) => {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `Translate this into ${targetLanguage}: ${text}`,
//       temperature: 0.3,
//       max_tokens: 100,
//       top_p: 1.0,
//       frequency_penalty: 0.0,
//       presence_penalty: 0.0
//     });

//     const translatedText = response.data.choices[0].text.trim();
//     return translatedText;
//   };

//   return translatedArray;
// };

// export default useTranslator;
// ==========
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const useTranslator = (contentToTranslate, targetLanguage) => {
  const [translatedArray, setTranslatedArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: "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" // Replace with your OpenAI API key
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    translateContent();
  }, [targetLanguage]);

  const translateContent = async () => {
    setIsLoading(true);
    try {
      const translatedArray = await Promise.all(
        contentToTranslate.map(async (content) => {
          const translatedContent = {};
          
          for (let property in content) {
            // console.log(property)
            if(property==='graphic' || property==='icon'){
              translatedContent[property] =content[property]
            }
            else if (Array.isArray(content[property])) {
              translatedContent[property] = await Promise.all(
                content[property].map(async (item) => {
                  return targetLanguage !== "original" ? await translateText(item, targetLanguage) : item;
                })
              );
            } else if (typeof content[property] === "string") {
              translatedContent[property] =
                targetLanguage !== "original" ? await translateText(content[property], targetLanguage) : content[property];
            } else {
              translatedContent[property] = content[property];
            }
          }

          return translatedContent;
        })
      );

      setTranslatedArray(translatedArray);
      setIsLoading(false);
    } catch (error) {
      console.error("Translation error:", error);
      setIsLoading(false);
    }
  };

  const translateText = async (text, targetLanguage) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Translate this into ${targetLanguage}: ${text}`,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    });

    const translatedText = response.data.choices[0].text.trim();
    return translatedText;
  };

  return translatedArray;
};

export default useTranslator;
// =======



// import { useState, useEffect } from "react";
// import { Configuration, OpenAIApi } from "openai";

// const useTranslator = (contentToTranslate, targetLanguage) => {
//   const [translatedArray, setTranslatedArray] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const configuration = new Configuration({
//     apiKey: "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" // Replace with your OpenAI API key
//   });
//   const openai = new OpenAIApi(configuration);

//   useEffect(() => {
//     translateContent();
//   }, [targetLanguage]);

//   const translateContent = async () => {
//     setIsLoading(true);
//     try {
//       const translatedArray = await Promise.all(
//         contentToTranslate.map(async (content) => {
//           const translatedContent = {};

//           for (let property in content) {
//             if (Array.isArray(content[property])) {
//               translatedContent[property] = await Promise.all(
//                 content[property].map(async (item) => {
//                   return isExcludedProperty(property) ? item : translateText(item, targetLanguage);
//                 })
//               );
//             } else if (typeof content[property] === "string") {
//               translatedContent[property] = isExcludedProperty(property)
//                 ? content[property]
//                 : translateText(content[property], targetLanguage);
//             } else {
//               translatedContent[property] = content[property];
//             }
//           }

//           return translatedContent;
//         })
//       );

//       setTranslatedArray(translatedArray);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Translation error:", error);
//       setIsLoading(false);
//     }
//   };

//   const translateText = async (text, targetLanguage) => {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `Translate this into ${targetLanguage}: ${text}`,
//       temperature: 0.3,
//       max_tokens: 100,
//       top_p: 1.0,
//       frequency_penalty: 0.0,
//       presence_penalty: 0.0
//     });

//     const translatedText = response.data.choices[0].text.trim();
//     return translatedText;
//   };

//   const isExcludedProperty = (property) => {
//     return property.toLowerCase().includes("link") || property.toLowerCase().includes("icon");
//   };

//   return translatedArray;
// };

// export default useTranslator;
