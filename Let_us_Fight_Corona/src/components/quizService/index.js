//QuestionBank for test
const qBank = [{
        id: 0,
        question: "Are you experiencing any of following symptoms?  (Cough,Fever,Difficulty in breathing)",
        correct: "Yes",
        options: [
            "Yes",
            "No",
        ]
    },
    {
        id: 1,
        question: "Have you ever had any of the following? (Diabetes /Hypertension /Lung Disease /Heart Disease )",
        correct: "Yes",
        options: [
            "Yes",
            "No",

        ]
    },
    {
        id: 2,
        question: "Have you ever traveled anywhere internationally in last 28-45 days?",
        correct: "Yes",
        options: [
            "Yes",
            "No",

        ]

    },
    {
        id: 3,
        question: "Have you encountered any of this ?   (Interacted with corona positive patient/Moved without protective gear)",
        correct: "Yes",
        options: [
            "Yes",
            "No",

        ]

    }
]
export default (n = 4) =>
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));