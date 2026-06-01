import sys
from PIL import Image

def chroma_key(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        r, g, b, a = item
        
        # Calculate how "green" the pixel is
        green_dominance = g - max(r, b)
        
        if green_dominance > 40 and g > 100:
            # Solid green background -> fully transparent
            new_data.append((255, 255, 255, 0))
        elif green_dominance > 15 and g > 80:
            # Edge pixel -> partial transparency and reduce green
            alpha = int(255 - (green_dominance - 15) * 8)
            alpha = max(0, min(255, alpha))
            # reduce the green to match the average of R and B to avoid green halo
            avg_rb = (r + b) // 2
            new_data.append((r, avg_rb, b, alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    chroma_key(sys.argv[1], sys.argv[2])
