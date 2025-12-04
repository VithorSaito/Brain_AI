export const historyPrompt = (history: string, question: string) => `
Esse é o histórico de interações anteriores com o usuário:

${history}

Com base nesse histórico, responda à seguinte pergunta do usuário de forma clara e concisa:

${question}
`