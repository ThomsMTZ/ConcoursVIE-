import asyncio
import os
import subprocess
import imageio_ffmpeg
import edge_tts

ACTS = [
    {
        "id": 1,
        "name": "Acte 1 // 30,000 FT",
        "target_start": 1.0,
        "text": (
            "À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. "
            "En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : "
            "rapatrier et migrer des outils critiques de navigation aérienne au sein d'une équipe agile."
        )
    },
    {
        "id": 2,
        "name": "Acte 2 // 4,500 FT",
        "target_start": 23.0,
        "text": (
            "Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain. "
            "En atterrissant en Roumanie, j'ai découvert une culture chaleureuse, francophile, et des ingénieurs roumains "
            "d'une réactivité redoutable qui ont enrichi mes méthodes et ouvert mes horizons."
        )
    },
    {
        "id": 3,
        "name": "Acte 3 // 0 FT (SOL)",
        "target_start": 45.0,
        "text": (
            "Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. "
            "Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports "
            "grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack."
        )
    },
    {
        "id": 4,
        "name": "Acte 4 // PERSPECTIVES",
        "target_start": 68.0,
        "text": (
            "De la gestion du ciel avec AMS aux portiques biométriques CABIS, j'ai vu comment l'excellence technologique française "
            "rayonne lorsqu'elle s'unit au dynamisme roumain. "
            "Ce V.I.E n'a pas seulement guidé des avions et des passagers : il a transformé ma propre trajectoire."
        )
    }
]

VOICE = "fr-FR-HenriNeural"
ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

async def test_generation():
    work_dir = os.path.dirname(os.path.abspath(__file__))
    temp_dir = os.path.join(work_dir, "temp_tts")
    os.makedirs(temp_dir, exist_ok=True)

    print(f"FFmpeg binary: {ffmpeg_exe}")
    print(f"Synthesizing 4 acts with {VOICE}...")

    durations = []
    for act in ACTS:
        out_file = os.path.join(temp_dir, f"act_{act['id']}.mp3")
        comm = edge_tts.Communicate(act["text"], voice=VOICE, rate="+3%", pitch="+0Hz")
        await comm.save(out_file)
        
        # Get duration with ffprobe / ffmpeg
        cmd = [
            ffmpeg_exe, "-i", out_file,
            "-f", "null", "-"
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        # Parse duration from stderr
        dur_str = "unknown"
        for line in res.stderr.splitlines():
            if "Duration:" in line:
                dur_str = line.split("Duration:")[1].split(",")[0].strip()
                break
        print(f"Act {act['id']} ({act['target_start']}s target start): duration = {dur_str}")
        durations.append((act["id"], dur_str, out_file))

if __name__ == "__main__":
    asyncio.run(test_generation())
