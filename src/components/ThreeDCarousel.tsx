import { useState, useEffect, useRef, useCallback, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const CARDS = [
  { img: "https://i.postimg.cc/65HGxbbj/1.png", label: "Identificação Civil", sub: "BI & Passaporte" },
  { img: "https://i.postimg.cc/651Tm2yZ/2.png", label: "Finanças & AGT", sub: "Impostos & Guias" },
  { img: "https://i.postimg.cc/LXRs1jbF/4.png", label: "Serviços Públicos", sub: "ENDE & EPAL" },
  { img: "https://i.postimg.cc/rFzwxVQ8/5.png", label: "Saúde & Emergência", sub: "Círculo de Confiança" },
  { img: "https://i.postimg.cc/4yys6Pvz/6.png", label: "Cidadania Ativa", sub: "Estado & Cidadãos" },
  { img: "https://i.postimg.cc/d0FFHwm7/7.png", label: "Portal do Cidadão", sub: "Serviços Integrados" },
];

const N = CARDS.length;
const ANGLE_STEP = 360 / N;
const BASE_SPEED = 48; // seconds per full rotation

export default function ThreeDCarousel() {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [radius, setRadius] = useState(425);
  const [cardW, setCardW] = useState(241);
  const [cardH, setCardH] = useState(428);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const isSpinningRef = useRef(true);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef(0);
  const dragStartAngleRef = useRef(0);

  const updateRadius = useCallback(() => {
    const w = window.innerWidth;
    if (w < 370) {
      setCardW(95);
      setCardH(168);
      setRadius(78);
    } else if (w < 430) {
      setCardW(112);
      setCardH(198);
      setRadius(94);
    } else if (w < 540) {
      setCardW(136);
      setCardH(241);
      setRadius(114);
    } else if (w < 640) {
      setCardW(151);
      setCardH(270);
      setRadius(143);
    } else if (w < 900) {
      setCardW(168);
      setCardH(299);
      setRadius(204);
    } else {
      setCardW(193);
      setCardH(342);
      setRadius(340);
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => {
      window.removeEventListener("resize", updateRadius);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [updateRadius]);

  const snapToCard = useCallback((index: number) => {
    isSpinningRef.current = false;
    const targetForCard = -index * ANGLE_STEP;
    
    setCurrentAngle((prev) => {
      let cur = prev % 360;
      if (cur < 0) cur += 360;
      let tgt = ((targetForCard % 360) + 360) % 360;
      let delta = tgt - cur;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      return prev + delta;
    });
    setActiveCard(index);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      isSpinningRef.current = true;
      lastTimestampRef.current = null;
    }, 2500);
  }, []);

  const spin = useCallback((ts: number) => {
    if (isSpinningRef.current && !isDraggingRef.current) {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = ts;
      }
      const delta = ts - (lastTimestampRef.current ?? ts);
      lastTimestampRef.current = ts;
      const degreesPerMs = 360 / (BASE_SPEED * 1000);
      
      setCurrentAngle((prev) => {
        const next = prev - degreesPerMs * delta;
        const calculatedActive = Math.round((((-next % 360) + 360) % 360) / ANGLE_STEP) % N;
        setActiveCard(calculatedActive);
        return next;
      });
    } else {
      lastTimestampRef.current = null;
    }
    requestRef.current = requestAnimationFrame(spin);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(spin);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [spin]);

  const handleMouseDown = useCallback((e: ReactMouseEvent | ReactTouchEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartAngleRef.current = currentAngle;
    isSpinningRef.current = false;
  }, [currentAngle]);

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = x - dragStartRef.current;
    setCurrentAngle(dragStartAngleRef.current + dx * 0.45);
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    const norm = ((-currentAngle % 360) + 360) % 360;
    const nearestIdx = Math.round(norm / ANGLE_STEP) % N;
    snapToCard(nearestIdx);
  }, [currentAngle, snapToCard]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="pentagon-stage cursor-grab active:cursor-grabbing relative flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Ring */}
        <div 
          ref={ringRef}
          className="pentagon-ring relative transition-transform duration-75 ease-linear"
          style={{
            width: `${cardW}px`,
            height: `${cardH}px`,
            transform: `rotateY(${currentAngle}deg)`,
            transformStyle: "preserve-3d"
          }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
               className={`penta-card ${i === activeCard ? "shadow-2xl shadow-black/50 scale-105" : ""}`}
              style={{
                width: `${cardW}px`,
                height: `${cardH}px`,
                transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${radius}px)`,
                transition: "box-shadow 0.3s, transform 0.3s"
              }}
              onClick={() => snapToCard(i)}
            >
              <img src={card.img} alt={card.label} className="w-full h-full object-cover select-none pointer-events-none" loading="lazy" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>


      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-8 relative z-10">
        <button 
          className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
          onClick={() => snapToCard((activeCard - 1 + N) % N)}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {CARDS.map((_, i) => (
            <button
              key={i}
              className={`penta-dot ${i === activeCard ? "active" : ""}`}
              onClick={() => snapToCard(i)}
            />
          ))}
        </div>

        <button 
          className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95"
          onClick={() => snapToCard((activeCard + 1) % N)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
