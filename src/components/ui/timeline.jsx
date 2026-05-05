import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-wrapper" ref={containerRef}>
      <div ref={ref} className="timeline-container">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-point-container">
              <div className="timeline-point-outer">
                <div className="timeline-point-inner" />
              </div>
            </div>

            <div className="timeline-content">
              <h3 className="timeline-title">
                {item.title}
              </h3>
              <p className="timeline-description">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-line-track" />
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="timeline-line-progress"
      />
    </div>
  );
};
