<script setup>
import Buttons from '../components/buttons.vue';
import SectionText from '../components/sectionText.vue';
</script>

<template>
  <section class="py-6">
    <div class="container">
      <div class="grid md:grid-cols-2 grid-cols-1">
        <div class="mb-6">
          <SectionText sub-title="subscribe" paragraph="receive updates on new music, show dates, special merch & more." :sub-title-style="['md:mb-8 mb-4']"/>
        </div>
        <div class="flex md:flex-row flex-col">
          <div class="basis-full">
            <label class="block me-2 mb-6">
              <input
                type="email"
                class="block w-full h-[52px] rounded-[4px] focus:ring-primary focus:border-primary"
                placeholder="enter your email"
              />
            </label>
          </div>
          <div class="basis-1/4">
            <div class=" flex"><Buttons text="go" :class="['btn-primary','w-full','md:w-auto']"/></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
