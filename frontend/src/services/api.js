const API_URL =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function streamChat(
    question,
    history,
    onChunk,
    signal
) {
    const response = await fetch(
        `${API_URL}/chat/stream`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                question,
                history,
            }),

            signal,
        }
    );

    if (!response.ok) {
        throw new Error(
            `Failed to connect to chatbot (${response.status})`
        );
    }

    if (!response.body) {
        throw new Error(
            "Streaming is not supported by this browser"
        );
    }

    const reader =
        response.body.getReader();

    const decoder =
        new TextDecoder();

    let buffer = "";

    while (true) {
        const { value, done } =
            await reader.read();

        if (done) {
            break;
        }

        buffer += decoder.decode(
            value,
            {
                stream: true,
            }
        );

        const events =
            buffer.split("\n\n");

        buffer =
            events.pop() || "";

        for (const event of events) {
            if (!event.startsWith("data:")) {
                continue;
            }

            const data =
                event
                    .replace("data:", "")
                    .trim();

            if (data === "[DONE]") {
                return;
            }

            const parsed =
                JSON.parse(data);

            if (parsed.error) {
                throw new Error(
                    parsed.error
                );
            }

            if (parsed.content) {
                onChunk(parsed.content);
            }
        }
    }
}