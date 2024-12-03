import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import image from "../../src/assets/images.png";
import image2 from "../../src/assets/logo.png";
import mic from "../../src/assets/mic.png";

const socket = io.connect("https://tsdevadmin.testenvapp.com");
// const socket = io.connect("http://localhost:4000");

const Chat = () => {
  const [language, setLanguage] = useState("en");
  const [chapter, setChapter] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ref = useRef();
  const [isListening, setIsListening] = useState(false);
  const shouldFetch = useRef(true);

  function formatQuizOrReturnNormal(response) {
    const quizQuestionPattern = /^\d+\.\s.*$/m;
    const quizOptionPattern = /^[A-D]\.\s.*$/m;
    const sentencePattern = /^\d+\.\s".*"\s\(.+\)$/m;

    if (
      quizQuestionPattern.test(response) &&
      quizOptionPattern.test(response)
    ) {
      return `<pre>${response}</pre>`;
    }

    if (quizQuestionPattern.test(response) && sentencePattern.test(response)) {
      return `<pre>${response}</pre>`;
    }

    return response;
  }

  const handleSend = () => {
    let text = ``;
    if (chapter !== "") {
      text = `from ${chapter} file.`;
    }
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `<p>${input}</p>`,
          user: "You",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      socket.emit("ask-question", messages?.length === 1 ? `First response : ${input}` : `${input}`);
      setInput("");
    }
  };

  useEffect(() => {
    socket.on("question-response", (data) => {
      const resp = formatQuizOrReturnNormal(data);
      console.log(data);
      console.log(resp);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: resp,
          user: "AI",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    });

    return () => {
      socket.off("question-response");
    };
  }, []);

  let sidebarData = [
    {
      title: "Today",
      questions: [
        "What goals do you have for today?",
        "Is there anything urgent you need help with?",
        "What’s one thing you’d like to accomplish before the day ends?",
      ],
    },
    {
      title: "Yesterday",
      questions: [
        "What went well yesterday?",
        "Is there anything you’d like to improve from yesterday?",
        "Did you achieve what you set out to do?",
        "What was the highlight of your day yesterday?",
        "Is there something from yesterday you’d like to revisit today?",
        "What lessons did you learn yesterday?",
        "What challenges did you face yesterday?",
      ],
    },
    {
      title: "Previous 7 days",
      questions: [
        "What are some key wins from the past week?",
        "Were there any recurring challenges you noticed last week?",
        "How did your progress compare to your weekly goals?",
        "What’s one thing you’d do differently this week?",
        "What inspired you in the past 7 days?",
      ],
    },
    {
      title: "A month ago",
      questions: [
        "What significant milestones did you hit last month?",
        "Is there anything from last month you’d like to revisit?",
      ],
    },
  ];

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  const handleStartListening = () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setInput((prev) => prev + " " + speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      let message = `<p>Hello! I am your AI assistant, Eloelo. What is your native language?</p>`;
      setMessages([{
        text: message,
        user: "AI",
        timestamp: new Date().toLocaleTimeString(),
      }]);
    }
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="w-2/12 p-3 overflow-y-auto">
        <div className="font-bold text-xl">New chat here</div>
        <div>
          {sidebarData.map((item, index) => (
            <div key={index} className="my-3">
              <p className="font-semibold">{item.title}</p>
              {item.questions.map((qa, idx) => (
                <div key={idx} className="text-secondary mb-3 font-semibold text-sm truncate">
                  {qa}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-10/12 h-screen ">
      <div className="flex h-[10%] justify-between items-center p-3">
            <h4 className="m-0">EloElo</h4>
            <div className="flex gap-3 items-center">
              <div>
                <select
                  className="form-select"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                >
                  <option value="">Select Chapter</option>
                  <option value={"Supermaket "}>Supermaket</option>
                </select>
              </div>
              <div>
                <select
                  className="form-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="it">Italian</option>
                </select>
              </div>

              <div className="border rounded-full p-1 overflow-hidden">
                <img
                  src={image}
                  className="w-8 h-8 object-cover rounded-full"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        <div className="border-none px-4 pt-4 h-[80%]">
        
          <div className="h-full overflow-y-auto p-3" ref={ref}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 flex flex-col gap-1 ${message.user === "You" ? "text-right" : ""}`}
              >
                <div
                  className={`flex gap-2 items-end ${message.user === "You" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <strong>{message.user}</strong> <small>{message.timestamp}</small>
                </div>
                <div
                  className={`messageBox ${message.user === "You" ? "ml-auto" : ""}`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                ></div>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="w-full h-full flex justify-center items-center">
                <div className="rounded-full p-1 w-auto">
                  <img src={image2} className="w-36" alt="logo" />
                </div>
              </div>
            )}
          </div>
          
        
        </div>
        <div className="py-2 h-[10%]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <div className="flex px-4 gap-2 ">
                <div className="w-9/12 flex items-center">
                  <img
                    src={mic}
                    width={"25px"}
                    height={"25px"}
                    className="cursor-pointer"
                    onClick={handleStartListening}
                    alt="microphone"
                  />
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 w-full"
                  />
                </div>
                <div className="w-3/12">
                  <button
                    type="button"
                    onClick={handleSend}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Chat;



// import React, { useContext } from 'react'
// import NoteContext from './Context/notes/NoteContext'
// const Chat = () => {
// const a =useContext(NoteContext)
//   return (
//     <div>
//         <div class="grid grid-cols-12 gap-4">
//   <div className='col-span-3'>
//     <div className='py-4 flex   border border-b-0 border-l-2 border-t-0 border-r-0 justify-center'>
//     New Chat here

//     </div>
//   </div>
//   <div className='col-span-9'>
// <div className='py-6 '>
// EloElo
//   {a.notes.map((note) => (
//     <div key={note.id} className='py-2 px-4 border border-b-0 border-l-0 border-t-0 border-r-0'>
//       {note.content}
//     </div>
//   ))}
// </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Chat