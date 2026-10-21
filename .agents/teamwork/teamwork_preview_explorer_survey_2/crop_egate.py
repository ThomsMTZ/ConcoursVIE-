from PIL import Image

p = r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\public\assets\images\act3_cabis_terminal.jpg"
im = Image.open(p)
w, h = im.size

# Let's crop candidate regions and save them in agent thumbnails
# 1. Front pillar screen right in front of the passenger
# Approx x: 750 to 850, y: 320 to 450 (relative to 1376x768)
crop1 = im.crop((int(w * 0.53), int(h * 0.40), int(w * 0.62), int(h * 0.65)))
crop1.save(r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\crop_egate_screen_right.jpg")

# 2. Gate pillar screen on the left gate
crop2 = im.crop((int(w * 0.20), int(h * 0.42), int(w * 0.32), int(h * 0.65)))
crop2.save(r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\crop_egate_screen_left.jpg")

# 3. Passenger face region
crop3 = im.crop((int(w * 0.46), int(h * 0.32), int(w * 0.55), int(h * 0.50)))
crop3.save(r"c:\Users\Thomas Martinez\Documents\GitHub\ConcoursVIE\.agents\teamwork\teamwork_preview_explorer_survey_2\thumbnails\crop_passenger.jpg")

print("Crops saved successfully")
