import asyncio
import edge_tts

VOICE = "fr-FR-HenriNeural"
text = (
    "Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. "
    "Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports "
    "grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack."
)

async def check_words():
    comm = edge_tts.Communicate(text, voice=VOICE, rate="+3%", pitch="+0Hz")
    submaker = edge_tts.SubMaker()
    async for chunk in comm.stream():
        if chunk["type"] == "WordBoundary":
            # chunk['offset'] is in 100ns units
            offset_sec = chunk["offset"] / 10_000_000
            duration_sec = chunk["duration"] / 10_000_000
            word = chunk["text"]
            global_sec = 45.0 + offset_sec
            if "biométrique" in word.lower() or "portiques" in word.lower() or "contrôle" in word.lower():
                print(f"Word: '{word}' | In-act offset: {offset_sec:.2f}s | Global video timeline: {global_sec:.2f}s")

if __name__ == "__main__":
    asyncio.run(check_words())
