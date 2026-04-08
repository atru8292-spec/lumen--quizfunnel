export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const webhookURL = "https://neiro-arina.ru/webhook/4106c996-cf23-4014-aaf2-06dd26d65be2";

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    return res.status(response.status).send(text);
  } catch (error) {
    return res.status(500).json({
      error: "Proxy error",
      details: String(error),
    });
  }
}
