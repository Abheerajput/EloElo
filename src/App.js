import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Chat from "./Components/Chat";
import ForgotPassword from "./Components/Forgotpassword/ForgotPassword";
import VerifyEmail from "./Components/VerifyEmail/VerifyEmail";

function App() {
    const token = localStorage.getItem("token"); 

    return (
        <Router>
            <Routes>
                {token ? (
                    <>
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/profile" element={<h1>Profile Page</h1>} />
                        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
                        <Route path="/signup" element={<Navigate to="/" />} />
                        <Route path="/login" element={<Navigate to="/chat" />} />
                        <Route path="/forgot-password" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        {/* Redirect protected routes to Login */}
                        <Route path="/chat" element={<Navigate to="/login" />} />
                        <Route path="/profile" element={<Navigate to="/login" />} />
                        <Route path="/dashboard" element={<Navigate to="/login" />} />
                    </>
                )}
                {/* Common Route */}
                <Route path="/" element={<Main />} />

                <Route path="/verify" element={<VerifyEmail />} />
            </Routes>
        </Router>
    );
}

export default App;




// import React, { useEffect, useRef, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Card,
//   Image,
// } from "react-bootstrap";
// import io from "socket.io-client";
// import "./App.css";
// import image from "../src/assets/images.png";
// import image2 from "../src/assets/logo.png";
// import mic from "../src/assets/mic.png";

// const socket = io.connect("https://tsdevadmin.testenvapp.com");
// // const socket = io.connect("http://localhost:4000");

// const App = () => {
//   const [language, setLanguage] = useState("en");
//   const [chapter, setChapter] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const ref = useRef();
//   const [isListening, setIsListening] = useState(false);
//   const shouldFetch = useRef(true);

//   function formatQuizOrReturnNormal(response) {
//     // Patterns for detection
//     const quizQuestionPattern = /^\d+\.\s.*$/m; // Detects "1. Question" format
//     const quizOptionPattern = /^[A-D]\.\s.*$/m; // Detects "A. Option" format
//     const sentencePattern = /^\d+\.\s".*"\s\(.+\)$/m; // Detects sentence structure like "Ech huelen eng _____." (I am taking a _____.)

//     // Check for standard quiz format
//     if (
//       quizQuestionPattern.test(response) &&
//       quizOptionPattern.test(response)
//     ) {
//       return `<pre>${response}</pre>`;
//     }

//     // Check for sentence-based quiz format
//     if (quizQuestionPattern.test(response) && sentencePattern.test(response)) {
//       return `<pre>${response}</pre>`;
//     }

//     // If no specific format detected, return as is
//     return response;
//   }

//   const handleSend = () => {
//     let text = ``;
//     if (chapter !== "") {
//       text = `from ${chapter} file.`;
//     }
//     if (input.trim()) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           text: `<p>${input}</p>`,
//           user: "You",
//           timestamp: new Date().toLocaleTimeString(),
//         },
//       ]);
//       socket.emit("ask-question", messages?.length === 1 ? `First response : ${input}` : `${input}`);
//       setInput("");
//     }
//   };

//   useEffect(() => {
//     socket.on("question-response", (data) => {
//       const resp = formatQuizOrReturnNormal(data);
//       console.log(data);
//       console.log(resp);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           text: resp,
//           user: "AI",
//           timestamp: new Date().toLocaleTimeString(),
//         },
//       ]);
//     });

//     // Clean up the effect by removing the listener when the component unmounts
//     return () => {
//       socket.off("question-response");
//     };
//   }, []);

//   let sidebarData = [
//     {
//       title: "Today",
//       questions: [
//         "What goals do you have for today?",
//         "Is there anything urgent you need help with?",
//         "What’s one thing you’d like to accomplish before the day ends?",
//       ],
//     },
//     {
//       title: "Yesterday",
//       questions: [
//         "What went well yesterday?",
//         "Is there anything you’d like to improve from yesterday?",
//         "Did you achieve what you set out to do?",
//         "What was the highlight of your day yesterday?",
//         "Is there something from yesterday you’d like to revisit today?",
//         "What lessons did you learn yesterday?",
//         "What challenges did you face yesterday?",
//       ],
//     },
//     {
//       title: "Previous 7 days",
//       questions: [
//         "What are some key wins from the past week?",
//         "Were there any recurring challenges you noticed last week?",
//         "How did your progress compare to your weekly goals?",
//         "What’s one thing you’d do differently this week?",
//         "What inspired you in the past 7 days?",
//       ],
//     },
//     {
//       title: "A month ago",
//       questions: [
//         "What significant milestones did you hit last month?",
//         "Is there anything from last month you’d like to revisit?",
//       ],
//     },
//   ];  

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.scrollTop = ref.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleStartListening = () => {
//     if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
//       alert("Speech Recognition is not supported in this browser.");
//       return;
//     }

//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US"; // Set language
//     recognition.interimResults = false; // Capture only final results
//     recognition.continuous = false; // Single session

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       console.log(event)
//       const speechResult = event.results[0][0].transcript;
//       setInput((prev) => prev + " " + speechResult);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.start();
//   };

//   useEffect(() => {
//     if (shouldFetch.current) {
//       shouldFetch.current = false;
//       let message = `<p>Hello! I am your AI assistant, Eloelo. What is your native language?</p>`
//       setMessages([ {
//         text: message,
//         user: "AI",
//         timestamp: new Date().toLocaleTimeString(),
//       },])
//     }
//   }, []);

//   return (
//     <div
//       className="d-flex w-100"
//       style={{ maxHeight: " 100vh", height: "100vh" }}
//     >
//       <Col sm={2} className="p-3 overflow-y-scroll">
//         <div className="fw-bold fs-4">New chat here</div>
//         <div>
//           {sidebarData.map((item) => {
//             return (
//               <div className="my-3">
//                 <p className="fw-semibold">{item.title}</p>
//                 {item.questions.map((qa) => {
//                   return (
//                     <div className="text-secondary mb-3 fw-semibold small text-truncate">
//                       {qa}
//                     </div>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//       </Col>
//       <Col sm={10}>
//         <Card className="h-100 border-none">
//           <Card.Header className="fw-semibold fs-5 d-flex justify-content-between align-items-center">
//             <h4 className="m-0">EloElo</h4>
//             <div className="d-flex gap-3 align-items-center">
//               <div>
//                 <select
//                   className="form-select"
//                   value={chapter}
//                   onChange={(e) => {
//                     setChapter(e.target.value);
//                   }}
//                 >
//                   <option value={""} selected>
//                     Select Chapter
//                   </option>
//                   <option value={"Supermaket "}>Supermaket </option>
//                 </select>
//               </div>
//               <div>
//                 <select
//                   className="form-select"
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                 >
//                   <option value="en" selected>
//                     English
//                   </option>
//                   <option value="hi">Hindi</option>
//                   <option value="fr">French</option>
//                   <option value="es">Spanish</option>
//                   <option value="it">Italian</option>
//                 </select>
//               </div>

//               <div className="border rounded-5 p-1 overflow-hidden">
//                 <Image
//                   src={image}
//                   circle
//                   width={"32px"}
//                   height={"30px"}
//                   className="fit-cover"
//                 />
//               </div>
//             </div>
//           </Card.Header>
//           <Card.Body style={{ overflowY: "scroll" }} ref={ref}>
//             {messages?.map((message, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 d-flex flex-column gap-1 ${
//                   message.user === "You" ? "text-end" : ""
//                 }`}
//               >
//                 <div
//                   className={`d-flex gap-2 align-items-end ${
//                     message.user === "You" ? "flex-row-reverse" : "flex-row"
//                   }`}
//                 >
//                   <strong>{message.user}</strong>{" "}
//                   <small>{message.timestamp}</small>
//                 </div>
//                 <div
//                   className={`messageBox ${
//                     message.user === "You" ? "ml-auto" : ""
//                   }`}
//                 >
//                     <div
//                       dangerouslySetInnerHTML={{ __html: message.text }}
//                     ></div>
//                 </div>
//               </div>
//             ))}

//             {messages.length === 0 && (
//               <div className="w-auto h-100 d-flex justify-content-center align-items-center">
//                 <div
//                   className=" rounded-5 p-1 w-fit-content"
//                   style={{ width: "fit-content" }}
//                 >
//                   <Image src={image2} circle width={"150px"} />
//                 </div>
//               </div>
//             )}
//           </Card.Body>
//           <Card.Footer>
//             <Form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSend();
//               }}
//             >
//               <Row>
//                 <Col xs={9} className="d-flex gap-2 align-items-center">
//                   <img
//                     src={mic}
//                     width={"25px"}
//                     height={"25px"}
//                     className="fit-contain"
//                     style={{cursor : "pointer"}}
//                     onClick={handleStartListening}
//                   />
//                   <Form.Control
//                     type="text"
//                     placeholder="Type a message..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                   />
//                 </Col>
//                 <Col xs={3}>
//                   <Button
//                     variant="primary"
//                     type="button"
//                     onClick={handleSend}
//                     className="w-100 text-nowrap"
//                   >
//                     Send
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </Card.Footer>
//         </Card>
//       </Col>
//     </div>
//   );
// };

// export default App;
