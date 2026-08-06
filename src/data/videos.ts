import type { VideoItem } from "../types";

export const videos: VideoItem[] = [
  {
    title: "Caderneta de Vacina Online — demo",
    description:
      "Demonstração do meu TCC no técnico em Informática: um sistema Java Web para gestão de vacinas, com controle de acesso e histórico de imunização.",
    youtubeId: "Tt4oCoehZr0",
  },
  {
    // Placeholder slot — swap `youtubeId` for a real video and set `isPlaceholder` to false.
    title: "Novo vídeo em breve",
    description: "Espaço reservado para o próximo vídeo — troque este item em src/data/videos.ts.",
    youtubeId: "",
    isPlaceholder: true,
  },
];
