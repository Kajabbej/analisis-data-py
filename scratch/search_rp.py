import os

workspace_dir = r"c:\Users\mohgh\analisis-data-py"
files_to_check = ["index.html", "script.js"]

for filename in files_to_check:
    filepath = os.path.join(workspace_dir, filename)
    if os.path.exists(filepath):
        print(f"Checking {filename}...")
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
            for idx, line in enumerate(lines):
                if "Rp" in line or "rupiah" in line.lower():
                    print(f"Line {idx+1}: {line.strip()}")
