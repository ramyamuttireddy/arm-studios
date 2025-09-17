// src/components/ProjectImage.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const vertexShader = `
  varying vec2 v_uv;
  void main() {
    v_uv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_radius;
  varying vec2 v_uv;

  void main() {
    vec2 uv = v_uv;
    vec4 tex = texture2D(u_texture, uv);
    float dist = distance(uv, u_mouse);
    float mask = step(dist, u_radius);
    vec3 inverted = vec3(1.0) - tex.rgb;
    vec3 finalColor = mix(tex.rgb, inverted, mask);
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function ProjectImage({ image }) {
  const containerRef = useRef();
  const [renderer, setRenderer] = useState(null);
  const uniformsRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const texture = new THREE.TextureLoader().load(image);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    const uniforms = {
      u_texture: { value: texture },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_radius: { value: 0 },
    };
    uniformsRef.current = uniforms;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    setRenderer(renderer);

    // Animate
    let frameId;
    const animate = (time) => {
      uniforms.u_time.value = time * 0.001;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate(0);

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.set(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, [image]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1 - (e.clientY - rect.top) / rect.height;
    if (uniformsRef.current) uniformsRef.current.u_mouse.value.set(x, y);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (uniformsRef.current)
      gsap.to(uniformsRef.current.u_radius, { value: 0.35, duration: 0.4 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (uniformsRef.current)
      gsap.to(uniformsRef.current.u_radius, { value: 0, duration: 0.3 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
