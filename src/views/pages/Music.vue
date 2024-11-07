<script setup>
import facebook from "@/components/icons/facebook.vue";
import instagram from "@/components/icons/instagram.vue";
import twitter from "@/components/icons/twitter.vue";
import CardMusic from "../../components/cardMusic.vue";
</script>
<template>
  <section class="lg:py-20 py-12">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-center gap-6 mb-4">
        <div class="basis-5/12 order-2 md:order-1">
          <div class="bg-surface lg:p-8 p-2 flex flex-col gap-6">
            <div>
              <h1 class="uppercase text-display-2 mb-2">days of our lives</h1>
              <h2 class="text-title-2 font-body font-bold">
                by <a href="#">GalaxyBoyz</a>
              </h2>
            </div>
            <nav>
              <ol class="list-decimal ps-6">
                <li>Sunrise Serenade</li>
                <li>Memories in Motion</li>
                <li>Echoes of Lughter</li>
                <li>Moments in Bloom</li>
                <li>Whispers ofTomorrow</li>
                <li>Chasing Rainbows</li>
                <li>Dancing Thrugh Time</li>
                <li>Fading Twilight</li>
                <li>Footprints n the Sand</li>
                <li>The Journey Within</li>
              </ol>
            </nav>
            <p>
              Produced by Alex Starlight<br />
              Engineered by Luna Soundwave Assistant <br />
              Engineer by Max Nova <br />
              Mastered by Aiden Nebula <br />
              Vinyl Mastering Levi Seitz at Blackbelt <br />
              <br />
              Vocal Arranger: Olivia Celestia <br />
              Drummer: Milo Meteor <br />
              Guitarist: Zara Aurora <br />
              Bassist: Leo Galaxy <br />
              Keyboardist: Stella Twilight Background Music Arranger: Nina Nova
              <br />
              Synthesizer Technician: Lucas Cosmic <br />
              Programmer: Sophie Starshine <br />
              String Arranger: Noah Nebulon <br /><br />
              Album Cover Art by wayhuang <br />
              Art direction and design by wayhuang <br /><br />
              released November 11, 2023 all rights reserved
            </p>
            <div>
              <h4 class="font-body mb-2">Digital Album</h4>
              <p class="mb-2">
                Includes high-quality download in FLAC and more
              </p>
              <a class="text-primary" href="#">Buy Digital Album </a>
              <span>$950 NT </span>
            </div>
          </div>
        </div>
        <div class="basis-5/12 order-1 md:order-2">
          <div class="bg-surface lg:p-8 p-2 flex flex-col gap-6">
            <img
              class="w-full object-cover"
              src="https://github.com/vvayHuang/galaxyBoyzV3/blob/main/public/images/release/day-of-our-lives.png?raw=true"
              alt=""
            />
            <nav class="md:block hidden">
              <ul class="flex lg:gap-4 md:gap-2 gap-1">
                <li><a href="#">rock</a></li>
                <li><a href="#">alternative</a></li>
                <li><a href="#">dream pop</a></li>
                <li><a href="#">indie rock</a></li>
              </ul>
            </nav>
            <nav class="md:flex hidden gap-6">
              <h4 class="font-body">share to:</h4>
              <ul class="flex gap-6">
                <li>
                  <a href="#"><facebook /></a>
                </li>
                <li>
                  <a href="#"><instagram /></a>
                </li>
                <li>
                  <a href="#"><twitter /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="lg:py-20 py-12">
        <h3 class="text-display-3 mb-3">you may also like:</h3>
        <ul class="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-4">
         <CardMusic :limit="4"/>
        </ul>
      </div>
    </div>
  </section>
</template>
