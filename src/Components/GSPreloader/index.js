import React, { useEffect, useRef } from 'react';
import gsap, { Power1, Power2, TimelineLite, TimelineMax, TweenLite } from 'gsap';

const GSPreloader = ({ radius = 42, dotSize = 15, dotCount = 10, colors = ['#61AC27', '#555', 'purple', '#FF6600'], boxOpacity = 0.2, boxBorder = '1px solid #AAA', animationOffset = 1.8 }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const parent = preloaderRef.current;
    const element = document.createElement('div');
    const createDot = (rotation) => {
      const dot = document.createElement('div');
      element.appendChild(dot);
      gsap.set(dot, {
        width: dotSize,
        height: dotSize,
        transformOrigin: `${-radius}px 0px`,
        x: radius,
        backgroundColor: colors[colors.length - 1],
        borderRadius: '50%',
        force3D: true,
        position: 'absolute',
        rotation: rotation,
      });
      dot.className = 'preloader-dot';
      return dot;
    };

    const i = dotCount;
    const rotationIncrement = 360 / i;
    const animation = new TimelineLite({ paused: true });
    const dots = [];
    let isActive = false;
    const box = document.createElement('div');
    let closingAnimation;

    colors.push(colors.shift());

    gsap.set(box, {
      width: radius * 2 + 70,
      height: radius * 2 + 70,
      borderRadius: '14px',
      backgroundColor: 'white',
      border: boxBorder,
      position: 'absolute',
      xPercent: -50,
      yPercent: -50,
      opacity: boxOpacity,
    });
    box.className = 'preloader-box';
    element.appendChild(box);

    parent.appendChild(element);
    gsap.set(element, {
      position: 'fixed',
      top: '45%',
      left: '50%',
      perspective: 600,
      overflow: 'visible',
      zIndex: 2000,
    });
    animation.from(box, 0.1, { opacity: 0, scale: 0.1, ease: Power1.easeOut }, animationOffset);

    while (--i > -1) {
      const dot = createDot(i * rotationIncrement);
      dots.unshift(dot);
      animation.from(dot, 0.1, { scale: 0.01, opacity: 0, ease: Power1.easeOut, immediateRender: true }, animationOffset);
      const tl = new TimelineMax({ repeat: -1, repeatDelay: 0.25 });
      for (let j = 0; j < colors.length; j++) {
        tl.to(dot, 2.5, { rotation: '-=360', ease: Power2.easeInOut }, j * 2.9)
          .to(dot, 1.2, { skewX: '+=360', backgroundColor: colors[j], ease: Power2.easeInOut }, 1.6 + 2.9 * j);
      }
      animation.add(tl, i * 0.07);
    }

    if (gsap.render) {
      gsap.render();
    }

    const active = (show) => {
      if (show === undefined) {
        return isActive;
      }
      if (isActive !== show) {
        isActive = show;
        if (closingAnimation) {
          closingAnimation.kill();
        }
        if (isActive) {
          element.style.visibility = 'visible';
          gsap.set([element, box], { rotation: 0 });
          animation.play(animationOffset);
        } else {
          closingAnimation = new TimelineLite();
          if (animation.time() < animationOffset + 0.3) {
            animation.pause();
            closingAnimation
              .to(element, 1, { rotation: -360, ease: Power1.easeInOut })
              .to(box, 1, { rotation: 360, ease: Power1.easeInOut }, 0);
          }
          closingAnimation
            .staggerTo(dots, 0.3, { scale: 0.01, opacity: 0, ease: Power1.easeIn, overwrite: false }, 0.05, 0)
            .to(box, 0.4, { opacity: 0, scale: 0.2, ease: Power2.easeIn, overwrite: false }, 0)
            .call(() => {
              animation.pause();
              closingAnimation = null;
            })
            .set(element, { visibility: 'hidden' });
        }
      }
      return active;
    };

    return () => {
      // Clean up the preloader element when the component unmounts
      parent.removeChild(element);
    };
  }, [radius, dotSize, dotCount, colors, boxOpacity, boxBorder, animationOffset]);

  return <div ref={preloaderRef} />;
};

export default GSPreloader;