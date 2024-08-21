"use client";

export default function Home() {
  return (
    <main>
      Olá!
      <MinhaDIV l="320px" a="240px" />
    </main>
  );
}

function MinhaDIV({ l, a }) {
  return (
    <div
      style={{
        width: l,
        height: a,
        backgroundColor: "black",
      }}
    >
      <h1 class="h1">Piredda colocando todo mundo em disgraça</h1>
      <p class="p">
        Piredda em seu dia mais normal de grau 1 numa segunda feira decide dizer
        a todos que um certo professor fez exame de próstata e ficou gravando
        audios sem ninguem sabe no dia seguinte o professor deu esporro geral e
        queremos mata-lo
      </p>
      <img
        src="https://preview.redd.it/pode-n%C3%A3o-man-v0-s9mbqxy0m3fc1.png?width=1080&crop=smart&auto=webp&s=fb9f424a00ab6f6c8820f0f6f3120a3edffc7b92"
        class="imagem"
      />
      <a href="https://www.youtube.com/watch?v=k_eqAl10ghM" target="_blank">
        1
      </a>
      <a href="https://www.youtube.com/watch?v=9BHkGy6dJ34" target="_blank">
        2
      </a>
      <a href="https://www.youtube.com/watch?v=ssyNgK9n-Vw" target="_blank">
        3
      </a>
    </div>
  );
}
