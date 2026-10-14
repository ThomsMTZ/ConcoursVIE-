import asyncio
import os
import edge_tts

# Act 1 to 4 script
SCRIPT_PARTS = [
    (
        "À trente mille pieds d'altitude, une trajectoire ne doit rien au hasard. "
        "En arrivant à Bucarest en mai 2025 pour mon V.I.E, j'ai pris de la hauteur sur le projet AMS : "
        "rapatrier et migrer des outils critiques de navigation aérienne au sein d'une équipe agile."
    ),
    (
        "Mais un V.I.E, c'est avant tout traverser les nuages pour s'ancrer sur le terrain. "
        "En atterrissant en Roumanie, j'ai découvert une culture chaleureuse, francophile, et des ingénieurs roumains "
        "d'une réactivité redoutable qui ont enrichi mes méthodes et ouvert mes horizons."
    ),
    (
        "Une fois au sol, ma mission a pris une nouvelle dimension en mars 2026 avec le projet CABIS. "
        "Du suivi des avions dans le ciel, je suis passé à la sécurisation des passagers dans les aéroports "
        "grâce aux portiques de contrôle biométrique, en intervenant sur toute la chaîne Full-Stack."
    ),
    (
        "De la gestion du ciel avec AMS aux portiques biométriques CABIS, j'ai vu comment l'excellence technologique française "
        "rayonne lorsqu'elle s'unit au dynamisme roumain. "
        "Ce V.I.E n'a pas seulement guidé des avions et des passagers : il a transformé ma propre trajectoire."
    )
]

FULL_TEXT = " ... ".join(SCRIPT_PARTS)

VOICE = "fr-FR-HenriNeural" # Voix masculine française calme, claire et dynamique

async def main():
    os.makedirs("public/assets", exist_ok=True)
    os.makedirs("assets", exist_ok=True)

    target_public = os.path.join("public", "assets", "voiceover.mp3")
    target_assets = os.path.join("assets", "voiceover.mp3")

    print(f"Génération de la voix-off HD ({VOICE})...")
    # Taux de débit ajusté à +4% pour une diction dynamique et naturelle dans le timing
    communicate = edge_tts.Communicate(FULL_TEXT, voice=VOICE, rate="+3%", pitch="+0Hz")
    
    await communicate.save(target_public)
    print(f"Fichier audio généré avec succès dans : {target_public}")

    # Copie dans assets/
    with open(target_public, "rb") as f_src:
        with open(target_assets, "wb") as f_dst:
            f_dst.write(f_src.read())
    print(f"Fichier audio dupliqué dans : {target_assets}")

if __name__ == "__main__":
    asyncio.run(main())
