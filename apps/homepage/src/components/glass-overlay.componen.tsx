export function GlassOverlay() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
    />
  );
}
