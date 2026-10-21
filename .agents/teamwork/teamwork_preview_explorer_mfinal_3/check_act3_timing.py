import asyncio
import edge_tts

text = (
    "Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. "
    "Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports "
    "grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack."
)

async def check():
    comm = edge_tts.Communicate(text, voice="fr-FR-HenriNeural", rate="+3%")
    async for chunk in comm.stream():
        if chunk["type"] != "audio":
            offset_sec = chunk["offset"] / 10_000_000
            dur_sec = chunk["duration"] / 10_000_000
            print(f"{chunk['type']}: offset={offset_sec:.2f}s, dur={dur_sec:.2f}s, text='{chunk['text']}'")

if __name__ == "__main__":
    asyncio.run(check())
