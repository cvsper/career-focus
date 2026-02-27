"use server"

export async function getSignedUrl() {
  const agentId = process.env.ELEVENLABS_AGENT_ID
  const apiKey = process.env.ELEVENLABS_API_KEY

  if (!agentId || !apiKey) {
    throw new Error("ElevenLabs agent not configured")
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
    {
      method: "GET",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error("Failed to get signed URL")
  }

  const data = await response.json()
  return { signedUrl: data.signed_url }
}
