<script setup>
import Navbar from "@/components/Navbar.vue";
import infos from "@/data/info";
</script>

<template>
  <Navbar/>
  <section class="lg:py-20 py-12">
    <div class="container">
      <div class="flex md:flex-row flex-col gap-6">
        <div class="basis-9/12">
            <div class="  mb-4"><img class=" rounded-t w-full h-full object-cover" src="../../assets/images/info/info-1.png" alt="group-pic"></div>
          <div class=" lg:p-8 rounded-b">
            In the vast expanse of the music universe, where genres collide like
            stars in a cosmic dance, emerges a group that dares to explore the
            uncharted territories of sound, emotion, and connection. Introducing
            the galaxyBoyz, a musical phenomenon that transcends boundaries and
            brings galaxies of listeners together through their unique melodies
            and energetic performances. The journey of galaxyBoyz began as a
            constellation of dreams when a group of like-minded individuals
            decided to fuse their diverse musical backgrounds into a single
            entity. Their shared passion for creating art that resonates beyond
            linguistic and cultural confines led them to form a band that orbits
            around one core principle: to spread positivity and unity through
            music. Each member of galaxyBoyz brings a distinct star to the
            constellation, contributing a different color and texture to the
            group's sonic palette. Their music effortlessly blends elements from
            various genres—pop, rock, electronic, and more—to create a sound
            that defies categorization. One moment, you're floating in an
            ethereal electronic atmosphere, and the next, you're swept away by
            the power of a rock anthem. Their versatility stems from a
            commitment to constant experimentation and pushing the boundaries of
            what's possible. At the heart of galaxyBoyz's mission is a
            deep-seated belief in the universal language of music. Their
            melodies are not just notes; they are cosmic signals that resonate
            with emotions, experiences, and dreams common to all humanity. With
            every chord they strike and every lyric they sing, they reach across
            galaxies to touch the hearts of listeners from different walks of
            life. To witness a galaxyBoyz performance is to embark on an
            interstellar journey. Their live shows are more than just concerts;
            they are cosmic experiences that take the audience on a ride through
            an ever-changing sonic universe. From their visually captivating
            stage setup to their infectious energy, every aspect of their
            performances is designed to create a celestial connection with the
            crowd. With their meteoric rise, galaxyBoyz has caught the attention
            of both the music industry and fans alike. Their debut album,
            "Stellar Odyssey," was a celestial revelation, garnering critical
            acclaim for its innovative sound and captivating storytelling. As
            they continue to create and evolve, the world eagerly awaits their
            next sonic transmission. But galaxyBoyz is more than just a musical
            group; they are a constellation of values. They are staunch
            advocates for social change and use their platform to raise
            awareness about important issues affecting the world. Their
            collaborations with various charities and organizations reflect
            their commitment to making a positive impact on both the local and
            global scales. In a world that sometimes feels divided, galaxyBoyz
            serves as a shining example of how art can bring people together.
            Through their music, they remind us that, just like stars in a
            galaxy, we are all part of a larger whole. So, let the melodies of
            galaxyBoyz guide you through the cosmic expanse, uniting us all in a
            symphony of human experience.
          </div>
        </div>
        <div class="basis-3/12">
          <div class="lg:p-8">
            <h2 class="mb-3 text-display-2">Contact</h2>
            <ul class=" flex flex-col gap-6">
              <li v-for="info in infos" :key="info.id">
                <p class="text-title-1 font-bold">{{info.title}}</p>
                <p class="text-body-1">{{info.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
