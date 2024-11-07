<script setup>
import shopsData from '@/data/shop';
import CardMerch from '../../components/cardMerch.vue';
const { shops}=shopsData

// 選取前資料
const selectedShop = shops.sort(() => Math.random() - 0.5).slice(0, 4);
</script>
<template>
  <section class="lg:py-20 py-12">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-center gap-6 mb-4">
        <div class="basis-5/12">
          <div class="bg-surface lg:p-8 p-2">
            <img
              class="w-full object-cover mb-6"
              src="https://github.com/vvayHuang/galaxyBoyzV3/blob/main/public/images/shop/shop-1.png?raw=true"
              alt=""
            />
            <img
              class="w-full object-cover mb-6"
              src="https://github.com/vvayHuang/galaxyBoyzV3/blob/main/public/images/shop/shop-back-1.png?raw=true"
              alt=""
            />
          </div>
        </div>
        <div class="basis-5/12">
          <div class="bg-surface lg:p-8 p-2">
            <h2 class="uppercase text-display-1 mb-6">days of our lives cd</h2>
            <p class="mb-6 uppercase">ntd 500</p>
            <p class="mb-6">Released: 23rd August, 2024</p>
            <a class="btn-primary-outline w-full mb-6" href="#"
              >pre-order-now</a
            >
            <p>
              The Days Of Our Lives CD by GalaxyBoyz is a captivating
              exploration of life’s most poignant moments, wrapped in the band’s
              signature sound. This album takes listeners on an emotional
              journey through love, loss, joy, and reflection, blending powerful
              lyrics with dynamic rock melodies. Each track is a snapshot of
              life’s significant events, capturing the essence of what it means
              to live fully and authentically. From the soaring anthems to the
              introspective ballads, Days Of Our Lives is a heartfelt collection
              that resonates deeply with fans old and new. Whether you’re
              experiencing the highs or navigating the lows, this album is the
              perfect soundtrack to accompany you through it all. <br /><br />
              Days Of Our Lives by GalaxyBoyz is more than just an album—it’s a
              sonic diary that chronicles the band’s personal and creative
              evolution. Each track is meticulously crafted to evoke a spectrum
              of emotions, from the triumphant highs of “Sunrise Serenade” to
              the nostalgic echoes of “Waltz of Memories.” The CD invites
              listeners to reflect on their own experiences, making each
              playthrough feel uniquely personal. With its blend of powerful
              rock riffs and soul-stirring lyrics, Days Of Our Lives is a
              testament to the band’s ability to connect with their audience on
              a profound level. This is an album that not only tells a story but
              also encourages fans to embrace their own journeys, making it a
              must-have for anyone who values music that speaks to the heart.
            </p>
          </div>
        </div>
      </div>
      <h3 class="text-display-3 mb-3">you may also like:</h3>
      <ul class="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-4">
        <CardMerch :limit="4"/>
      </ul>
    </div>
  </section>
</template>