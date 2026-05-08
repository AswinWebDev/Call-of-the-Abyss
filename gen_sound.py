import wave, struct, math, random

sample_rate = 44100
duration = 1.0 # 1 second bubbling loop
num_samples = int(sample_rate * duration)

with wave.open('public/sounds/reload.wav', 'w') as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(sample_rate)
    
    for i in range(num_samples):
        t = float(i) / sample_rate
        # Fast gurgling/bubbling frequency modulation
        freq = 200 + 400 * t + 150 * math.sin(30 * math.pi * t) + 100 * math.sin(70 * math.pi * t)
        val = math.sin(2 * math.pi * freq * t)
        
        # Envelope to make distinct bubble "pops"
        bubble_env = math.pow(math.sin(10 * math.pi * t), 4)
        val *= bubble_env
        
        # Add some water splash noise
        val += (random.random() - 0.5) * 0.15 * bubble_env
        
        # Master volume envelope (steady loop)
        env = min(1.0, t * 10) * min(1.0, (duration - t) * 10)
        val *= env
        
        val = max(-1.0, min(1.0, val))
        data = struct.pack('<h', int(val * 20000.0))
        f.writeframesraw(data)

print("Generated public/sounds/reload.wav")
