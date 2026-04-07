import cv2
import numpy as np

video_path = r"C:\Users\HP\Downloads\VID-20260125-WA0000.mp4"
output_4 = r"d:\Rakshitha-Diagnostics-main\public\images\4.png"
output_5 = r"d:\Rakshitha-Diagnostics-main\public\images\5.png"

def enhance_and_save(frame, output_path):
    # Rotate 90 degrees counter-clockwise
    rotated = cv2.rotate(frame, cv2.ROTATE_90_COUNTERCLOCKWISE)
    
    # Denoise
    denoised = cv2.fastNlMeansDenoisingColored(rotated, None, 10, 10, 7, 21)
    
    # Sharpening kernel
    kernel = np.array([[0, -1, 0], 
                       [-1, 5,-1], 
                       [0, -1, 0]])
    sharpened = cv2.filter2D(denoised, -1, kernel)
    
    # Increase Contrast slightly
    lab = cv2.cvtColor(sharpened, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.5, tileGridSize=(8,8))
    cl = clahe.apply(l)
    limg = cv2.merge((cl,a,b))
    enhanced = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)
    
    cv2.imwrite(output_path, enhanced)
    print(f"Saved {output_path}")


cap = cv2.VideoCapture(video_path)

cap.set(cv2.CAP_PROP_POS_FRAMES, 184)
ret, frame = cap.read()
if ret:
    enhance_and_save(frame, output_4)

cap.set(cv2.CAP_PROP_POS_FRAMES, 220)
ret, frame = cap.read()
if ret:
    enhance_and_save(frame, output_5)

cap.release()
