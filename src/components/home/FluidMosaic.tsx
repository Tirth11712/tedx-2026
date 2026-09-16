"use client";

// Nested flexbox tree: hovering (or tapping, on touch) a tile grows it and every
// row/column containing it, while siblings shrink via spring-animated flex-grow.

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/fluid-mosaic.css";

const SPRING = { type: "spring" as const, stiffness: 280, damping: 30, mass: 1 };

type TileNode = {
  key: string;
  tile: true;
  base: number;
  hover: number;
  src: string;
};

type ContainerNode = {
  key: string;
  type: "row" | "column";
  base: number;
  hover: number;
  children: MosaicNode[];
};

type MosaicNode = TileNode | ContainerNode;

type HoverSetter = (updater: string | null | ((h: string | null) => string | null)) => void;

type NodeInfo = { base: number; hover: number; desc: Set<string> };

function buildLayout(images: string[]): { layout: ContainerNode[]; info: Map<string, NodeInfo> } {
  const src = (i: number) => images[i % images.length];

  const layout: ContainerNode[] = [
    {
      key: "top", type: "row", base: 2.85, hover: 3.55,
      children: [
        { key: "t01", tile: true, base: 1, hover: 1.32, src: src(0) },
        {
          key: "right", type: "column", base: 1, hover: 1.42,
          children: [
            {
              key: "sub", type: "row", base: 0.575, hover: 1.55,
              children: [
                { key: "t02", tile: true, base: 1.86, hover: 3.0, src: src(1) },
                { key: "t03", tile: true, base: 1, hover: 1.9, src: src(2) },
              ],
            },
            { key: "t04", tile: true, base: 1, hover: 1.35, src: src(3) },
          ],
        },
      ],
    },
    {
      key: "bottom", type: "row", base: 1, hover: 2.55,
      children: [
        { key: "t05", tile: true, base: 1.05, hover: 2.35, src: src(4) },
        { key: "t06", tile: true, base: 1.82, hover: 3.2, src: src(5) },
        { key: "t07", tile: true, base: 1.86, hover: 3.2, src: src(6) },
        { key: "t08", tile: true, base: 1, hover: 2.1, src: src(7) },
      ],
    },
  ];

  const info = new Map<string, NodeInfo>();
  function decorate(node: MosaicNode): Set<string> {
    if ("tile" in node) {
      const desc = new Set([node.key]);
      info.set(node.key, { base: node.base, hover: node.hover, desc });
      return desc;
    }
    const desc = new Set<string>();
    node.children.forEach((c) => decorate(c).forEach((k) => desc.add(k)));
    info.set(node.key, { base: node.base, hover: node.hover, desc });
    return desc;
  }
  layout.forEach(decorate);

  return { layout, info };
}

function flexFor(key: string, info: Map<string, NodeInfo>, hovered: string | null) {
  const n = info.get(key);
  if (!n) return 1;
  return hovered && n.desc.has(hovered) ? n.hover : n.base;
}

function SpringFlex({
  grow,
  className,
  style,
  onPointerEnter,
  onPointerDown,
  children,
}: {
  grow: number;
  className?: string;
  style?: React.CSSProperties;
  onPointerEnter?: (e: React.PointerEvent) => void;
  onPointerDown?: (e: React.PointerEvent) => void;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ flexGrow: grow }}
      transition={SPRING}
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerDown={onPointerDown}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function Tile({
  node,
  info,
  hovered,
  onHover,
}: {
  node: TileNode;
  info: Map<string, NodeInfo>;
  hovered: string | null;
  onHover: HoverSetter;
}) {
  return (
    <SpringFlex
      grow={flexFor(node.key, info, hovered)}
      className="fluidMosaicTile"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") onHover(node.key);
      }}
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse") onHover((h) => (h === node.key ? null : node.key));
      }}
    >
      <Image
        src={node.src}
        alt="Moment from a previous TEDxSVIT edition"
        fill
        draggable={false}
        className="fluidMosaicImg"
        sizes="(max-width: 767px) 90vw, 45vw"
      />
    </SpringFlex>
  );
}

function MosaicBranch({
  node,
  info,
  hovered,
  onHover,
}: {
  node: ContainerNode;
  info: Map<string, NodeInfo>;
  hovered: string | null;
  onHover: HoverSetter;
}) {
  return (
    <SpringFlex
      grow={flexFor(node.key, info, hovered)}
      className="fluidMosaicBranch"
      style={{ flexDirection: node.type === "column" ? "column" : "row" }}
    >
      {node.children.map((c) =>
        "tile" in c ? (
          <Tile key={c.key} node={c} info={info} hovered={hovered} onHover={onHover} />
        ) : (
          <MosaicBranch key={c.key} node={c} info={info} hovered={hovered} onHover={onHover} />
        )
      )}
    </SpringFlex>
  );
}

export default function FluidMosaic({ images }: { images: string[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const { layout, info } = useMemo(() => buildLayout(images), [images]);

  return (
    <div className="fluidMosaicWrapper">
      <div
        className="fluidMosaicStage"
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setHovered(null);
        }}
      >
        <div className="fluidMosaicPanel">
          {layout.map((node) => (
            <MosaicBranch key={node.key} node={node} info={info} hovered={hovered} onHover={setHovered} />
          ))}
        </div>
      </div>
    </div>
  );
}
