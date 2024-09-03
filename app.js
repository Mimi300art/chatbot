

// // 
// // 
// // Initialize variables
//  const sendBtn = document.getElementById('sendBtn');
//  const userInput = document.getElementById('userInput');
//  const messages = document.getElementById('messages');

// // // Function to display messages
//  function displayMessage(sender, message) {
//      const messageElement = document.createElement('div');
//      messageElement.textContent = `${sender}: ${message}`;
//      messages.appendChild(messageElement);
//      messages.scrollTop = messages.scrollHeight;
//  }

// // // Send message to the Generative AI API
//  async function sendMessageToAPI(userMessage) {
//      displayMessage('You', userMessage);

// //     // API request configuration
//      const apiKey = "AIzaSyAUowZW7prd2bf17kN8K61AYw4Oo3Qyt0Y";  // Replace with your actual API key
// //     // const url = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateMessage?key=${apiKey}`;
//      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

//      const data = {
//          contents: [
//              {
//                  role: "user",
//                  parts: [
//                      {
//                         text: userMessage
//                     }
//                  ]
//              },
//          ],
//          systemInstruction: {
//              role: "user",
//              parts: [
//                  {
//                      text: "You are ChatBot a virtual assistant who works for Wootlab Innovations. Wootlab Innovations is a tech company in Maitama, Abuja that specializes in all things tech and outsourcing of talents and equipping Nigerian youths with digital skills. The office space for Wootlab Innovations has a beautiful scenery. Check out Wootlab Innovations’ website URL: https://wootlab.ng/ for more information about wootlab"
//                  }
//              ]
//          },
//          generationConfig: {
//              temperature: 1,
//              topK: 64,
//              topP: 0.95,
//              maxOutputTokens: 8192,
//              responseMimeType: "text/plain"
//          }
//      }

//  try {
//      const response = await fetch(url, {
//          method: "POST",
//          headers: {
//              "Content-Type": "application/json",
//         },
//          body: JSON.stringify(data),
//      });

//      if (!response.ok) {
//          throw new Error(`HTTP error! status: ${response.status}`);
//      }

//     const result = await response.json();
//      const botMessage = result.candidates[0].content.parts[0].text || "Sorry, I didn't understand that.";
//      displayMessage('ChatBot', botMessage);
//  } catch (error) {
//      ('ChatBot', "An error occurred: " + error.message);
//  }

//  }
//  // Event listener for sending a messagedisplayMessage
// sendBtn.addEventListener('click', () => {
//      const userMessage = userInput.value.trim();
//      if (userMessage) {
//          sendMessageToAPI(userMessage);
//          userInput.value = '';
//      }
//  });


// const sendBtn = document.getElementById('sendBtn');
// const userInput = document.getElementById('userInput');
// const messages = document.querySelector('.chat');

// function displayMessage(sender, message) {
//     const messageElement = document.createElement('li');
//     messageElement.classList.add(sender === 'You' ? 'chat-outgoing' : 'chat-incoming');
//     messageElement.innerHTML = `<p>${message}</p>`;
//     messages.appendChild(messageElement);
//     messages.scrollTop = messages.scrollHeight;
// }

// async function sendMessageToAPI(userMessage) {
//     displayMessage('You', userMessage);

//     const apiKey = "AIzaSyAUowZW7prd2bf17kN8K61AYw4Oo3Qyt0Y";  // Replace with your actual API key
//     const url = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateMessage?key=${apiKey}`;

//     const data = {
//         contents: [
//             {
//                 role: "user",
//                 parts: [{ text: userMessage }]
//             }
//         ],
//         systemInstruction: {
//             role: "user",
//             parts: [
//                 {
//                     text: "You are ChatBot, a virtual assistant working for Wootlab Innovations."
//                 }
//             ]
//         },
//         generationConfig: {
//             temperature: 1,
//             topK: 64,
//             topP: 0.95,
//             maxOutputTokens: 8192,
//             responseMimeType: "text/plain"
//         }
//     };

//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         const botMessage = result.candidates[0].content.parts[0].text || "Sorry, I didn't understand that.";
//         displayMessage('ChatBot', botMessage);
//     } catch (error) {
//         displayMessage('ChatBot', "An error occurred: " + error.message);
//     }
// }

// sendBtn.addEventListener('click', () => {
//     const userMessage = userInput.value.trim();
//     if (userMessage) {
//         sendMessageToAPI(userMessage);
//         userInput.value = '';
//     }
// });
